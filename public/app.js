const githubUsers = 'https://github.com/search?q=Shiban+Hafiz&type=users';

const demoContent = {
  morrow: {
    title: 'Morrow',
    description: 'A quiet weekly plan that keeps the next small action in view.',
    html: `<div class="demo-ui"><p class="demo-label">THIS WEEK / A SMALL SAMPLE PLAN</p><ul class="demo-list"><li><label><input type="checkbox" checked> Plan the week</label><span class="demo-counter">MON</span></li><li><label><input type="checkbox"> Review open notes</label><span class="demo-counter">TUE</span></li><li><label><input type="checkbox"> Leave an hour to build</label><span class="demo-counter">FRI</span></li></ul><p class="demo-counter" data-check-count></p></div>`
  },
  commonplace: {
    title: 'Commonplace',
    description: 'A tiny shared note board. Add one thought and watch the room make space for it.',
    html: `<div class="demo-ui"><p class="demo-label">SHARED SPACE / 2 PEOPLE</p><div class="demo-notes" data-note-list><div class="demo-note"><small>NOTE / 01</small>Leave a little context.</div><div class="demo-note"><small>NOTE / 02</small>Good ideas travel lightly.</div></div><form class="demo-add" data-note-form><label class="sr-only" for="new-note">Your note</label><input id="new-note" name="note" maxlength="70" placeholder="Write a short note…" required><button type="submit">Add note</button></form></div>`
  },
  trace: {
    title: 'Trace',
    description: 'A readable request timeline. Replay the sample to move its final step forward.',
    html: `<div class="demo-ui"><p class="demo-label">REQUEST / 084</p><div class="demo-trace-step done"><i></i><span>Received — Request accepted</span><time>09:41</time></div><div class="demo-trace-step done"><i></i><span>Processing — Working through the queue</span><time>09:42</time></div><div class="demo-trace-step" data-trace-last><i></i><span>Delivered — One clear next step</span><time>—</time></div><button class="demo-action" type="button" data-trace-replay>Replay request</button></div>`
  }
};

const articles = {
  failure: {
    meta: '08 OCT 2026 / RESILIENCE',
    title: 'Forms deserve a plan for failure',
    deck: 'A form is a small promise: tell me what you need, and I’ll make the next step possible.',
    paragraphs: [
      ['p', 'The submit button is the easy part. A useful form thinks about the quiet moments too: the field someone missed, the network that paused, the request that arrived twice, and the answer that never came back.'],
      ['h3', 'Name the states'],
      ['p', 'Before writing a success message, sketch the states around it. What does the person see before sending? While the request is in flight? When one field needs attention? When a server is unavailable? A short set of plain-language messages can turn an opaque wait into a sequence people understand.'],
      ['p', 'Validation should say what to fix, close to the field that needs it. A global error can add context, but it should never make someone hunt for the problem. Preserve the values they already entered.'],
      ['h3', 'Be honest about delivery'],
      ['p', 'A green checkmark is not proof that an email reached a human. If the product has not confirmed delivery, say that. If a retry could duplicate work, make that consequence clear. Good feedback is specific about what just happened and what the person can do next.'],
      ['p', 'That is not extra polish. It is the interface doing its share of the work.']
    ]
  },
  defaults: {
    meta: '18 SEP 2026 / INTERFACE',
    title: 'Calm interfaces start with good defaults',
    deck: 'Every empty setting asks somebody to make a decision. Some of those decisions are better made once, with care.',
    paragraphs: [
      ['p', 'A new screen gives the person a small pile of choices: where to begin, which action is safe, what “normal” looks like. When none of those choices has a useful default, the interface hands its design work to the user.'],
      ['h3', 'Choose a gentle first step'],
      ['p', 'A thoughtful default is visible, reversible, and useful to most people. It makes the first run feel complete without hiding the fact that a different path is available. For example: show an example before asking for a blank configuration, or start with a concise view and let someone ask for more detail.'],
      ['p', 'Defaults also do quiet accessibility work. A sensible focus order, a legible contrast ratio, and a forgiving input format lower friction without asking users to configure their way out of it.'],
      ['h3', 'Leave room to change'],
      ['p', 'A default should not become an assumption that traps someone later. Keep preferences close to the choice they affect. Explain an unexpected decision. Save custom settings only when the user can find and adjust them.'],
      ['p', 'The aim is not to remove all choice. It is to spend people’s attention where their judgment matters.']
    ]
  },
  empty: {
    meta: '05 AUG 2026 / ACCESSIBILITY',
    title: 'Why I still write the empty state first',
    deck: 'The first thing an interface says should not depend on someone already having data.',
    paragraphs: [
      ['p', 'Empty states are easy to postpone. The database is blank, the project has no members, or the first search has not happened yet. They look like an edge case until the first real person arrives.'],
      ['h3', 'An empty state is a real state'],
      ['p', 'It needs a clear explanation of what belongs here, a useful next action, and enough context to understand why the page looks quiet. A button without that context can feel like a puzzle. A paragraph without an action can feel like a dead end.'],
      ['p', 'Writing the empty state early exposes assumptions: does the user need to invite someone, upload a file, or create the first item? What happens if they do not have permission? Can they learn by looking at an example instead?'],
      ['h3', 'Start with welcome, not blame'],
      ['p', 'The absence of data is rarely the user’s mistake. Avoid scolding labels or unexplained zeros. Make the first action optional when it is optional, and say what it will change when it is not.'],
      ['p', 'Those few sentences often point toward a better first-run flow for everyone, not only for the blank page.']
    ]
  }
};

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('is-open', !isOpen);
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  }
});

