# Shiban Hafiz — Portfolio update plan

## Existing project inspected

The site is a dependency-free static single page built with semantic HTML, CSS, and vanilla JavaScript. It serves `public/` on the configured Preview port 3000 and has one page route, `/`. There is no React framework, build tool, API, database, image library, or email service in this portfolio. Keep the existing editorial identity: warm paper, charcoal and persimmon; Newsreader, DM Sans and DM Mono; editorial section rails, thin rules, restrained motion, accessible navigation, and responsive layouts. The earlier Harvex sample-preview request removed that isolated page; this polish pass refines the existing portfolio's hierarchy, typography, contrast, spacing, and responsive behavior without changing the brand or factual content.

## Verified source facts and boundaries

Use the supplied brief for Shiban's name, second-year B.E. Artificial Intelligence & Machine Learning student positioning, AITM Bhatkal education, expected graduation in 2029, skills, interests, learning list, journey copy, project order, project descriptions and social links. Use the supplied GitHub profile `https://github.com/Shibanhafiz` and LinkedIn profile `https://www.linkedin.com/in/shiban-hafiz-57a4623a9/`. Use `Shibanhafiz07@gmail.com`, verified in the supplied résumé, as the visible mailto contact; do not add the résumé's phone number in this change.

CyberShield is at `https://github.com/Shibanhafiz/CyberShield-Community`. Its public source was inspected to describe this VTU 1BCP308 community/team project without claiming Shiban's individual role. Its risk values are heuristic and indicative, not proof or fraud probabilities; URL inspection is static and never visits the target. Do not invent GitHub statistics or contribution claims.

Harvex is linked only to the user's verified fork at `https://github.com/Shibanhafiz/Harvex`. GitHub metadata shows no homepage or published deployment. The repository is a fork whose README attributes the project to Team Goldsmiths / SIH26180 and states reuse requires explicit written permission. Do not copy, execute or rehost its code, assets, or documentation. At the user's request, remove the independently created Harvex sample page, project preview CTA, and `/harvex/` route. Do not replace these with an invented deployment URL. AgentBreak has no supplied repository or demo URL, so do not create one. Do not invent articles, testimonials, jobs, awards, certifications, additional personal contact details, or a portrait photo.

## Implementation decisions and project structure

- `public/index.html` remains the single semantic home page. Preserve its header, wordmark, skip link, navigation, section rails, project-card container, contact links, footer and existing metadata.
- `public/styles.css` retains the established palette, typography, section layout, project cards, responsive breakpoints and reduced-motion behavior; remove only preview-specific rules if any become unused, and remove decorative line art from all three project-illustration backgrounds while preserving their titles, labels, colors and responsive layout.
- `public/portfolio-data.js` remains the editable source of truth for Shiban's profile, links, education, skills, learning topics, interests, journey and three project records. Harvex keeps its direct GitHub fork link and no demo URL. CyberShield keeps its supplied repository link. AgentBreak has no link until a real URL is supplied. Its email field contains the verified `Shibanhafiz07@gmail.com` from the supplied résumé.
- `public/app.js` renders the central portfolio content, safely creates HTTPS repository/social/demo links when real URLs exist, handles responsive navigation, and displays the verified email as a visible, accessible `mailto:` action. It hides the email action only when the editable field is empty. It no longer renders any Harvex sample-page link or same-origin demo route.
- `public/Shiban_Hafiz_Resume.docx` is an unchanged copy of `/home/ubuntu/upload/Shiban_Hafiz_Resume.docx`; its SHA-256 matches the source (`52c29de473986d43abebce3f5b53eaaaa53a7d28ab23b8a79f9146dfb79c5833`). The supplied document renders as two pages. The résumé card links directly to the DOCX; the previous generated PDF and Markdown draft are removed.
- `public/manus-routes.json` declares only `/`, the page still present in the source. `public/assets/brandmark.svg` and root `app.config.ts` retain the existing SH logo. `plan.md` and `TODO.md` remain outside the served root.

## Content and visual treatment

Preserve the existing page order: Home, About, Projects, Skills, Journey and Contact. Keep exactly three main projects in the supplied order—Harvex, CyberShield, AgentBreak—with CyberShield as the visually prominent project. Harvex links directly to the verified GitHub fork and has no interactive or deployment-preview content. Keep project descriptions factual and preserve the security/AgentBreak caveats. No writing section is added because no real articles were supplied. Retain the minimal, light editorial design and distinctive warm color palette.

At laptop/desktop widths, use full-width alternating editorial rows: each project's artwork shares a row with its existing details—title, subtitle, description, technologies, features, notes, and links—to fill the horizontal space without filler. Keep CyberShield prominent with its larger art treatment. At narrower widths, stack each artwork above its details and keep all three project cards full width.

## Serving and dependencies

Continue serving `public/` on the existing static Python server at `0.0.0.0:3000`. No server, database, email capture, form provider, or Harvex external API is needed. Keep internal site navigation relative and do not publish unless explicitly requested.

## Current deployment request

The user asked for deployment to a custom domain or hosting platform but supplied no custom domain. Use the project's existing Manus-managed static hosting. Its output is the committed `public/` directory, published with the no-build contract `command: true`, `outputDirectory: public`; `public/index.html` is present. Preserve `publishing.auto_publish: false` and make only the explicit one-time publication authorized in this request. Do not change DNS or add an external hosting account.

## Final visual polish decisions

Keep the warm-paper, charcoal and persimmon identity. The single hero H1 is Shiban's name, with the AIML student headline as supporting text rather than an eyebrow. Remove redundant ordinals from project and contribution presentations; retain the editorial section rails and illustration labels. Raise supporting text and caption sizes, use the dark accent and muted tokens for small text, keep primary interactive targets at least 44px high, and preserve the single-column mobile composition, semantic headings, keyboard focus, working navigation, reduced-motion handling, and all factual content and project caveats.

## Motion intent and implementation

**Focal moment:** a restrained staggered entrance for the existing hero text; the transition adds an authored first impression without delaying access to the portfolio.

**Scroll behavior:** reveal About, Skills and Projects section content once as it approaches the viewport. Reveal each existing project card as it enters, with a short stagger when cards enter together. Use only subtle, desktop-only parallax on the existing hero illustration; do not pin sections, loop animations, or animate layout-driving properties.

**Accessibility and responsive behavior:** keep content visible in the default HTML/CSS state so a missing library or script cannot hide information. Do not initialize nonessential motion under `prefers-reduced-motion: reduce`. Disable parallax below the desktop breakpoint. Limit motion to short opacity/transform transitions and a small, bounded card stagger.

**Dependencies and lifecycle:** load only pinned GSAP core and ScrollTrigger scripts, deferred before `app.js`; the static page has no package manager or build step, so do not introduce one. Guard for unavailable globals. Initialize after `app.js` has rendered the project cards, register ScrollTrigger once, refresh after document fonts settle, and use GSAP media-query contexts to revert tweens/triggers when preferences or breakpoints change. Revert the remaining motion context on `pagehide`.

**Lifecycle refinement:** use explicit `gsap.context()` scopes with backward-compatible MediaQueryList subscriptions (`addEventListener` or legacy `addListener`) to revert/rebuild motion when preferences or desktop width change. Suspend motion on persisted `pagehide` and restore it on persisted `pageshow` (BFCache); fully remove media-query listeners and contexts on a nonpersisted `pagehide`.


**Preview caching:** the local stylesheet, profile data, app logic and motion module use a shared version query in `index.html`. Increment it after editing these fixed asset URLs so a cached Preview does not keep serving stale contact details.
