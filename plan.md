# Shiban Hafiz — internship portfolio refinement

## Scope and source of truth

Refine the existing dependency-free, single-page portfolio in place. Preserve Shiban's honest identity as a second-year B.E. Artificial Intelligence and Machine Learning student at AITM, Bhatkal, expected to graduate in 2029. Keep the incumbent warm editorial look and working contact/navigation behavior. Do not rebuild, introduce a framework, add unverified claims, or publish.

The user's latest instruction explicitly supersedes the earlier request for project screenshots: the Selected Work section must be text-only. Do not display feature screenshots, app captures, browser/dashboard mockups, stock images, generated screenshots, or image placeholders in these project cards. Use only typography, whitespace, rules, existing accent colors, source-verified tech tags and valid text links.

## Implementation and structure

- `public/index.html`: retain the one-page semantic shell, responsive navigation, headings, links, contact form and favicon; keep `/` as the sole route; offer the source-accurate PDF résumé first and a matching corrected DOCX as secondary, leaving the original user upload unchanged. Include a visible explanation and static PDF/email links when JavaScript or portfolio data are unavailable.
- `public/portfolio-data.js`: central profile, truthful project notes, evidence-supported technology tags, public links, supplied skills and active learning categories. AgentBreak remains owner-described because no source, test evidence, public repo or demo was supplied.
- `public/app.js`: render three compact text-first project rows in this order: Harvex — AI-Assisted Smart Farming Platform; CyberShield — Community Cybersecurity Project; AgentBreak — Web Security Testing Prototype. Show a concise specific summary, only source-verified technologies, and only valid GitHub/PR/demo destinations. Use native disclosures for technical context and limitations. Keep existing mailto draft form and mobile navigation; show an accessible recovery message if structured data fails to load.
- `public/styles.css`: preserve Newsreader, DM Sans and DM Mono; warm paper/charcoal, restrained persimmon/olive; editorial rails, thin borders, visible focus, consistent links and responsive stacking. Use title/category and copy columns rather than artwork; keep hover subtle and respect reduced motion. Keep fallback notices within the existing palette and hide the client-only form when scripts are disabled.
- `public/motion.js`: retain the current guarded GSAP/ScrollTrigger entrances, desktop-only hero parallax, cleanup and reduced-motion behavior; do not add dependencies or project imagery.
- `public/manus-routes.json`: one static page at `/` only.

## Verified content boundaries

Harvex is a public fork of Team Goldsmiths / SIH26180 work; its README requires explicit written permission for reuse. Do not copy, execute, modify, or rehost its code, artwork, or documentation. Source review establishes documented architecture/features and limitations, not a fresh operational or hardware test. Shiban's merged upstream PR #1 establishes a specific contribution, not sole authorship. No live demo is verified.

CyberShield is a VTU 1BCP308 community/team project. The repository supports React/Vite and FastAPI/SQLAlchemy/scikit-learn-based code, explainable message-risk signals, structural URL checks that do not visit the target, report redaction/deduplication, learning activities, and moderation routes. Do not claim individual feature ownership. Scores are heuristic indicators, not proof or fraud probabilities; no deployment was verified.

AgentBreak is described in the supplied résumé as a prototype for URL submission and reporting web-security checks. No source, tests, public repository, deployment or code-verified stack was supplied; distinguish the owner's description from verified implementation and do not claim production-grade penetration testing or confirmed vulnerabilities.

Skills are limited to those listed in the supplied résumé: Python, C, Java; HTML, CSS, React, Vite; FastAPI, Express.js, REST API fundamentals; AI API integration and ML fundamentals; SQL fundamentals; Git, GitHub, VS Code and Docker fundamentals. Show active learning separately and do not present proficiency percentages.

## Design continuation

**Movement:** contemporary editorial portfolio / printed field notebook. **Principles:** evidence before claims; text-first work; legible hierarchy; honest student positioning. **Color:** warm paper/stone and charcoal with restrained existing persimmon and olive, not product-preview colors. **Layout:** broad project rows with a title/category rail and flexible copy column; stack in reading order on mobile. **Motifs:** thin section rules, concise mono labels, existing SH slash monogram. **Interactions:** direct text links, visible focus, native details disclosure, usable form, subtle hover. **Motion:** preserve short opacity/transform reveals, desktop-only subtle hero parallax and reduced-motion alternative. **Type:** Newsreader display, DM Sans body/UI, DM Mono metadata. **Brand essence:** practical AIML student work shown with clear evidence boundaries; curious, careful, direct. **Voice examples:** “I learn by building.” / “What’s implemented, what remains, and why.” Keep the current SH wordmark and persimmon `#c74f35`.

## Serving and release

Serve existing static `public/` files on configured Preview port 3000; no backend, database or new packages. Keep `publishing.auto_publish: false`. A source checkpoint to the current Manus-managed repository is distinct from deployment; do not publish unless the user gives new explicit authorization.

The user has requested a GitHub connection but has not yet confirmed the destination. The public GitHub account listing shows no public portfolio repository; private repositories are not visible. Webdev's canonical GitHub flow creates a new private repository and does not support adopting an existing repository. Do not transfer code or switch the canonical repository until the user confirms the exact new destination through Webdev's confirmation flow.
