window.PORTFOLIO = {
  profile: {
    name: 'Shiban Hafiz',
    headline: 'Second-year B.E. AIML student',
    degree: 'B.E. Artificial Intelligence & Machine Learning',
    positioning: 'A second-year AIML student learning through practical software projects.',
    intro: "I'm building full-stack and applied-AI projects while strengthening my software engineering foundations. I'm seeking an internship where I can contribute to a team and keep learning.",
    location: 'Bhatkal, Karnataka, India',
    year: 'Second-year',
    school: 'AITM, Bhatkal',
    graduation: '2029',
    about: [
      "I'm a second-year B.E. Artificial Intelligence and Machine Learning student at AITM, Bhatkal. I learn by building and refining practical software projects.",
      "I'm strengthening my foundations in data structures, SQL, backend development and machine learning while exploring software engineering and applied AI."
    ]
  },
  links: {
    github: 'https://github.com/Shibanhafiz',
    linkedin: 'https://www.linkedin.com/in/shiban-hafiz-57a4623a9/',
    email: 'Shibanhafiz07@gmail.com'
  },
  heroTechnologies: [
    { name: 'Python', icon: 'Py', tone: 'python' },
    { name: 'React', icon: 'Re', tone: 'react' },
    { name: 'Vite', icon: 'V', tone: 'vite' },
    { name: 'FastAPI', icon: 'API', tone: 'api' },
    { name: 'Express.js', icon: 'Ex', tone: 'express' }
  ],
  projects: [
    {
      id: 'harvex',
      name: 'Harvex',
      subtitle: 'AI-Assisted Smart Farming Platform',
      category: 'SMART FARMING · PROTOTYPE',
      description: 'A prototype credited to Team Goldsmiths / SIH26180, with source-reviewed sensor, irrigation and crop-support workflows.',
      technologies: ['React', 'Vite', 'Express.js', 'FastAPI', 'Python', 'SQLite'],
      note: 'Status: Shiban’s upstream PR #1 is merged; the team project remains a prototype. No public demo or hardware run is verified. The README requires written permission for reuse.',
      details: [
        { label: 'Source reviewed', text: 'The repository contains sensor-ingestion and status endpoints, irrigation decision logic, leaf-analysis paths, and weather, crop-recommendation, chat and voice routes. This is code review, not an operational or hardware test.' },
        { label: 'Architecture', text: 'React/Vite dashboard, Express helper service, Python FastAPI backend and SQLite, with external weather and AI/voice integrations. The README names ESP32 while the inspected firmware path targets ESP8266; deployed hardware is not verified.' },
        { label: 'Contribution', text: 'Shiban authored merged upstream PR #1, which touches backend, frontend, the Express/Vite server, firmware and documentation. This establishes a specific contribution, not sole authorship of the platform.' },
        { label: 'Current limitations', text: 'The dashboard does not continuously poll. Manual watering changes local UI/history rather than commanding the field node, and frontend history is in memory. Production configuration, external-service behavior and hardware were not independently tested.' },
        { label: 'Future work', text: 'The supplied résumé mentions a rover concept as exploratory only; it is not presented as an implemented feature.' }
      ],
      repository: 'https://github.com/Shibanhafiz/Harvex',
      repositoryLabel: 'View GitHub fork',
      contributionUrl: 'https://github.com/abdullah-sidx/Harvex/pull/1',
      contributionLabel: 'Merged upstream PR #1'
    },
    {
      id: 'cybershield',
      name: 'CyberShield',
      subtitle: 'Community Cybersecurity Project',
      category: 'TEAM PROJECT · VTU 1BCP308',
      description: 'A community cybersecurity project combining explainable message-risk signals, static URL checks, privacy-oriented reports and scam-awareness learning.',
      technologies: ['React 19', 'Vite', 'FastAPI', 'SQLAlchemy', 'scikit-learn', 'PostgreSQL / SQLite'],
      note: 'Status: source-reviewed community/team project. The repository does not establish Shiban’s individual feature ownership or a public deployment.',
      details: [
        { label: 'Source reviewed', text: 'Message analysis combines TF-IDF/logistic-regression signals with explicit rules and explanations. Structural URL checks do not visit the submitted page or fetch reputation data. The repository also contains redaction and report deduplication, awareness lessons/quizzes, and reviewer/admin moderation routes.' },
        { label: 'Architecture', text: 'React SPA with React Router, Vite and Tailwind; FastAPI and SQLAlchemy backend; PostgreSQL in the documented deployment setup and SQLite for development.' },
        { label: 'Current limitations', text: 'Scores are heuristic indicators, not calibrated fraud probabilities or proof. Static URL checks cannot establish that a link is safe or malicious; no reputation provider is configured. Reports are not independently verified, and no public deployment was found.' },
        { label: 'Attribution', text: 'This is a community/team project. The inspected repository does not establish Shiban’s individual feature ownership, so no specific feature is attributed to him here.' }
      ],
      repository: 'https://github.com/Shibanhafiz/CyberShield-Community',
      repositoryLabel: 'View GitHub repository'
    },
    {
      id: 'agentbreak',
      name: 'Sentrix',
      subtitle: 'Web Security Testing Prototype',
      category: 'PROTOTYPE · SOURCE NOT SUPPLIED',
      description: 'The supplied résumé describes a URL-submission prototype with automated security-check reporting; its precise checks and report implementation cannot be independently verified without source.',
      technologies: [],
      technologyNote: 'No source-verified technology stack is available; the project repository was not supplied.',
      note: 'Status: owner-reported prototype. No public repository, tests or live demo were supplied; reported findings require validation and are not confirmed vulnerabilities.',
      details: [
        { label: 'Reported workflow', text: 'The supplied résumé describes URL submission, automated security-oriented checks and a report of findings. Exact checks, request boundaries and reporting behavior cannot be verified without source code.' },
        { label: 'Evidence available', text: 'The supplied résumé describes this as Shiban’s prototype and mentions a reporting-workflow improvement. No repository, commit history, tests or architecture documentation was supplied for independent review.' },
        { label: 'Limitations', text: 'It is not presented as production-grade penetration testing, and no finding is asserted to be a confirmed vulnerability.' }
      ]
    }
  ],
  openSource: {
    description: 'A specific merged contribution is linked alongside a team project whose repository does not establish individual feature ownership.',
    entries: [
      {
        title: 'Harvex · upstream pull request #1',
        description: 'Shiban authored a merged PR touching backend, frontend, the Express/Vite server, firmware and documentation. It establishes a specific contribution, not sole ownership of the project.',
        url: 'https://github.com/abdullah-sidx/Harvex/pull/1',
        linkLabel: 'Review merged PR #1'
      },
      {
        title: 'CyberShield · community/team project',
        description: 'The repository credits a VTU 1BCP308 project team. No individual Shiban role or feature ownership is claimed here.',
        url: 'https://github.com/Shibanhafiz/CyberShield-Community',
        linkLabel: 'Explore team repository'
      }
    ]
  },
  skills: [
    { category: 'Programming Languages', items: ['Python', 'C', 'Java'] },
    { category: 'Frontend', items: ['HTML', 'CSS', 'React', 'Vite'] },
    { category: 'Backend & APIs', items: ['FastAPI', 'Express.js', 'REST API fundamentals'] },
    { category: 'AI / ML', items: ['AI API integration', 'ML fundamentals'] },
    { category: 'Databases', items: ['SQL fundamentals'] },
    { category: 'Developer Tools', items: ['Git', 'GitHub', 'VS Code', 'Docker fundamentals'] }
  ],
  projectSkillEvidence: {
    title: 'Technologies in a merged contribution',
    note: 'These technologies appear in code touched by the merged Harvex PR. Project-code presence is evidence of project work, not a proficiency rating or a claim of sole authorship.',
    items: ['Python', 'React', 'Vite', 'Express.js', 'FastAPI'],
    url: 'https://github.com/abdullah-sidx/Harvex/pull/1',
    linkLabel: 'Source: merged upstream PR #1'
  },
  learning: [
    'Data Structures & Algorithms',
    'SQL',
    'Backend development',
    'Machine learning',
    'Docker',
    'Secure software development'
  ],
  journey: [
    {
      year: '2026',
      title: 'Second-Year AIML Engineering Student',
      place: 'AITM, Bhatkal',
      description: 'B.E. Artificial Intelligence and Machine Learning; expected graduation in 2029.'
    },
    {
      year: '2026',
      title: 'Building Practical Software',
      place: '',
      description: 'Ongoing project work across full-stack development, applied AI, cybersecurity and backend systems.'
    },
    {
      year: '2026',
      title: 'Git & GitHub Development Workflow',
      place: '',
      description: 'Ongoing learning through version control, branching, commits and pull requests.'
    }
  ],
  interests: [
    'Full-Stack Development', 'Backend Development', 'Applied AI',
    'AI/ML Engineering', 'Software Engineering', 'Cybersecurity Fundamentals'
  ],
  resume: {
    pdf: './Shiban_Hafiz_Resume.pdf',
    docx: './Shiban_Hafiz_Resume.docx'
  },
  contact: {
    headline: "Let's build something useful.",
    description: "I'm looking for opportunities to learn, contribute to real products and grow as a software engineer."
  }
};
