const projects = {
  lms: {
    kicker: '01 / LEARNING EXPERIENCE',
    title: 'Unitellas Training Centre',
    summary: 'An ongoing digital learning and training website project managed through Zoho TrainerCentral. The experience brings training programmes, course discovery and certification information into one clear destination.',
    contribution: ['Configure and maintain the training website in Zoho TrainerCentral.', 'Organise site navigation, page layouts and training content.', 'Review course discovery, calls to action and learner-facing journeys.', 'Check responsive behaviour across desktop, tablet and mobile.'],
    showcase: ['Homepage and hero section', 'Course catalogue and course detail pages', 'About and certification pages', 'Navigation, footer and responsive screenshots']
  },
  website: {
    kicker: '02 / DIGITAL PLATFORMS',
    title: 'Corporate Website Experience',
    summary: 'Ongoing website management work focused on keeping a corporate digital presence useful, current, consistent and accessible across devices.',
    contribution: ['Implement website content and interface updates.', 'Improve responsive behaviour and page usability.', 'Identify and troubleshoot frontend issues.', 'Coordinate website changes with internal stakeholders.'],
    showcase: ['Before-and-after screenshots where available', 'Responsive desktop, tablet and mobile views', 'Examples of content and UI updates', 'A short summary of the problem and the change made']
  },
  graphics: {
    kicker: '03 / GRAPHICS & CAMPAIGNS',
    title: 'Brand & Campaign Creatives',
    summary: 'A gallery of original graphics created for technology communication, brand awareness and campaign support. Add the final approved assets and explain the purpose of each piece.',
    contribution: ['Describe the brief and audience for each creative.', 'Explain your role in concept development, layout or production.', 'Identify the tools used, such as Canva or other design software, where applicable.', 'Connect the creative to its publishing channel or campaign.'],
    showcase: ['Final graphics and carousel slides', 'Campaign themes and creative variations', 'Exported social media formats', 'Any available engagement or campaign results']
  },
  video: {
    kicker: '04 / MULTIMEDIA',
    title: 'Video & Motion Content',
    summary: 'A showcase for video content and motion-led assets produced for digital communication. Use playable videos or thumbnail previews with a short description of the purpose and your contribution.',
    contribution: ['Describe your contribution to scripting, editing, motion, captions or publishing.', 'Explain the intended audience and communication goal.', 'List the tools actually used to produce the video.', 'Include a short context note for each video.'],
    showcase: ['Video thumbnail and embedded player', 'Short-form clips and campaign videos', 'Captions or key frames', 'Available views, watch time or engagement results']
  },
  social: {
    kicker: '05 / DIGITAL CONTENT',
    title: 'Social Content & Publishing',
    summary: 'Selected social content and publishing work that supports consistent brand communication across digital channels. Feature real posts, carousels, content themes and campaign examples.',
    contribution: ['Describe content planning and publishing tasks you performed.', 'Show how content supports a defined audience or business objective.', 'Explain how messaging and visual identity stay consistent.', 'Add real post links or performance data where available.'],
    showcase: ['Live post links and carousel assets', 'Content calendar excerpts with confidential details removed', 'Campaign themes and publication dates', 'Verified reach, engagement or click-through results']
  },
  experience: {
    kicker: '06 / EXPERIENCE STRATEGY',
    title: 'Digital Experience Operations',
    summary: 'A practical look at the operational work behind a consistent digital ecosystem: keeping platforms updated, coordinating content, checking usability and identifying improvements.',
    contribution: ['Explain your process for handling updates and issues.', 'Describe how you check consistency across platforms.', 'Show how you coordinate priorities and stakeholders.', 'Use actual feedback or analytics when documenting improvements.'],
    showcase: ['A simple update or QA workflow', 'Responsive or usability checks', 'A redacted content calendar or checklist', 'Before-and-after examples and verified outcomes']
  }
};

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
}

document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.project-card').forEach(card => {
      const categories = card.dataset.category.split(' ');
      const show = filter === 'all' || categories.includes(filter);
      card.classList.toggle('is-hidden', !show);
    });
  });
});

const dialog = document.querySelector('#project-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogKicker = document.querySelector('#dialog-kicker');
const dialogSummary = document.querySelector('#dialog-summary');
const dialogContribution = document.querySelector('#dialog-contribution');
const dialogShowcase = document.querySelector('#dialog-showcase');
function openProject(key) {
  const project = projects[key];
  if (!project || !dialog) return;
  dialogKicker.textContent = project.kicker;
  dialogTitle.textContent = project.title;
  dialogSummary.textContent = project.summary;
  dialogContribution.replaceChildren(...project.contribution.map(item => { const li = document.createElement('li'); li.textContent = item; return li; }));
  dialogShowcase.replaceChildren(...project.showcase.map(item => { const li = document.createElement('li'); li.textContent = item; return li; }));
  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }
}
document.querySelectorAll('[data-open-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.openProject)));
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

document.querySelector('#year').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}