const demoDialog = document.querySelector('#demo-dialog');
const demoTitle = document.querySelector('#demo-title');
const demoDescription = document.querySelector('#demo-description');
const demoMount = document.querySelector('#demo-content');

document.querySelectorAll('[data-demo]').forEach((button) => {
  button.addEventListener('click', () => {
    const demo = demoContent[button.dataset.demo];
    if (!demo) return;
    demoTitle.textContent = demo.title;
    demoDescription.textContent = demo.description;
    demoMount.innerHTML = demo.html;
    demoDialog.showModal();
    const count = demoMount.querySelector('[data-check-count]');
    const updateCount = () => {
      if (count) count.textContent = `${demoMount.querySelectorAll('input[type="checkbox"]:checked').length} of 3 things done`;
    };
    updateCount();
    demoMount.querySelectorAll('input[type="checkbox"]').forEach((box) => box.addEventListener('change', updateCount));
    const noteForm = demoMount.querySelector('[data-note-form]');
    noteForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      const field = noteForm.elements.note;
      const value = field.value.trim();
      if (!value) return;
      const note = document.createElement('div');
      note.className = 'demo-note';
      const label = document.createElement('small');
      label.textContent = 'NEW NOTE';
      note.append(label, document.createTextNode(value));
      demoMount.querySelector('[data-note-list]').append(note);
      field.value = '';
      field.focus();
    });
    demoMount.querySelector('[data-trace-replay]')?.addEventListener('click', (event) => {
      const lastStep = demoMount.querySelector('[data-trace-last]');
      lastStep.classList.toggle('done');
      lastStep.querySelector('time').textContent = lastStep.classList.contains('done') ? '09:43' : '—';
      event.currentTarget.textContent = lastStep.classList.contains('done') ? 'Replay again' : 'Replay request';
    });
  });
});

const articleDialog = document.querySelector('#article-dialog');
const articleTitle = document.querySelector('#article-title');
const articleMeta = document.querySelector('#article-meta');
const articleDeck = document.querySelector('#article-deck');
const articleContent = document.querySelector('#article-content');

document.querySelectorAll('[data-article]').forEach((button) => {
  button.addEventListener('click', () => {
    const article = articles[button.dataset.article];
    if (!article) return;
    articleMeta.textContent = article.meta;
    articleTitle.textContent = article.title;
    articleDeck.textContent = article.deck;
    articleContent.replaceChildren(...article.paragraphs.map(([tag, text]) => {
      const element = document.createElement(tag);
      element.textContent = text;
      return element;
    }));
    articleDialog.showModal();
  });
});

document.querySelectorAll('.content-dialog').forEach((dialog) => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const status = document.querySelector('#form-status');
  status.textContent = `Thanks, ${contactForm.elements.name.value.trim()}. This preview has no inbox configured, so the message has not been sent or stored. Please use the GitHub link to get in touch.`;
  contactForm.reset();
  document.querySelector('.contact-github').focus();
});

document.querySelector('#current-year').textContent = String(new Date().getFullYear());
