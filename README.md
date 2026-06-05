# donjilla.com

Photography portfolio and archive directory for Don Jilla.

Built with [Eleventy (11ty)](https://www.11ty.dev/) · Hosted free on [Netlify](https://netlify.com) · Zero monthly cost

---

## One-time setup (do this once)

### 1. Install Node.js
Download and install from https://nodejs.org (choose the LTS version)

### 2. Put this folder on GitHub
1. Go to https://github.com and sign in (donhneiljr@gmail.com)
2. Click **New repository** → name it `donjilla-site` → **Create repository**
3. Open Terminal (Mac: Cmd+Space → type Terminal)
4. Run these commands one at a time:

```bash
cd /path/to/donjilla-site   # drag the folder into Terminal to get the path
git init
git add .
git commit -m "initial build"
git branch -M main
git remote add origin https://github.com/donhneiljr/donjilla-site.git
git push -u origin main
```

### 3. Connect to Netlify (free hosting)
1. Go to https://netlify.com → **Sign up with GitHub**
2. Click **Add new site → Import an existing project**
3. Select **GitHub** → select `donjilla-site`
4. Build settings will auto-detect from `netlify.toml` — no changes needed
5. Click **Deploy site**

Your site is now live at a `*.netlify.app` address.

### 4. Connect donjilla.com
1. In Netlify: **Domain management → Add custom domain → donjilla.com**
2. Update your domain registrar's nameservers to point to Netlify (they'll show you the values)

---

## Adding a new shoot (the main thing you'll do)

Every time you shoot a new event, do this:

### Step 1 — Add images
Create a folder inside `src/images/` named after the shoot slug (all lowercase, hyphens, no spaces):

```
src/images/four-chord-12-your-band/
  01.jpg
  02.jpg
  03.jpg
  (etc.)
```

Pick a **cover image** (your best frame) — this shows in the directory grid.

### Step 2 — Add the shoot to the data file
Open `src/_data/shoots.json` and add a new entry to the array.

Copy this template and fill it in:

```json
{
  "slug":        "four-chord-12-your-band",
  "artist":      "Band Name",
  "event":       "Four Chord Music Fest 12",
  "eventSlug":   "four-chord-12",
  "venue":       "Roxian Theatre, Pittsburgh PA",
  "year":        2026,
  "category":    "festival",
  "featured":    false,
  "cover":       "01.jpg",
  "images":      ["01.jpg", "02.jpg", "03.jpg"],
  "description": "Band Name live at Four Chord Music Fest 12, Pittsburgh PA 2026. Concert photography by Don Jilla."
}
```

**Categories:**
- `festival` — Four Chord Music Fest
- `live`     — Live music (MMF, venue shows)
- `events`   — Underground events (Myspace Nite, Club Classxcx, etc.)

**featured: true** — shows the shoot on the homepage grid (use sparingly — best shots only)

### Step 3 — Make it live
```bash
git add .
git commit -m "add [Band Name] — [Event] [Year]"
git push
```

Netlify auto-builds and your new page is live in ~60 seconds.

The new shoot will appear at: `donjilla.com/work/four-chord-12-your-band/`

---

## Running locally (preview before publishing)

```bash
npm install        # first time only
npm start          # starts local server
```

Open http://localhost:8080 in your browser.

---

## Editing site content

| What to change | Where |
|---|---|
| Bio / about text | `src/about/index.njk` |
| Contact form | `src/contact/index.njk` |
| Homepage tagline / hero | `src/index.njk` |
| Hero background image | `src/css/style.css` — search for "ADD YOUR HERO IMAGE" |
| Colors / fonts | `src/css/style.css` → `:root` variables at the top |
| Shoot data | `src/_data/shoots.json` |
| Your portrait (about page) | Replace `/images/portrait.jpg` and update `src/about/index.njk` |

---

## Updating existing shoots

Open `src/_data/shoots.json`, find the shoot by its `slug`, and edit the fields.

To add more images to an existing shoot:
1. Drop them in `src/images/[slug]/`
2. Add the filenames to the `"images"` array in `shoots.json`
3. `git add . && git commit -m "update [slug]" && git push`

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
