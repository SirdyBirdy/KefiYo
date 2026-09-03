# KefiYo Website

This is the live code for the KefiYo site. It's plain HTML/CSS/JS — no build step,
no framework, no install required. You can open `index.html` directly in a browser
and it works.

---

## 1. Folder structure

```
kefiyo-site/
├── index.html          ← all the page content lives here
├── css/
│   └── style.css       ← all the styling (colors, spacing, layout)
├── js/
│   └── script.js       ← menu filter, gift card selector, music player
├── assets/
│   ├── images/         ← logo + photos
│   ├── videos/         ← hero/story/instagram background videos
│   └── audio/          ← music player tracks
└── README.md           ← this file
```

**Rule of thumb:** text and layout changes → `index.html`. Colors, spacing, fonts →
`css/style.css`. Anything interactive (buttons, the music player) → `js/script.js`.
New photos/videos/music → drop into the matching `assets/` subfolder.

---

## 2. Making common changes

### Change any text on the page
Open `index.html`, use Ctrl+F / Cmd+F to search for the words you see on the live
site (e.g. "Where everyday tastes"), and edit the text between the tags. Don't
delete the `<tag>` or `</tag>` parts around it — just the words in between.

### Change a price or menu item
Find the `<!-- MENU -->` section in `index.html`. Each item is one line like:

```html
<div class="row"><div><h4>Classic Swirl</h4><span>Original froyo, two toppings</span></div><div class="price">£5.20</div></div>
```

- `Classic Swirl` = item name
- `Original froyo, two toppings` = description
- `£5.20` = price

To add a new item, copy one whole `<div class="row">...</div>` line and edit it.
To mark an item as a bestseller, add `<span class="badge">Most loved</span>` right
after the item name (see "Signature Bowl" for an example).

### Swap a photo or video
1. Add the new file to `assets/images/` (photos) or `assets/videos/` (videos).
2. **Keep the exact same file name** as what's already there (e.g. replace
   `flavour-matcha.jpg` with a new photo, but still name it `flavour-matcha.jpg`).
   That way you don't need to touch any code — the website just picks up the new
   file automatically. See the full file-name list in section 4 below.
3. If you want a *new* file name instead, you'll need to also update that name
   inside `index.html` (search for the old file name, replace it with the new one).

### Change colors
Open `css/style.css`. Right at the top you'll see:

```css
:root{
  --wasabi:#929433;
  --pink:#f7c0bf;
  --matcha:#d8d79a;
  --cream:#fdfbf2;
  --ink:#1d1c11;
  --deep:#465b06;
  --white:#ffffff;
}
```

These are the only 7 colors used across the whole site. Change a hex code here and
it updates everywhere that color is used (buttons, tags, chips, backgrounds, etc).
You don't need to hunt through the rest of the file.

### Change fonts
Fonts are loaded at the top of `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Shrikhand&family=Alata&display=swap" rel="stylesheet">
```
`Shrikhand` is the bold display font (headings). `Alata` is body text. To swap
either, pick a new font on [fonts.google.com](https://fonts.google.com), copy its
`<link>` tag in place of this one, then update the font name in `css/style.css`
wherever you see `'Shrikhand'` or `'Alata'`.

### Add or edit the music player playlist
Open `js/script.js` and find the `PLAYLIST` array near the top:

```js
var PLAYLIST = [
  { title: 'Track One', artist: 'KefiYo Radio', src: 'assets/audio/track-1.mp3', cover: '' },
  ...
];
```

- Add MP3 files to `assets/audio/`.
- Add or edit one `{ ... }` line per track. `title` and `artist` show in the
  player, `src` is the file path, `cover` is optional (leave `''` for a plain
  numbered label, or point it at an image in `assets/images/` for cover art).
- You can have as many tracks as you like — just add more lines.

---

## 3. Things NOT to touch (unless you mean to)

- Don't rename `index.html`, `css/style.css`, or `js/script.js` — the page links
  to these by exact name.
- Don't move the `assets` folder or rename its subfolders (`images`, `videos`,
  `audio`) — file paths inside the code point to these exact folder names.
- Avoid deleting `id="..."` or `class="..."` attributes on elements — styling and
  the interactive bits (menu filters, gift card selector, music player) rely on
  these to find the right element.

---

## 4. Required file names (assets)

Match these exactly (case-sensitive) so the site picks them up with zero code
changes:

| Folder | File name | Used for |
|---|---|---|
| `assets/images/` | `logo.png` | Header logo |
| `assets/images/` | `flavour-original.jpg` | Original Froyo card |
| `assets/images/` | `flavour-acai.jpg` | Açaí Bowls card |
| `assets/images/` | `flavour-matcha.jpg` | Matcha card |
| `assets/images/` | `flavour-vegan.jpg` | Vegan & Smoothies card |
| `assets/videos/` | `hero-video.mp4` | Hero background |
| `assets/videos/` | `story-video.mp4` | "Why KefiYo" section |
| `assets/videos/` | `instagram-1.mp4` – `instagram-4.mp4` | Instagram grid (4 tiles) |
| `assets/audio/` | `track-1.mp3`, `track-2.mp3`, `track-3.mp3` (or your own names — just update `js/script.js` to match) | Vinyl music player |

---

## 5. Putting this on GitHub

1. Create a new repository on GitHub (don't initialize it with a README —
   you already have one).
2. On your computer, in this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. To publish it as a live website for free with **GitHub Pages**:
   - Go to your repo on GitHub → **Settings** → **Pages**
   - Under "Branch", choose `main` and `/ (root)`, then **Save**
   - GitHub gives you a live URL (usually `https://<username>.github.io/<repo-name>/`)
     within a minute or two.
4. Every time you make changes locally, push them again:
   ```
   git add .
   git commit -m "describe what you changed"
   git push
   ```
   The live site updates automatically a minute or so after you push.

---

## 6. Quick troubleshooting

**A photo/video isn't showing up.**
Check the file name matches exactly (including `.jpg` vs `.jpeg`, and
capitalization) and that it's in the right `assets/` subfolder. Browsers are
case-sensitive about file paths even if your computer isn't.

**Music won't play.**
Browsers block audio from auto-starting — the vinyl icon has to be clicked once
by a visitor before any sound plays. That's normal and expected, not a bug.

**I broke something and don't know what.**
If you're using git (section 5), you can always undo local changes back to the
last commit with `git checkout -- .`, or view your commit history with
`git log` to find a working version to go back to.
