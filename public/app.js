(() => {
  'use strict';

  const data = window.PORTFOLIO;
  if (!data) return;

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
    const card = make('article', `project-card${project.id === 'cybershield' ? ' project-card-featured' : ''}`);
    const art = make('div', `project-art project-visual-${project.id}`);
    art.setAttribute('aria-hidden', 'true');
    const artTitle = make('p', 'project-visual-title');
    const visualLine = project.id === 'harvex'
      ? ['FIELD', 'WATER', 'INSIGHT']
      : project.id === 'cybershield'
        ? ['PASTE', 'ANALYZE', 'UNDERSTAND', 'ACT SAFELY']
        : ['URL', 'CHECKS', 'FINDINGS'];
    visualLine.forEach((word, index) => {
      const step = make('span', '', word);
      artTitle.append(step);
      if (index === visualLine.length - 1) return;
      const arrow = make('span', '', ' → ');
      arrow.setAttribute('aria-hidden', 'true');
      artTitle.append(arrow);
    });
    const artTrack = make('div', 'project-visual-track');
    artTrack.append(make('span', '', project.subtitle.toUpperCase()));
    if (project.id === 'cybershield') artTrack.append(make('span', '', 'INDICATIVE SIGNALS · NEVER PROOF'));
    else if (project.id === 'agentbreak') artTrack.append(make('span', '', 'PROTOTYPE · FINDINGS NEED REVIEW'));
    else artTrack.append(make('span', '', 'DECISION SUPPORT'));
    art.append(artTitle, artTrack, make('span', 'art-caption', project.category));

    const info = make('div', 'project-info');
    const copy = make('div', 'project-info-copy');
    const title = make('h3', '', project.name);
    const subtitle = make('p', 'project-subtitle', project.subtitle);
    const description = make('p', 'project-description', project.description);
    const positioning = make('p', 'project-positioning', project.positioning);
    copy.append(title, subtitle, description, positioning);

    const technologyList = make('ul', 'project-tags');
    technologyList.setAttribute('aria-label', `${project.name} technologies`);
    project.technologies.forEach((technology) => technologyList.append(make('li', '', technology)));
    copy.append(technologyList);

    const featureList = make('ul', 'project-features');
    featureList.setAttribute('aria-label', `${project.name} key features`);
    project.features.forEach((feature) => featureList.append(make('li', '', feature)));
    copy.append(featureList);

    if (project.note) copy.append(make('p', 'project-note', project.note));

    const actions = make('div', 'project-links');
    if (project.repository) {
      const repository = make('a', 'project-link');
      repository.append(document.createTextNode(`${project.repositoryLabel || 'GitHub repository'} `));
      const arrow = make('span', '', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      repository.append(arrow);
      repository.setAttribute('aria-label', `Open the ${project.name} GitHub repository`);
      if (setExternalLink(repository, project.repository)) actions.append(repository);
    }
    if (project.demo) {
      const demoUrl = safeHttps(project.demo);
      if (demoUrl) {
        const demo = make('a', 'project-link');
        demo.append(document.createTextNode(`${project.demoLabel || 'Project preview'} `));
        const arrow = make('span', '', '↗');
        arrow.setAttribute('aria-hidden', 'true');
        demo.append(arrow);
        demo.setAttribute('aria-label', `Open the ${project.name} live demo`);
        if (setExternalLink(demo, demoUrl)) actions.append(demo);
      }
    }
    info.append(copy);
    if (actions.childElementCount) info.append(actions);
    card.append(art, info);
    projectGrid.append(card);
  });

  const skillGroups = document.querySelector('#skill-groups');
  data.skills.forEach((group) => {
    const row = make('div', 'skill-row');
    const title = make('dt', 'skill-area', group.category.toUpperCase());
    const items = make('dd', 'skill-tags');
    group.items.forEach((item) => items.append(make('span', '', item)));
    row.append(title, items);
    skillGroups.append(row);
  });

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
  document.querySelectorAll('[data-project-repository]').forEach((link) => {
    const project = data.projects.find(({ id }) => id === link.dataset.projectRepository);
    if (!project?.repository || !setExternalLink(link, project.repository)) link.remove();
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
