# Shiban Hafiz — Developer Portfolio

## Implementation plan

Build a responsive, static, single-page portfolio with semantic HTML, CSS, and vanilla JavaScript. Keep the portfolio on the configured runtime port (3000), without server or database features: no inbox destination, repository list, verified career history, or real project URLs were provided. Use clear, easy-to-edit content data; do not invent employers, education, achievements, impact metrics, or ownership of real repositories. Live project examples are labeled as self-contained concept demos. GitHub links use accurate search/discovery URLs until the owner's profile and repositories are confirmed. The contact form is a front-end interaction only; it must be identified as unconnected until an email destination or form service is provided. Provide an actual downloadable one-page résumé/profile starter that avoids fabricated employment details and is identified as a draft to verify.

### Design direction

- **Design movement:** Contemporary editorial publishing meets practical software engineering—not a nostalgic terminal skin.
- **Core principles:** Content before decoration; clear hierarchy; restrained human color; honest, calm microcopy.
- **Color philosophy:** Warm linen (`#F4F1E9`) as the page ground, deep charcoal (`#252622`) for legible type, muted stone/olive for secondary information, and a concentrated persimmon-red (`#C74F35`) for links, focus, and key actions. Avoid gradient fields, violet/cyan defaults, neon, faux-glass effects, and gratuitous shadow.
- **Layout paradigm:** A left-aligned editorial canvas with a narrow section index/metadata rail, offset hero columns, a staggered project composition, and generous horizontal rules. Shift into a single column on small screens.
- **Signature elements:** Fine rule-and-index section markers; a bespoke SH monogram with a single persimmon slash; compact code-inspired project/demo labels.
- **Interaction philosophy:** Make links and actions explicit, keyboard reachable, and quietly responsive; preview concept projects and open writing in focused accessible dialogs; never simulate backend submission as successful email delivery.
- **Animation:** Short (140–220 ms) opacity/underline/translate transitions only; respect `prefers-reduced-motion`; no perpetual motion or scroll hijacking.
- **Typography system:** Newsreader for large editorial display and article titles; DM Sans for readable UI/body; DM Mono for metadata, tags, section indices, and technology labels. Supply local system fallbacks.
- **Brand essence:** A thoughtful full-stack practice connecting interface details with dependable implementation. Personality: considered, capable, direct.
- **Brand voice:** Precise and warm; explain rather than boast. Example lines: “Small details. Solid foundations.” and “From the first interaction to the last request.”
- **Wordmark & logo:** An original, compact SH ligature/slash mark in an outlined square, used alongside a text wordmark rather than a default icon.
- **Signature brand color:** Persimmon `#C74F35`, reserved for interactive emphasis and the monogram slash.

### Features and behavior

- Hero with the name and full-stack positioning, inline/vector technology marks, and a GitHub profile-discovery link.
- Responsive project cards, concise copy, embedded concept demos, and source discovery links. Replace with the owner's actual deployed and repository URLs when available.
- Categorized skill matrix with visible proficiency labels/bars as editable starter content.
- Open-source section focused on repository discovery and contribution themes; do not state activity or repository ownership that cannot be verified.
- Writing cards with dates, summaries, and in-page article dialogs so each link opens actual included text.
- Footer inquiry form with accessible validation and an honest message that delivery is not connected; provide a GitHub fallback.
- Downloadable PDF résumé/profile starter with no fabricated work history.
- Mobile navigation and all sections responsive; route manifest contains only `/`.

### Project structure

- `public/index.html` — single accessible page, navigation, hero, project/writing content, and form.
- `public/styles.css` — tokens, typography, responsive editorial layout, icon/demo treatments, and reduced-motion states.
- `public/app.js` — navigation controls, concept demo and article dialogs, contact-form validation/status, and small accessible interactions.
- `public/assets/brandmark.svg` — original SH monogram mark / favicon.
- `public/manus-routes.json` — declared page-route manifest for `/`, served directly from the isolated web root.
- `public/shiban-hafiz-resume.pdf` — downloadable one-page résumé/profile starter; avoid invented career facts and identify it as a draft.
- `app.config.ts` — project branding metadata with the uploaded durable HTTPS logo URL, added before checkpointing.
- `TODO.md` — outcome clauses copied from the confirmed scope; mark done only when implemented.

### Dependencies and serving

No runtime framework, third-party library, API, server feature, database, or install step is required. Google Fonts may be requested for Newsreader, DM Sans, and DM Mono, with robust system fallbacks. Serve `public/` at `0.0.0.0:3000` with Python's static HTTP server; all browser-facing URLs within the site remain relative. The public folder contains only website files, the route manifest, and the download; internal plans, task notes, and project configuration stay outside the served directory. Both `/manus-routes.json` and `/shiban-hafiz-resume.pdf` resolve at the web root. No build/publication declaration is required unless publication is requested. Checkpointing and publication remain separate actions.


### Static-server path note

The Preview process runs from the project root with `--directory public`; this keeps `plan.md`, `TODO.md`, `app.config.ts`, and résumé source notes out of the served directory while keeping the browser routes unchanged. `public/` is the site root.
