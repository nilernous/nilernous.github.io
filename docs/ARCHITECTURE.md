# Architecture

`nilernous.github.io` is a personal portfolio: a single-page React app built with Vite and deployed to GitHub Pages at `nilernous.id.vn`.

This document describes how the code is organized, which way dependencies are allowed to flow, and how to extend the site.

---

## 1. Overview

- **Single page, no router.** Navigation uses in-page anchors (`#about`, `#projects`, …) with `scroll-behavior: smooth`.
- **No backend.** All content is static data in `src/data/`, bundled at build time.
- **No global store.** State is local to components (`useState`). Reusable effects live in custom hooks.
- **Content is separate from presentation.** Sections render data; changing text, projects or skills means editing `src/data/`, not JSX.
- **3D is isolated.** Everything that depends on `three` lives in `src/three/` and is not part of the main bundle (see [§8](#8-the-three-module)).

## 2. Tech stack

| Area | Package | Role |
|---|---|---|
| UI | `react`, `react-dom` 19 | Rendering |
| Styling | `tailwindcss` 4 via `@tailwindcss/vite` | Utility CSS, configured in CSS (no `tailwind.config.js`) |
| Icons | `lucide-react` | SVG icon components |
| Animation | `animejs` 4 | JavaScript-driven animations: timelines, staggers, scroll-triggered effects (see [§7](#animation)) |
| Animation (legacy) | `framer-motion` | Used only by `ShimmerTitle` (3D carousel cards); do not use in new code |
| 3D | `three`, `@react-three/fiber`, `@react-three/drei` | Galaxy, planets and 3D cards in `src/three/` |
| Build | `vite` 7, `@vitejs/plugin-react` | Dev server with HMR, production bundle |
| Lint | `eslint` 9 (flat config), `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` | Static checks |
| Deploy | `gh-pages` | Publishes `dist/` to the `gh-pages` branch |

## 3. Folder structure

```
nilernous.github.io/
├── docs/
│   └── ARCHITECTURE.md
├── src/
│   ├── main.jsx                      # Entry: createRoot + StrictMode, imports global styles
│   ├── App.jsx                       # Composes layout + sections; contains no content
│   │
│   ├── sections/                     # One folder per page section
│   │   ├── hero/
│   │   │   ├── HeroSection.jsx
│   │   │   └── FloatingCard.jsx      # Makes the Profile Card float; draggable/throwable on desktop
│   │   ├── about/
│   │   │   └── AboutSection.jsx
│   │   ├── skills/
│   │   │   ├── SkillsSection.jsx
│   │   │   └── SkillCard.jsx         # Used only by SkillsSection
│   │   ├── projects/
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectModal.jsx
│   │   ├── purpose/
│   │   │   └── PurposeSection.jsx
│   │   └── contact/
│   │       └── ContactSection.jsx
│   │
│   ├── components/                   # Shared across sections
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── SectionHeading.jsx    # Eyebrow pill + gradient title + description
│   │   │   ├── AvailabilityBadge.jsx # "Available for projects" pill
│   │   │   ├── Timeline.jsx          # Vertical milestone timeline, animates in on view
│   │   │   └── ShimmerTitle.jsx      # Pulsing <h2> (framer-motion)
│   │   └── backgrounds/
│   │       └── TechCanvas.jsx        # Particle network on a 2D <canvas>
│   │
│   ├── three/                        # Everything that depends on three / R3F
│   │   ├── Scene.jsx                 # Module entry point
│   │   ├── objects/
│   │   │   ├── GalaxyBackground.jsx
│   │   │   ├── Planets.jsx
│   │   │   ├── PlanetaryBelt.jsx
│   │   │   └── Card3D.jsx
│   │   └── carousel/
│   │       ├── Carousel.jsx
│   │       └── cards/
│   │           ├── ProfileCard.jsx
│   │           ├── SkillsCard.jsx
│   │           ├── PurposeCard.jsx
│   │           ├── ExperienceCard.jsx
│   │           └── ContactCard.jsx
│   │
│   ├── data/                         # Site content: plain objects and arrays
│   │   ├── navigation.js             # NAV_ITEMS: section ids + labels
│   │   ├── profile.js                # PROFILE: name, roles, avatar, quote, mission
│   │   ├── socials.js                # EMAIL, SOCIALS: GitHub, LinkedIn, email
│   │   ├── hero.js
│   │   ├── about.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── purpose.js
│   │
│   ├── hooks/
│   │   ├── useScrolled.js            # true once scrollY passes a threshold (Navbar)
│   │   ├── useCopyToClipboard.js     # copy text + transient "copied" state (Contact)
│   │   ├── useClock.js               # HH:MM:SS, ticking every second (Footer)
│   │   └── useInViewAnimation.js     # Runs an anime.js animation once, when scrolled into view
│   │
│   ├── lib/
│   │   └── animations.js             # Shared anime.js presets: revealItems, revealSelf
│   │
│   ├── assets/                       # Files imported from code (Vite hashes their names)
│   │   └── profile.jpg
│   │
│   └── styles/
│       ├── index.css                 # @import "tailwindcss", utilities, @layer base
│       └── utilities.css             # .glass-panel, .tech-grid-bg, animations, scrollbar
│
├── index.html                        # SEO / Open Graph meta, <div id="root">
├── vite.config.js
├── eslint.config.js
└── package.json
```

Folders that do not exist yet but have a defined place:

- `public/`: files that must keep a fixed URL and are not imported from code, such as `favicon.svg` or `robots.txt`. Vite copies them to `dist/` unchanged.

### What goes where

| Folder | Contains | Does not contain |
|---|---|---|
| `sections/` | One `<section id="…">` per folder, plus sub-components used only by that section | Hardcoded content (read it from `data/`); components another section needs |
| `components/layout/` | Page chrome rendered once: Navbar, Footer | Section-specific logic |
| `components/ui/` | Presentational primitives driven entirely by props | Imports from `data/` or `sections/` |
| `components/backgrounds/` | Lightweight visual backdrops (2D canvas, CSS) | Anything importing `three` |
| `three/` | All code that imports `three`, `@react-three/*` | Code imported statically from outside the folder |
| `data/` | Exported constants describing content | JSX, hooks or component logic |
| `hooks/` | Custom `use*` hooks | JSX |
| `lib/` | Plain helpers and presets, such as anime.js `{ prepare, play }` pairs | React imports, JSX |
| `assets/` | Images and files imported by code | Files that need a stable URL (use `public/`) |
| `styles/` | Global CSS and shared custom classes | One-off component styling (use Tailwind classes inline) |

## 4. Dependency rules

Imports flow in one direction only:

```
App.jsx
  ├──► sections/      ──► components/, data/, hooks/, lib/
  ├──► components/    ──► components/ui/, hooks/, lib/, data/ (layout only)
  └──► three/ (lazy)  ──► components/ui/, data/

hooks/                ──► react, animejs
lib/                  ──► animejs (no React)
data/                 ──► assets/, lucide-react icon components only
```

1. `components/` never imports from `sections/` or `three/`.
2. A section never imports from another section. Anything two sections share moves to `components/ui/`.
3. `components/ui/` receives everything through props and does not import `data/`. `components/layout/` may read `data/` (Navbar and Footer render `NAV_ITEMS`, `PROFILE` and `SOCIALS`).
4. A child never imports from its parent. For example, `ProfileCard` imports `ShimmerTitle` from `components/ui/`, not from `Carousel.jsx`.
5. Nothing outside `three/` imports from it statically. When it is mounted, use `React.lazy(() => import("./three/Scene"))` so `three` ends up in a separate chunk.
6. `data/` files hold no JSX. Icons are stored as component references (`icon: Briefcase`) together with a Tailwind class (`iconClass: "text-sky-500"`), and the rendering component creates the element:

   ```jsx
   {ABOUT_HIGHLIGHTS.map(({ icon: Icon, iconClass, title }) => (
     <Icon key={title} className={`w-5 h-5 ${iconClass}`} />
   ))}
   ```

## 5. Render flow

```
index.html
  └── <script type="module" src="/src/main.jsx">
        └── main.jsx
              ├── import "./styles/index.css"
              └── <StrictMode><App /></StrictMode>
                    └── App
                          ├── <TechCanvas />            fixed particle background
                          ├── <Navbar />                NAV_ITEMS, PROFILE
                          ├── <main class="relative z-10">
                          │     ├── <HeroSection />     #hero
                          │     ├── <AboutSection />    #about
                          │     ├── <SkillsSection />   #skills
                          │     ├── <ProjectsSection /> #projects
                          │     ├── <PurposeSection />  #purpose
                          │     └── <ContactSection />  #contact
                          └── <Footer />                NAV_ITEMS, PROFILE, SOCIALS
```

`App.jsx` only composes components. The order of sections in `<main>` must match the order of `NAV_ITEMS` in `src/data/navigation.js`.

## 6. Data and state

### Content (`src/data/`)

`navigation.js` is the single source of truth for page sections:

```js
export const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  // …
];
```

Each `id` is the `id` of a `<section>`. Navbar (desktop and mobile) and Footer all render links from this array.

Other data files export one or more `UPPER_SNAKE_CASE` constants named after their section (`ABOUT_HIGHLIGHTS`, `SKILLS`, `PROJECTS`, `GOALS`, …). Values used in more than one place live in a shared file: the name, roles and mission statement are in `profile.js`, and contact links are in `socials.js`.

Conventions inside data files:

- Optional links use `null` when absent. For example, `demo: null` hides a project's Demo button.
- Per-item styling that varies by item (gradient, accent colors) is stored as Tailwind class strings, so the classes appear verbatim in source and Tailwind can detect them. Never build class names dynamically (`` `text-${color}-500` ``).

### State

| Kind | Where | Examples |
|---|---|---|
| Local UI state | `useState` in the component | Mobile menu open, active tab, skill filter, selected project, contact form |
| Reusable side effects | `src/hooks/` | Scroll listener, clipboard + reset timer, ticking clock |
| Content | `src/data/` (immutable) | Projects, skills, goals |

There is no Context or global store, and none is needed. If state ever has to be shared across sections (for example, a theme toggle), add `src/context/`.

## 7. Styling and animation

### Styling

- **Tailwind v4** runs through the `@tailwindcss/vite` plugin. Configuration lives in CSS; there is no `tailwind.config.js`.
- `styles/index.css` is the only stylesheet imported from JS. It imports Tailwind, then `utilities.css`, then defines `@layer base` (font stack, smooth scrolling, `body` colors).
- `styles/utilities.css` holds custom classes shared across components: `.glass-panel`, `.dark-glass-panel`, `.tech-grid-bg`, `.tech-dots-bg`, the `float` and `pulse-slow` animations, and the scrollbar styling.
- Component styling is written as Tailwind classes in JSX. Move a pattern into `utilities.css` only when it is used in three or more places and cannot be expressed as a shared component.
- **Brand gradient:** `from-sky-500 via-blue-400 to-indigo-400` (hover: `hover:from-sky-600 hover:to-indigo-500`), or the two-stop `from-sky-500 to-indigo-400`. Sky-500 is the anchor color. Do not reintroduce `indigo-600` / `purple-600` gradients.
- **No box shadows.** The design is flat: separate surfaces with borders (`border border-slate-200/80`), background tints and `.glass-panel`, not `shadow-*` classes or `box-shadow` in CSS. Two exceptions remain on purpose: focus rings on form inputs (`focus:ring-2`, needed for accessibility) and `drop-shadow-md` on white project titles that sit on gradient banners (a text shadow that keeps them legible).

### Animation

Pick the lightest tool that can do the job:

| Need | Use |
|---|---|
| Hover, focus, color or size changes on a single element | Tailwind `transition-*`, `hover:*`, `duration-*` |
| Looping decorative motion (pulse, float) | Tailwind `animate-*` or the keyframes in `utilities.css` |
| Sequenced or staggered motion, entrance effects, scroll-triggered animation, anything that needs JavaScript control | `animejs` |

Do not add new `framer-motion` code. Use anime.js for anything new that needs JavaScript animation, so the site depends on one animation library.

**Rule: animations start only when their element scrolls into view.** Every entrance animation goes through `useInViewAnimation(rootRef, { prepare, play }, options)` in `src/hooks/useInViewAnimation.js`:

1. Before first paint, `prepare` puts the elements in their start state (hidden, scaled to 0, …).
2. An `IntersectionObserver` waits until the root enters the viewport. It uses `rootMargin` (default `"0px 0px -10% 0px"`), not a ratio threshold, so very tall elements still trigger.
3. `play` runs once, and the observer disconnects.
4. Both functions run inside an anime.js `createScope` rooted at `rootRef`. Selectors such as `".reveal-item"` only match inside that root, and the scope is reverted on unmount (StrictMode-safe).
5. With `prefers-reduced-motion: reduce`, nothing is hidden or animated.

`prepare` and `play` are effect dependencies, so define them at module level (or import a preset from `src/lib/animations.js`), never inline. To replay after the rendered items change, pass `{ key }` (Projects passes the active filter).

Presets in `src/lib/animations.js`:

| Preset | Effect | Use it when |
|---|---|---|
| `revealItems` | Every `.reveal-item` inside the root fades and slides up, staggered by 90 ms | A heading block or a short grid that fits on screen |
| `revealSelf` | The root itself fades and slides up after `data-reveal-delay` ms | Each item observes itself, as in a long grid (`SkillCard`) where a single group trigger would animate items that are still off-screen |

```jsx
import { useRef } from "react";
import useInViewAnimation from "../../hooks/useInViewAnimation";
import { revealItems } from "../../lib/animations";

export default function ExampleSection() {
  const gridRef = useRef(null);
  useInViewAnimation(gridRef, revealItems);

  return (
    <div ref={gridRef} className="grid grid-cols-2 gap-6">
      {items.map((item) => (
        // Animate a wrapper, not the card: the card's `transition-all` would fight the JS animation.
        <div key={item.id} className="reveal-item">
          <Card className="h-full" {...item} />
        </div>
      ))}
    </div>
  );
}
```

Animations in the site today:

| Where | What |
|---|---|
| `SectionHeading` (every section) | Eyebrow, title and description reveal in turn |
| Hero | Intro blocks reveal in turn; the profile card slides up 250 ms later |
| `FloatingCard` (Hero Profile Card) | The whole Profile Card bobs gently once visible. On desktop (`(min-width: 1024px) and (pointer: fine)`), `createDraggable` lets visitors grab and throw it anywhere inside the hero section; it springs to a stop and resumes floating. Mobile gets the float only. |
| About, Projects, Purpose, Contact | Cards and panels reveal in turn |
| `SkillCard` | Card reveals (staggered per row via `data-reveal-delay`), then the proficiency bar fills left to right (`scaleX` 0 → 1 with `origin-left`) |
| `Timeline` | Markers pop in one by one, each connector line grows down to the next marker, and the text slides in beside each marker |

Guidelines:

- Target elements with a class used only for animation (`.reveal-item`, `.skill-bar-fill`, `.timeline-line`) or with a ref, never with Tailwind utility classes.
- Do not animate an element that has a CSS `transition-all` / `transition-transform`, because the transition fights anime.js on every frame. Wrap it and animate the wrapper (see the example above).
- Animate `transform` and `opacity` only. Animating layout properties (`width`, `height`, `top`) causes reflow on every frame. The skill bar keeps its `width` in CSS and animates `scaleX`.
- Do not nest two animation roots that use the same selector. The outer scope would also pick up the inner elements.
- Floating or draggable elements need two wrappers: the outer one is moved by the draggable, the inner one runs the float loop. Otherwise both write the same `transform`.

## 8. The `three/` module

`src/three/` contains a 3D scene (galaxy background, planets, an asteroid belt, 3D cards) and a card carousel. **It is not mounted in the app today**, so none of it ships in the production bundle.

Before mounting it:

1. `Scene` returns React Three Fiber elements (`<ambientLight>`, `<pointLight>`, …), so it must be rendered inside a `<Canvas>` from `@react-three/fiber`.
2. `Carousel` and its cards render DOM elements (`<div>`), which cannot be placed directly inside a `<Canvas>`. Either render the carousel outside the canvas, or wrap it in drei's `<Html>`.
3. Load it lazily so `three` stays out of the main chunk:

   ```jsx
   const Scene = lazy(() => import("./three/Scene"));
   // …
   <Suspense fallback={null}>
     <Canvas>
       <Scene />
     </Canvas>
   </Suspense>
   ```

4. Resolve the lint errors listed under [Known issues](#11-known-issues).

If the 3D experience is dropped, delete `src/three/` and remove `three`, `@react-three/fiber` and `@react-three/drei` from `package.json`. `framer-motion` can go as well, since `ShimmerTitle` is only used by the 3D cards (or port `ShimmerTitle` to anime.js if it is still wanted).

## 9. Build and deploy

| Script | Command | Purpose |
|---|---|---|
| `npm run dev` | `vite` | Dev server with HMR |
| `npm run build` | `vite build` | Production build into `dist/` |
| `npm run preview` | `vite preview` | Serve the production build locally |
| `npm run lint` | `eslint .` | Lint the whole project |
| `npm run deploy` | `gh-pages -d dist --cname nilernous.id.vn` | Deploy (`predeploy` runs the build first) |

Relevant `vite.config.js` settings:

- `base: './'`: emitted asset URLs are relative, so the build works from the domain root or from a sub-path.
- `build.outDir: 'dist'`, `build.assetsDir: 'assets'`.

Deploy flow:

```
npm run deploy
  ├── predeploy: vite build  ──►  dist/
  └── gh-pages -d dist --cname nilernous.id.vn
        └── commits dist/ + a CNAME file to the gh-pages branch
              └── GitHub Pages serves it at nilernous.id.vn
```

## 10. Conventions

- **File names:** components use `PascalCase.jsx`, hooks use `useCamelCase.js`, and data files use `camelCase.js` named after their section.
- **Exports:** one component or hook per file, as the default export. Data files use named `UPPER_SNAKE_CASE` exports.
- **Import order:** external packages, then `components/`, then `hooks/`, then `data/`, then files in the same folder.
- **Lint:** `no-unused-vars` ignores identifiers starting with an uppercase letter or `_`, for both variables and arguments (`varsIgnorePattern` / `argsIgnorePattern: '^[A-Z_]'`). ESLint's core rule does not see usage inside JSX, so this keeps component variables such as `icon: Icon` from being flagged.
- **Copy:** write site text in plain first person, the way you would explain it to someone in person. Avoid marketing phrases ("cutting-edge", "exceptional", "high-tech") and never use the em dash (U+2014); use a period, comma or colon instead. Skill levels and descriptions should match real experience (currently Junior).

### Adding a section

1. Add `{ id: "blog", label: "Blog" }` to `NAV_ITEMS` in `src/data/navigation.js`, at the position where it should appear.
2. Create `src/data/blog.js` for its content.
3. Create `src/sections/blog/BlogSection.jsx`. Make the root element `<section id="blog">` and start with `<SectionHeading … />`.
4. Render `<BlogSection />` inside `<main>` in `App.jsx`, in the same position as in `NAV_ITEMS`.

Navbar and Footer pick up the new link automatically.

### Editing content

| To change | Edit |
|---|---|
| Name, role, quote, mission, avatar | `src/data/profile.js` (avatar file: `src/assets/profile.jpg`) |
| Email, GitHub, LinkedIn | `src/data/socials.js` |
| Projects and their categories | `src/data/projects.js` |
| Skills and filter categories | `src/data/skills.js` |
| Menu labels | `src/data/navigation.js` |

## 11. Known issues

- `index.html` links a favicon at `/vite.svg`, which does not exist. Add a favicon to `public/` and update the `<link rel="icon">`.
- `npm run lint` reports 18 errors, all in code that is not rendered today:
  - `src/three/objects/*`: `Math.random()` called during render (`react-hooks/purity`), refs read during render (`react-hooks/refs`), a mutated hook value (`react-hooks/immutability`) and unused `state` parameters.
  - `src/three/carousel/Carousel.jsx`: an unused `handleContainerMouseEnter`.
  - `src/components/ui/ShimmerTitle.jsx`: `motion` reported as unused. This is a false positive, because `motion` is used only as `<motion.h2>`, which the core rule does not track.
- `@react-three/drei` is a dependency but is not imported anywhere yet.
- `framer-motion` and `animejs` are both installed. `framer-motion` is only needed by `ShimmerTitle` (3D cards); once that is ported to anime.js or removed, drop `framer-motion`.
- `PURPOSE_MISSION.horizon` in `src/data/purpose.js` still reads "2025 - 2026" and should be updated.
- The contact form does not send anything. Submitting it shows a success message and clears the fields after 4 seconds.
