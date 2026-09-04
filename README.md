# KefiYo Website

Plain HTML/CSS/JS — no build step, no framework, no install required.
Open `index.html` directly in a browser and it works.

---

## 1. Folder structure

```
kefiyo-site/
├── index.html              ← homepage — page structure only, no text
├── menu.html                ← full menu page — page structure only, no text
├── css/
│   └── style.css            ← all styling (colors, spacing, layout)
├── js/
│   ├── content.js            ← ALL homepage text, menu teaser, prices, gift card, business info
│   ├── menu-content.js       ← ALL full-menu-page text, categories, items, prices
│   └── script.js             ← renders content.js/menu-content.js onto the page + interactions
└── assets/
    ├── images/
    │   └── favicon/          ← favicon files (see section 5)
    ├── videos/
    └── audio/                ← music player tracks
```

**The rule that matters most:** `index.html` and `menu.html` contain almost no
visible text anymore. Everything you'd want to edit — headings, menu items,
prices, gift card link, footer — lives in `js/content.js` (homepage) or
`js/menu-content.js` (full menu page). The `.html` files are just empty
containers that `script.js` fills in when the page loads.

---

## 2. Editing content

### Homepage text, teaser menu, gift card → `js/content.js`
Open the file — it's one big object, organized by section (`hero`, `flavours`,
`story`, `menu`, `gift`, `final`, `footer`, etc). Each has plain English fields
in quotes. Change the text between the quotes, save, refresh.

**Menu prices** (the 6-item teaser on the homepage) are under `menu.items`:
```js
{ name: "Classic Swirl", desc: "Original froyo, two toppings", price: "£5.20" },
```
Copy a whole `{ ... }` line to add an item, delete one to remove it. `badge`
is optional — add `badge: "Most loved"` to any item to show a small tag next
to its name.

