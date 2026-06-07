# donjilla.com

Photography portfolio and archive directory for Don Jilla.

Built with [Eleventy (11ty)](https://www.11ty.dev/) · Hosted free on [Netlify](https://netlify.com)

---

## File structure reference

```
donjilla-site/
├── src/
│   ├── _data/
│   │   └── shoots.json      ← ALL shoot data lives here
│   ├── _layouts/
│   │   └── base.njk         ← nav, footer, shared HTML
│   ├── css/
│   │   └── style.css        ← all styles
│   ├── images/
│   │   └── [shoot-slug]/    ← one folder per shoot
│   ├── work/
│   │   ├── index.njk        ← /work/ directory page
│   │   └── shoot.njk        ← auto-generates each /work/[slug]/ page
│   ├── about/
│   │   └── index.njk        ← /about/ page
│   ├── contact/
│   │   └── index.njk        ← /contact/ page
│   └── index.njk            ← homepage
├── .eleventy.js             ← site config (don't touch)
├── package.json             ← dependencies (don't touch)
└── netlify.toml             ← deploy config (don't touch)
```
