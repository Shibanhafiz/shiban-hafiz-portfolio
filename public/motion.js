(() => {
  'use strict';

  if (!window.gsap || !window.ScrollTrigger || !window.matchMedia) return;

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktopViewport = window.matchMedia('(min-width: 901px)');
  const activeCardTweens = new Map();

  let contentContext = null;
  let parallaxContext = null;
  let cardBatchTriggers = [];
  let removeReducedMotionListener = () => {};
  let removeDesktopViewportListener = () => {};
  let suspended = false;
  let disposed = false;

  const subscribeMediaQuery = (mediaQuery, handler) => {
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }

    if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }

    return () => {};
  };

  const clearContentMotion = () => {
    cardBatchTriggers.forEach((trigger) => trigger.kill());
    cardBatchTriggers = [];

    activeCardTweens.forEach((targets, tween) => {
      tween.kill();
      gsap.set(targets, { clearProps: 'opacity,transform' });
    });
    activeCardTweens.clear();

    if (contentContext) {
      contentContext.revert();
      contentContext = null;
    }
  };

  const clearParallax = () => {
    if (!parallaxContext) return;
    parallaxContext.revert();
    parallaxContext = null;
  };

  const buildParallax = () => {
    clearParallax();
    if (disposed || suspended || reducedMotion.matches || !desktopViewport.matches) return;

    const hero = document.querySelector('#top');
    const heroArt = hero?.querySelector('.hero-art');
    if (!hero || !heroArt) return;

    parallaxContext = gsap.context(() => {
      gsap.to(heroArt, {
        yPercent: -2.25,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.65
        }
      });
    }, hero);
  };

  const buildContentMotion = () => {
    clearContentMotion();
    if (disposed || suspended || reducedMotion.matches) return;

    contentContext = gsap.context(() => {
      const heroItems = gsap.utils.toArray(
        '#top .hero-copy > h1, #top .hero-copy > .hero-role, #top .hero-copy > .hero-intro, #top .hero-copy > .hero-actions, #top .hero-copy > .stack-block'
      );

      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.075,
            ease: 'power3.out',
            clearProps: 'opacity,transform'
          }
        );
      }

      const sectionReveals = [
        { trigger: '#about', targets: ['#about .section-heading', '#about .about-grid'] },
        { trigger: '#skills', targets: ['#skills .section-heading', '#skills .skills-table'] },
        { trigger: '#work', targets: ['#work .section-heading'] }
      ];

      sectionReveals.forEach(({ trigger, targets }) => {
        const triggerElement = document.querySelector(trigger);
        const revealTargets = targets.flatMap((selector) => gsap.utils.toArray(selector));
        if (!triggerElement || !revealTargets.length) return;

        gsap.fromTo(
          revealTargets,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.64,
            stagger: 0.09,
            ease: 'power2.out',
            clearProps: 'opacity,transform',
            immediateRender: false,
            scrollTrigger: {
              trigger: triggerElement,
              start: 'top 82%',
              once: true
            }
          }
        );
      });

      const projectCards = gsap.utils.toArray('#project-grid .project-card');
      if (projectCards.length) {
        cardBatchTriggers.push(
          ...ScrollTrigger.batch(projectCards, {
            interval: 0.1,
            batchMax: 3,
            start: 'top 84%',
            once: true,
            onEnter: (cards) => {
              const targets = gsap.utils.toArray(cards);
              const tween = gsap.fromTo(
                targets,
                { opacity: 0, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.62,
                  stagger: 0.1,
                  ease: 'power2.out',
                  clearProps: 'opacity,transform',
                  overwrite: 'auto'
                }
              );
              activeCardTweens.set(tween, targets);
              tween.eventCallback('onComplete', () => activeCardTweens.delete(tween));
            }
          })
        );
      }
    }, document.body);

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!disposed && !suspended && !reducedMotion.matches) ScrollTrigger.refresh();
      });
    }
  };

  const updateMotionPreference = () => {
    if (disposed || suspended) return;
    if (reducedMotion.matches) {
      clearContentMotion();
      clearParallax();
      return;
    }

    buildParallax();
    buildContentMotion();
  };

  const updateViewportMotion = () => {
    if (!disposed && !suspended) buildParallax();
  };

  const handlePageHide = (event) => {
    if (event.persisted) {
      suspended = true;
      clearContentMotion();
      clearParallax();
      return;
    }

    dispose();
  };

  const handlePageShow = (event) => {
    if (!event.persisted || !suspended || disposed) return;
    suspended = false;
    updateMotionPreference();
  };

  const dispose = () => {
    disposed = true;
    clearContentMotion();
    clearParallax();
    removeReducedMotionListener();
    removeDesktopViewportListener();
    window.removeEventListener('pagehide', handlePageHide);
    window.removeEventListener('pageshow', handlePageShow);
  };

  removeReducedMotionListener = subscribeMediaQuery(reducedMotion, updateMotionPreference);
  removeDesktopViewportListener = subscribeMediaQuery(desktopViewport, updateViewportMotion);
  window.addEventListener('pagehide', handlePageHide);
  window.addEventListener('pageshow', handlePageShow);

  // Create the top-of-page parallax trigger before section triggers.
  buildParallax();
  buildContentMotion();
})();
