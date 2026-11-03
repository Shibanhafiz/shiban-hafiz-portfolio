# Shiban Hafiz — internship portfolio refinement

## Scope and source of truth

Refine the existing dependency-free, single-page portfolio in place. Preserve Shiban's identity as a second-year B.E. Artificial Intelligence and Machine Learning student at AITM, Bhatkal, expected to graduate in 2029. Keep the incumbent warm editorial look, brand mark, sections, navigation, contact and résumé features. Do not rebuild, introduce a framework, invent claims, or publish the website.

The Selected Work section is text-only. Do not display project screenshots, application captures, browser/dashboard mockups, stock/generated product images, or image placeholders. Use typography, whitespace, thin rules, existing accent colors, source-verified tags, concise text and valid links.

## Implementation and structure

- `public/index.html`: preserve the semantic one-page shell and `/` route. Load local portfolio data and application code before optional third-party animation libraries so an animation CDN cannot gate core content. Add a visible loading status and a clear recovery message if app/data scripts fail; retain the no-JavaScript notice and static résumé/email links. Use base-relative CSS, JavaScript, favicon/brandmark and résumé URLs so the site works both at the domain root and under a repository subpath.
- `public/portfolio-data.js`: central profile, truthful project records, evidence-supported technology tags, public links, résumé-listed skills and active learning categories. Keep AgentBreak owner-described because no source, tests, public repository or demo were supplied.
- `public/app.js`: render exactly three compact text-first cards—Harvex — AI-Assisted Smart Farming Platform; CyberShield — Community Cybersecurity Project; AgentBreak — Web Security Testing Prototype. Show a short specific summary, only source-verified project technologies, valid GitHub/PR/demo destinations, and native disclosures for deeper technical context. Keep the mailto draft form and mobile navigation. Remove the `no-js` fallback only after successful initialization.
- `public/styles.css`: preserve Newsreader, DM Sans and DM Mono; warm paper/charcoal, restrained persimmon/olive; editorial rails, thin borders, visible focus and responsive stacking. Style the loading/failure notice with existing tokens and keep reduced-motion behavior.
- `public/motion.js`: retain guarded GSAP/ScrollTrigger entrances, desktop-only hero parallax, cleanup and reduced-motion handling. Animation assets remain optional; no added dependencies.
- `public/manus-routes.json`: one static page at `/` only.

## Phase 3 content boundaries

Strengthen the hero for internship applications while retaining the exact student identity, and keep About concise and authentic. Clearly distinguish an upstream merged contribution from a project's prototype/team status and from owner-reported, unverified work. Harvex attribution, limitations and written-permission reuse boundary stay visible; CyberShield remains a team project with no individual feature claim; AgentBreak's checks/stack remain explicitly unverified. Do not claim confirmed vulnerabilities, production-grade testing, deployments, hardware runs, metrics, or unimplemented capabilities. Keep skill categories self-reported from the supplied résumé and separate project-code evidence from proficiency and active learning.

## Design continuation

**Movement:** contemporary editorial portfolio / printed field notebook. **Principles:** evidence before claims; text-first work; legible hierarchy; honest student positioning. **Color:** warm paper/stone and charcoal with restrained existing persimmon and olive. **Layout:** broad project rows with a title/category rail and flexible copy column; stack in reading order on mobile. **Motifs:** thin section rules, concise mono labels, existing SH slash monogram. **Interactions:** direct text links, visible focus, native details disclosure, usable form, subtle hover. **Motion:** preserve short opacity/transform reveals, desktop-only subtle hero parallax and reduced-motion alternative. **Type:** Newsreader display, DM Sans body/UI, DM Mono metadata. **Brand essence:** practical AIML student work shown with clear evidence boundaries; curious, careful, direct. **Voice examples:** “I learn by building.” / “What’s implemented, what remains, and why.” Keep the current SH wordmark and persimmon `#c74f35`.

## Serving and release

Serve existing static `public/` files on configured Preview port 3000; there is no backend or project API. The mailto contact form launches a draft in the visitor's email application and does not send or store messages. The canonical repository is the user-confirmed private GitHub repository `Shibanhafiz/shiban-hafiz-portfolio`; push validated Phase 2/3 source changes there. Keep `publishing.auto_publish: false` and do not deploy the website without fresh explicit authorization.