### Full menu page → `js/menu-content.js`
Same idea, but organized into `categories`, each with its own `items` array.
This is the complete menu shown on the dedicated menu page (linked from "See
full menu" and the nav). Add/remove/reorder items the same way as above.

### Gift cards
Gift purchases go through Square's checkout, not this website — so the gift
card section is a single "Buy a gift card" button, not a price picker. To
change where it sends people, edit `checkoutUrl` in `content.js`:
```js
checkoutUrl: "https://app.squareup.com/gift/MLXHPN5GPT744/order",
```

### Colors
Top of `css/style.css`:
```css
:root{
  --wasabi:#929433;
  --pink:#f7c0bf;
  --matcha:#d8d79a;
  --cream:#fdfbf2;
  --ink:#1d1c11;
  --deep:#465b06;
}
```
These 6 colors are used everywhere on the site. Change a hex code here and it
updates everywhere.

### Swapping a photo/video/logo
Add the new file to the matching `assets/` subfolder using the **exact same
file name** as what's already there — the site just picks it up, no code
changes needed. Full required-name list is in section 6.

---

## 3. SEO — what's already set up, and what to edit

Each page (`index.html`, `menu.html`) has its own SEO block at the top of
`<head>`:

- **`<title>`** — shows as the browser tab title and the blue link in Google.
- **`<meta name="description">`** — the paragraph under the link in Google
  search results. Keep it under ~155 characters.
- **Open Graph / Twitter tags** (`og:title`, `og:description`, `og:image`,
  etc.) — control how the page looks when shared as a link on
  WhatsApp/iMessage/Facebook/Twitter.
- **`<link rel="canonical">`** — tells Google the "official" URL for the page.

**To edit any of this**, open the relevant `.html` file and change the text
inside the quotes in that `<head>` block. Update the `https://www.kefiyo.co.uk/`
URLs throughout if the real domain is different.

Each page also has exactly one `<h1>` (the big page title — "Where everyday
tastes a little better" on the homepage, "Everything on the counter" on the
menu page). Don't add a second `<h1>` to a page — Google prefers one per page.

**Structured data (schema.org):** the site automatically injects machine-
readable business info (name, address, hours, price range) and full menu data
as JSON-LD, built from `business` in `content.js` and the categories in
`menu-content.js`. This is what lets Google potentially show your hours,
address, and menu items directly in search results. Fill in the blank fields
in `content.js` → `business` (postal code, phone number) once you have them.

---

## 4. Favicons

The `<head>` of both pages already references these files — you just need to
add them to `assets/images/favicon/`:

| File | Size |
|---|---|
| `favicon.ico` | 48×48 (multi-size) |
| `favicon-16x16.png` | 16×16 |
| `favicon-32x32.png` | 32×32 |
| `apple-touch-icon.png` | 180×180 |
| `site.webmanifest` | (text file, see below) |

The easiest way to generate all of these from your logo in one go:
1. Go to [realfavicongenerator.net](https://realfavicongenerator.net)
2. Upload your logo
3. Download the generated package
4. Drop the files into `assets/images/favicon/` with the names above

You'll also want a **`social-media.jpeg`** (1200×630px recommended) in
`assets/images/` — this
is the image that shows up when someone shares a KefiYo link on social media
or messaging apps.

---

## 5. The vinyl music player — and why tracks might not play

The player lives at the bottom-right of every page. Tracks are listed in
`content.js` → `playlist`:
```js
{ title: "Track One", artist: "KefiYo Radio", src: "assets/audio/track-1.mp3", cover: "" },
```

**If a track won't play, it's almost always one of these:**

1. **File name doesn't match exactly.** `src` in `content.js` must match the
   file in `assets/audio/` character-for-character, including capitalization
   and the extension (`.mp3` vs `.MP3` matters on some hosts, including
   GitHub Pages).
2. **Unsupported audio format.** Stick to `.mp3` — it plays everywhere. `.wav`
   and `.m4a` mostly work too, but avoid anything more exotic.
3. **Autoplay was blocked.** This is normal, not a bug — browsers require a
   real click before any audio plays. Since the player only starts on click
   anyway, this shouldn't affect visitors, but it does mean you can't make
   tracks start automatically on page load.
4. **The player will now tell you what's wrong.** If a track fails to load,
   a small message appears in the player panel itself (and a longer one in
   the browser console — right-click the page → Inspect → Console tab) naming
   the exact file path it tried and failed to reach. Check that path against
   what's actually in `assets/audio/`.

---

## 6. Required file names (assets)

Match these exactly (case-sensitive):

| Folder | File name | Used for |
|---|---|---|
| `assets/images/` | `logo.png` | Header logo |
| `assets/images/` | `flavour-original.jpg` | Original Froyo card |
| `assets/images/` | `flavour-acai.jpg` | Açaí Bowls card |
| `assets/images/` | `flavour-matcha.jpg` | Matcha card |
| `assets/images/` | `flavour-vegan.jpg` | Vegan & Smoothies card |
| `assets/images/` | `social-media.jpeg` | Social share preview image |
| `assets/images/favicon/` | `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `site.webmanifest` | Browser tab icons |
| `assets/videos/` | `hero-video.mp4` | Hero background |
| `assets/videos/` | `story-video.mp4` | "Why KefiYo" section |
| `assets/videos/` | `instagram-1.mp4` – `instagram-4.mp4` | Instagram grid (4 tiles) |
| `assets/audio/` | `track-1.mp3`, `track-2.mp3`, `track-3.mp3` (or your own names — just update `content.js` → `playlist` to match) | Vinyl music player |

---

## 7. Things NOT to touch (unless you mean to)

- Don't rename `index.html`, `menu.html`, `css/style.css`, `js/content.js`,
  `js/menu-content.js`, or `js/script.js` — the pages link to these by exact
  name, and `menu.html`'s nav/gift links assume `index.html` is at the root.
- Don't move the `assets` folder or rename its subfolders.
- Don't delete `id="..."` attributes from the `.html` files — that's how
  `script.js` knows where to inject content from `content.js`. If you need to
  restructure the layout, move the `id` along with its element rather than
  deleting it.
- Inside `content.js`/`menu-content.js`: don't remove commas between `{ ... }`
  blocks or quotes around text — both will break the whole file (the browser
  console will show a red error if this happens).

---

## 8. Putting this on GitHub

1. Create a new repository on GitHub (don't initialize it with a README —
   you already have one).
2. In this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. To publish as a live site with **GitHub Pages**:
   - Repo → **Settings** → **Pages**
   - Branch: `main`, folder: `/ (root)` → **Save**
   - You'll get a live URL (usually `https://<username>.github.io/<repo-name>/`)
     within a minute or two.
4. Every time you make changes:
   ```
   git add .
   git commit -m "describe what you changed"
   git push
   ```
   The live site updates automatically shortly after you push.

---

## 9. Quick troubleshooting

**A photo/video isn't showing up.**
Check the file name matches exactly and it's in the right `assets/` subfolder.
Browsers are case-sensitive about file paths even if your computer isn't.

**Music won't play.** See section 5 above — the player now tells you exactly
what went wrong.

**The whole page looks blank / unstyled.**
Open the browser console (right-click → Inspect → Console tab) and look for a
red error. The most common cause is a typo in `content.js` or
`menu-content.js` — a missing comma or quote will stop the whole file from
loading, which stops the whole page from rendering. The error message will
usually point at the line number.

**I broke something and don't know what.**
If you're using git, undo local changes back to the last commit with
`git checkout -- .`, or use `git log` to find an earlier working version.
