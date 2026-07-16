# VectorWave Technologies - project context

Notes for continuity when working on this project with Claude Code.

## Business
IT consulting site: Zoho/Odoo ERP implementation, CRM automation, web/app
development, AI tools, finance and accounting setup.

## Design system
- Colors: navy `#0B1B33` (header/footer/dark sections), blue `#1D4ED8`
  (links/icons/accents), orange `#F97316` (primary CTA buttons only),
  light backgrounds `#F8FAFC` / `#EFF4FE`, borders `#E4E8F0`.
- Only one accent color (orange) for primary CTAs.
- Fully responsive: mobile-first Tailwind, hamburger nav below `lg`.
- Transitions: `components/Reveal.tsx` is a scroll-triggered fade-up wrapper
  used on every section. Cards use `hover:-translate-y-1 hover:shadow-lg
  transition-all duration-300`. Buttons use `transition-all duration-200
  hover:-translate-y-0.5`. Nav links have an animated underline
  (`after:` pseudo-element) and highlight the active route via `usePathname`.
  Mobile menu animates open/close with a `grid-template-rows` transition.
  Respect `prefers-reduced-motion` (handled globally in `app/globals.css`).

## Pages built (all use real content from vectorwavetechnologies.com)
- `/` - Hero, HowWeHelp, Services, Process, Innovation, Testimonial, CTA
- `/about` - mission, what we do, leadership, 6-D process, why choose us, stats
- `/services` - 6 core services + 9 industries served
- `/team` - 5 team departments (Zoho, CRM, Finance, Web Dev, AI)
- `/contact` - contact method cards, interactive form (`ContactForm.tsx`,
  client component with local submit/loading/success state, no backend wired
  yet), office location
- `/blog` - placeholder post grid with category filter (`BlogGrid.tsx`,
  client component); still needs a real CMS wired in for internal publishing
  (recommended: Payload CMS running inside this Next.js app with role-based
  access - see chat history for Sanity/Strapi alternatives)

## Known environment quirk
This project folder is accessed both by a local dev server/editor and by an
AI sandbox mount. Large file overwrites have occasionally been truncated
when written by editor tools mid-sync - if a file ever looks cut off
mid-statement, rewrite it fully rather than patching around the cut.
The `.next` cache can go stale (corrupted generated route types) if a build
was interrupted - delete the `.next` folder and restart `npm run dev` if
`next dev`/`next build` throws a type error inside `.next/dev/types/`.

## Stack
Next.js 16 (App Router, Turbopack default), React 19.2, Tailwind CSS v4,
lucide-react (note: this version dropped brand/social icons like Linkedin/
Facebook/Instagram - footer uses plain text-initial badges instead).
