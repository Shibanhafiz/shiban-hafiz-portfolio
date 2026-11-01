(() => {
  'use strict';

  const data = window.PORTFOLIO;
  if (!data) {
    const notice = document.getElementById('portfolio-load-status');
    if (notice) notice.hidden = false;
    return;
  }

  document.body.classList.remove('no-js');

  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const safeHttps = (value) => {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' ? url.href : '';
    } catch {
      return '';
    }
  };

  const setExternalLink = (link, value) => {
    const safeUrl = safeHttps(value);
    if (!link || !safeUrl) return false;
    link.href = safeUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return true;
  };

  const createExternalLink = (label, value, ariaLabel, className = 'project-link') => {
    const link = make('a', className);
    const arrow = make('span', 'project-link-arrow', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    link.append(document.createTextNode(`${label} `), arrow);
    link.setAttribute('aria-label', ariaLabel);
    return setExternalLink(link, value) ? link : null;
  };

  const heroTitle = document.querySelector('#hero-title');
  heroTitle.textContent = data.profile.name;
  document.querySelector('#hero-role').textContent = data.profile.headline;
  document.querySelector('#about-positioning').textContent = data.profile.positioning;
  const [contactLead, contactEmphasis] = data.contact.headline.match(/^(.* )([^ ]+\.)$/).slice(1);
  document.querySelector('#contact-title').replaceChildren(
    document.createTextNode(contactLead), make('em', '', contactEmphasis)
  );
  document.querySelector('#contact-description').textContent = data.contact.description;
  document.querySelector('#footer-name').textContent = data.profile.name.toUpperCase();

  const stack = document.querySelector('#hero-stack');
  data.heroTechnologies.forEach((technology) => {
    const item = make('li', 'tech-item');
    const icon = make('span', `tech-icon tech-${technology.tone}`, technology.icon);
    icon.setAttribute('aria-hidden', 'true');
    item.append(icon, make('span', '', technology.name));
    stack.append(item);
  });

  const about = document.querySelector('#about-copy');
  data.profile.about.forEach((paragraph) => about.append(make('p', '', paragraph)));

  const facts = [
    ['DEGREE', data.profile.degree],
    ['YEAR', `${data.profile.year} student`],
    ['INSTITUTION', data.profile.school],
    ['GRADUATION', `Expected ${data.profile.graduation}`],
    ['LOCATION', data.profile.location]
  ];
  const aboutFacts = document.querySelector('#about-facts');
  facts.forEach(([label, value]) => {
    const fact = make('div');
    fact.append(make('span', 'micro-label', label), make('strong', '', value));
    aboutFacts.append(fact);
  });

  const projectGrid = document.querySelector('#project-grid');
  data.projects.forEach((project) => {
    const card = make('article', 'project-card');
    card.setAttribute('aria-labelledby', `${project.id}-title`);

    const heading = make('header', 'project-heading');
    heading.append(make('p', 'project-category', project.category));
    const title = make('h3', '', project.name);
    title.id = `${project.id}-title`;
    heading.append(title, make('p', 'project-subtitle', project.subtitle));

    const info = make('div', 'project-info');
    info.append(make('p', 'project-description', project.description));

    const technologyBlock = make('div', 'project-tech-block');
    technologyBlock.append(make('p', 'project-field-label', project.technologies.length
      ? 'Technologies in source'
      : 'Technology status'));
    if (project.technologies.length) {
      const technologyList = make('ul', 'project-tags');
      technologyList.setAttribute('aria-label', `${project.name} technologies in source`);
      project.technologies.forEach((technology) => technologyList.append(make('li', '', technology)));
      technologyBlock.append(technologyList);
    } else if (project.technologyNote) {
      technologyBlock.append(make('p', 'project-tech-note', project.technologyNote));
    }
    info.append(technologyBlock);

    if (project.note) info.append(make('p', 'project-note', project.note));

    if (project.details?.length) {
      const details = make('details', 'project-details');
      details.append(make('summary', 'project-details-summary', 'Source & implementation notes'));
      const detailList = make('dl', 'project-detail-list');
      project.details.forEach(({ label, text }) => {
        if (!label || !text) return;
        const item = make('div', 'project-detail-item');
        item.append(make('dt', '', label), make('dd', '', text));
        detailList.append(item);
      });
      details.append(detailList);
      info.append(details);
    }

    const actions = make('div', 'project-links');
    if (project.repository) {
      const repository = createExternalLink(
        project.repositoryLabel || 'GitHub repository',
        project.repository,
        `Open the ${project.name} GitHub repository`
      );
      if (repository) actions.append(repository);
    }
    if (project.contributionUrl) {
      const contribution = createExternalLink(
        project.contributionLabel || 'Contribution',
        project.contributionUrl,
        `Open ${project.contributionLabel || `${project.name} contribution source`}`
      );
      if (contribution) actions.append(contribution);
    }
    if (project.demo) {
      const demo = createExternalLink(
        project.demoLabel || 'Live demo',
        project.demo,
        `Open the ${project.name} live demo`
      );
      if (demo) actions.append(demo);
    }
    if (actions.childElementCount) info.append(actions);

    card.append(heading, info);
    projectGrid.append(card);
  });

  const openSource = data.openSource;
  if (openSource) {
    const intro = document.querySelector('#open-description');
    if (intro) intro.textContent = openSource.description;
    const list = document.querySelector('#open-source-list');
    openSource.entries.forEach((entry) => {
      const item = make('div', 'contribution-item');
      item.append(make('h3', '', entry.title), make('p', '', entry.description));
      const link = createExternalLink(entry.linkLabel, entry.url, `Open ${entry.title}`, 'contribution-cta');
      if (link) item.append(link);
      list.append(item);
    });
  }

  const skillGroups = document.querySelector('#skill-groups');
  data.skills.forEach((group) => {
    const row = make('div', 'skill-row');
    const title = make('dt', 'skill-area', group.category.toUpperCase());
    const items = make('dd', 'skill-tags');
    group.items.forEach((item) => items.append(make('span', '', item)));
    row.append(title, items);
    skillGroups.append(row);
  });

  const projectSkillContainer = document.querySelector('#project-skill-evidence');
  if (projectSkillContainer && data.projectSkillEvidence) {
    const evidence = data.projectSkillEvidence;
    const panel = make('aside', 'project-skill-evidence');
    panel.setAttribute('aria-labelledby', 'project-skill-evidence-title');
    const heading = make('h3', '', evidence.title);
    heading.id = 'project-skill-evidence-title';
    panel.append(heading, make('p', '', evidence.note));
    const list = make('ul', 'skill-evidence-list');
    list.setAttribute('aria-label', 'Technologies present in the linked public project contribution');
    evidence.items.forEach((item) => list.append(make('li', '', item)));
    panel.append(list);
    const sourceLink = createExternalLink(
      evidence.linkLabel,
      evidence.url,
      'Open the merged upstream Harvex pull request supporting this project-code evidence',
      'text-link'
    );
    if (sourceLink) panel.append(sourceLink);
    projectSkillContainer.append(panel);
  }

  const journey = document.querySelector('#journey-list');
  data.journey.forEach((item) => {
    const entry = make('li', 'timeline-item');
    entry.append(make('p', 'journey-year', item.year), make('h3', '', item.title));
    if (item.place) entry.append(make('p', 'timeline-place', item.place));
    entry.append(make('p', '', item.description));
    journey.append(entry);
  });

  const learning = document.querySelector('#learning-list');
  data.learning.forEach((item) => learning.append(make('li', '', item)));

  const interests = document.querySelector('#interest-list');
  data.interests.forEach((item) => interests.append(make('li', '', item)));

  document.querySelectorAll('[data-social]').forEach((link) => {
    setExternalLink(link, data.links[link.dataset.social]);
  });

  document.querySelectorAll('[data-resume]').forEach((link) => {
    const file = data.resume?.[link.dataset.resume];
    if (typeof file === 'string' && file.startsWith('/') && !file.startsWith('//') && !file.includes('..')) {
      link.href = file;
      link.hidden = false;
    } else {
      link.remove();
    }
  });

  const emailLink = document.querySelector('#email-link');
  if (data.links.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.links.email)) {
    emailLink.href = `mailto:${data.links.email}`;
    const emailArrow = emailLink.querySelector('span');
    emailLink.replaceChildren(document.createTextNode(data.links.email));
    if (emailArrow) emailLink.append(emailArrow);
    emailLink.setAttribute('aria-label', `Email ${data.profile.name} at ${data.links.email}`);
    emailLink.hidden = false;
  }

  const contactForm = document.querySelector('#contact-form');
  const contactFormStatus = document.querySelector('#contact-form-status');
  if (contactForm && data.links.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.links.email)) {
    const nameInput = contactForm.elements.namedItem('name');
    const messageInput = contactForm.elements.namedItem('message');
    const stripControls = (value) => String(value ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim();
    const validateNonblank = (input, label) => {
      const updateValidity = () => input.setCustomValidity(
        stripControls(input.value) ? '' : `Please enter your ${label}.`
      );
      input.addEventListener('input', updateValidity);
      updateValidity();
      return updateValidity;
    };
    const validateName = validateNonblank(nameInput, 'name');
    const validateMessage = validateNonblank(messageInput, 'message');

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const fields = new FormData(contactForm);
      const name = stripControls(fields.get('name'));
      const replyEmail = stripControls(fields.get('email'));
      const suppliedSubject = stripControls(fields.get('subject'));
      const subject = suppliedSubject || `Portfolio message from ${name}`;
      const message = String(fields.get('message') ?? '').trim();
      validateName();
      validateMessage();
      if (!contactForm.reportValidity()) return;

      const body = `Name: ${name}\r\nEmail: ${replyEmail}\r\n\r\n${message}`;
      const mailto = `mailto:${data.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      if (contactFormStatus) {
        contactFormStatus.textContent = 'Your email app should open with this draft. Review it and press Send there.';
      }
      window.location.href = mailto;
    });
  }

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-nav');
  const closeNavigation = (restoreFocus = false) => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
    if (restoreFocus) menuButton.focus();
  };
  menuButton.addEventListener('click', () => {
    const opening = menuButton.getAttribute('aria-expanded') !== 'true';
    if (opening) {
      menuButton.setAttribute('aria-expanded', 'true');
      menuButton.setAttribute('aria-label', 'Close navigation');
      navigation.classList.add('is-open');
    } else {
      closeNavigation();
    }
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNavigation();
  });
  document.addEventListener('click', (event) => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (isOpen && !navigation.contains(event.target) && !menuButton.contains(event.target)) closeNavigation();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeNavigation(true);
  });
  const desktopViewport = window.matchMedia('(min-width: 901px)');
  const closeNavigationOnDesktop = (event) => {
    if (event.matches) closeNavigation();
  };
  if (typeof desktopViewport.addEventListener === 'function') {
    desktopViewport.addEventListener('change', closeNavigationOnDesktop);
  } else if (typeof desktopViewport.addListener === 'function') {
    desktopViewport.addListener(closeNavigationOnDesktop);
  }

  document.querySelector('#current-year').textContent = String(new Date().getFullYear());
})();
