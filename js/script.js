/* ============================================================
   KefiYo — site rendering + interactions
   ============================================================
   This file reads everything from CONTENT (see content.js) and
   builds the actual page. You shouldn't need to edit this file
   to change text, prices, or images — see content.js for that.
   ============================================================ */

function escapeHTML(str) {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

var CHIP_ICONS = {
  froyo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 0-5.2 2-5.2 4.5S9 12 12 12s5.2-2 5.2-4.5S15 3 12 3Z"/><path d="M8.3 12c-.3 4 1.6 7.7 3.7 9 2.1-1.3 4-5 3.7-9"/></svg>',
  acai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h16a8 8 0 0 1-16 0Z"/><circle cx="9" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="6.3" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="8" r="1" fill="currentColor" stroke="none"/></svg>',
  matcha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h11v6a5.5 5.5 0 0 1-5.5 5.5h-0a5.5 5.5 0 0 1-5.5-5.5V8Z"/><path d="M16 9.2h1.3a2.3 2.3 0 0 1 0 4.6H16"/><path d="M9.3 8c-.2-1.8.8-2.9 2.5-3.7-.2 1.8-.9 2.9-2.5 3.7Z" fill="currentColor" stroke="none"/></svg>',
  smoothie: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7.2 8h9.6l-1.1 11H8.3L7.2 8Z"/><path d="M14 8V3.2M14 3.2l1.6 2"/><path d="M6.2 8h11.6"/></svg>',
  toppings: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="4" y="5" width="8" height="2.4" rx="1.2" transform="rotate(-25 8 6.2)"/><rect x="13" y="4" width="7" height="2.2" rx="1.1" transform="rotate(20 16.5 5.1)"/><circle cx="6.5" cy="15" r="1.6"/><rect x="12" y="13" width="7" height="2.2" rx="1.1" transform="rotate(-15 15.5 14.1)"/><circle cx="18" cy="18" r="1.6"/></svg>'
};

var INSTAGRAM_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.05" fill="currentColor" stroke="none"/></svg>';

/* If we're already on index.html, turn "index.html#section" links into
   plain "#section" so they scroll smoothly instead of reloading the page.
   From any other page (e.g. menu.html) the full "index.html#section" is kept. */
function navHref(href) {
  var onMenuPage = /menu\.html(\?.*)?$/.test(location.pathname);
  if (!onMenuPage && href.indexOf('index.html#') === 0) {
    return href.replace('index.html#', '#');
  }
  return href;
}

/* ---------------------------------------------------------- */
/* Render functions — one per section                          */
/* ---------------------------------------------------------- */

function renderNav() {
  var linksEl = document.getElementById('navLinks');
  var ctaEl = document.getElementById('navCta');
  if (linksEl) {
    linksEl.innerHTML = CONTENT.nav.links.map(function (l) {
      return '<a href="' + navHref(l.href) + '">' + escapeHTML(l.label) + '</a>';
    }).join('');
  }
  if (ctaEl) {
    ctaEl.href = navHref(CONTENT.nav.cta.href);
    ctaEl.textContent = CONTENT.nav.cta.label;
  }
}

function renderHero() {
  var top = document.getElementById('heroTop');
  var pills = document.getElementById('heroPills');
  var strip = document.getElementById('heroStrip');
  var h = CONTENT.hero;

  if (top) {
    top.innerHTML =
      '<span class="eyebrow">' + escapeHTML(h.eyebrow) + '</span>' +
      '<h1>' + escapeHTML(h.headingBefore) + '<em>' + escapeHTML(h.headingHighlight) + '</em></h1>' +
      '<p class="lede" style="text-align:center">' + escapeHTML(h.lede) + '</p>' +
      '<div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center">' +
      h.buttons.map(function (b) {
        return '<a href="' + b.href + '" class="' + b.style + '">' + escapeHTML(b.label) + '</a>';
      }).join('') +
      '</div>';
  }
  if (pills) {
    pills.innerHTML = h.pills.map(function (p) {
      return '<div class="floatpill ' + p.className + '">' + escapeHTML(p.text) + '</div>';
    }).join('');
  }
  if (strip) {
    strip.innerHTML = h.strip.map(function (s) {
      return '<span>' + escapeHTML(s) + '</span>';
    }).join('');
  }
}

function renderFlavours() {
  var head = document.getElementById('flavoursHead');
  var grid = document.getElementById('flavoursGrid');
  var f = CONTENT.flavours;

  if (head) {
    head.innerHTML =
      '<span class="eyebrow">' + escapeHTML(f.eyebrow) + '</span>' +
      '<h2>' + escapeHTML(f.heading) + '</h2>' +
      '<p class="lede" style="text-align:center">' + escapeHTML(f.lede) + '</p>';
  }
  if (grid) {
    grid.innerHTML = f.items.map(function (item) {
      return '<article class="flav">' +
        '<div class="ph"><span class="tag ' + item.tagClass + '">' + escapeHTML(item.tag) + '</span>' +
        '<img src="' + item.image + '" alt="' + escapeHTML(item.alt) + '" loading="lazy"></div>' +
        '<h3>' + escapeHTML(item.title) + '</h3>' +
        '<p>' + escapeHTML(item.desc) + '</p>' +
        '</article>';
    }).join('');
  }
}

function renderStory() {
  var el = document.getElementById('storyText');
  var s = CONTENT.story;
  if (!el) return;
  el.innerHTML =
    '<span class="eyebrow">' + escapeHTML(s.eyebrow) + '</span>' +
    '<h2>' + escapeHTML(s.heading) + '</h2>' +
    '<p class="lede">' + escapeHTML(s.lede) + '</p>' +
    '<div class="tickers">' +
    s.points.map(function (p) {
      return '<div class="tick"><b>' + escapeHTML(p.number) + '</b><span>' + escapeHTML(p.text) + '</span></div>';
    }).join('') +
    '</div>';

  var video = document.getElementById('storyVideo');
  if (video) video.src = s.video;
}

function renderMenu() {
  var head = document.getElementById('menuHead');
  var chips = document.getElementById('menuChips');
  var items = document.getElementById('menuItems');
  var foot = document.getElementById('menuFoot');
  var m = CONTENT.menu;

  if (head) {
    head.innerHTML =
      '<span class="eyebrow">' + escapeHTML(m.eyebrow) + '</span>' +
      '<h2>' + escapeHTML(m.heading) + '</h2>';
  }
  if (chips) {
    chips.innerHTML = m.chips.map(function (c, i) {
      return '<span class="chip' + (i === 0 ? ' on' : '') + '">' +
        (CHIP_ICONS[c.icon] || '') +
        escapeHTML(c.label) +
        '</span>';
    }).join('');
  }
  if (items) {
    items.innerHTML = m.items.map(function (row) {
      var badge = row.badge ? '<span class="badge">' + escapeHTML(row.badge) + '</span>' : '';
      return '<div class="row"><div><h4>' + escapeHTML(row.name) + badge + '</h4>' +
        '<span>' + escapeHTML(row.desc) + '</span></div>' +
        '<div class="price">' + escapeHTML(row.price) + '</div></div>';
    }).join('');
  }
  if (foot) {
    foot.innerHTML = '<a href="' + m.footerButton.href + '" class="btn ghost">' + escapeHTML(m.footerButton.label) + '</a>';
  }
}

function renderInstagram() {
  var head = document.getElementById('instaHead');
  var grid = document.getElementById('instaGrid');
  var follow = document.getElementById('instaFollow');
  var ig = CONTENT.instagram;

  if (head) {
    head.innerHTML =
      (ig.sticker ? '<div class="ig-sticker">' + escapeHTML(ig.sticker) + '</div>' : '') +
      '<span class="eyebrow">' + INSTAGRAM_ICON + escapeHTML(ig.eyebrow) + '</span>' +
      '<h2>' + escapeHTML(ig.heading) + '</h2>';
  }
  if (grid) {
    grid.innerHTML = ig.videos.map(function (src) {
      return '<div><video autoplay muted loop playsinline src="' + src + '"></video></div>';
    }).join('');
  }
  if (follow && ig.url) {
    follow.innerHTML = '<a href="' + ig.url + '" target="_blank" rel="noopener" class="btn ig-follow-btn">' +
      INSTAGRAM_ICON + escapeHTML(ig.followLabel || 'Follow us on Instagram') + '</a>';
  }
}

function renderGift() {
  var el = document.getElementById('giftCard');
  var g = CONTENT.gift;
  if (!el) return;
  el.innerHTML =
    '<div>' +
    '<span class="eyebrow" style="color:var(--matcha)">' + escapeHTML(g.eyebrow) + '</span>' +
    '<h2 style="margin:12px 0 16px">' + escapeHTML(g.heading) + '</h2>' +
    '<p>' + escapeHTML(g.desc) + '</p>' +
    '<a href="' + g.checkoutUrl + '" target="_blank" rel="noopener" class="btn giftbtn">' + escapeHTML(g.buttonLabel) + '</a>' +
    '</div>' +
    '<div class="cardart"><span class="amt">' + escapeHTML(g.cardLabel) + '</span></div>';
}

function renderFinal() {
  var el = document.getElementById('finalContent');
  var footer = document.getElementById('siteFooter');
  var f = CONTENT.final;
  var ft = CONTENT.footer;

  if (el) {
    el.innerHTML =
      '<span class="eyebrow">' + escapeHTML(f.eyebrow) + '</span>' +
      '<h2>' + escapeHTML(f.heading) + '</h2>' +
      '<p class="lede" style="text-align:center">' + escapeHTML(f.address) + '</p>' +
      '<a href="' + f.button.href + '" class="btn">' + escapeHTML(f.button.label) + '</a>';
  }
  if (footer) {
    footer.innerHTML =
      '<span>' + escapeHTML(ft.copyright) + '</span><span>' + escapeHTML(ft.links) + '</span>';
  }
}

function renderIsland() {
  var el = document.getElementById('islandNav');
  if (!el) return;
  el.innerHTML = CONTENT.island.map(function (item) {
    return '<a href="' + navHref(item.href) + '"' + (item.highlight ? ' class="hi"' : '') + '>' + escapeHTML(item.label) + '</a>';
  }).join('');
}

/* ---------------------------------------------------------- */
/* Interactions (event delegation)                             */
/* ---------------------------------------------------------- */

function wireMenuChips() {
  var chips = document.getElementById('menuChips');
  if (!chips) return;
  chips.addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    chips.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('on'); });
    chip.classList.add('on');
    // NOTE: visual state only. For real filtering, add a "category" field
    // to each item in content.js and show/hide .row elements here.
  });
}

/* ---------------------------------------------------------- */
/* Vinyl music player                                          */
/* ---------------------------------------------------------- */

function initVinylPlayer() {
  var player = document.getElementById('vinylPlayer');
  if (!player) return;

  var playlist = CONTENT.playlist || [];
  if (!playlist.length) return;

  var audio = document.getElementById('vinylAudio');
  var discBtn = document.getElementById('vinylDisc');
  var playBtn = document.getElementById('vinylPlayBtn');
  var nextBtn = document.getElementById('vinylNextBtn');
  var prevBtn = document.getElementById('vinylPrevBtn');
  var titleEl = document.getElementById('vinylTitle');
  var artistEl = document.getElementById('vinylArtist');
  var labelEl = document.getElementById('vinylLabel');
  var statusEl = document.getElementById('vinylStatus');

  var index = 0;
  var isPlaying = false;

  function setStatus(msg) {
    if (statusEl) statusEl.textContent = msg || '';
  }

  function loadTrack(i) {
    index = (i + playlist.length) % playlist.length;
    var track = playlist[index];
    audio.src = track.src;
    titleEl.textContent = track.title;
    artistEl.textContent = track.artist;
    labelEl.innerHTML = track.cover
      ? '<img src="' + track.cover + '" alt="">'
      : '<span class="fallback">' + (index + 1) + '</span>';
    setStatus('');
  }

  function updatePlayIcon() {
    playBtn.innerHTML = isPlaying
      ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
  }

  function play() {
    var playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(function () {
        isPlaying = true;
        player.classList.add('playing', 'open');
        updatePlayIcon();
      }).catch(function (err) {
        // Most commonly: the browser blocked autoplay (needs a click — which
        // this already is), or the audio file itself failed to load (wrong
        // filename/path in content.js, or an unsupported format).
        isPlaying = false;
        player.classList.remove('playing');
        updatePlayIcon();
        console.warn('KefiYo vinyl player: could not play track.', err);
        setStatus('Can\u2019t play this track — check the file exists at ' + audio.src);
      });
    }
  }

  function pause() {
    audio.pause();
    isPlaying = false;
    player.classList.remove('playing');
    updatePlayIcon();
  }

  function togglePlay() {
    if (isPlaying) { pause(); } else { play(); }
  }

  audio.addEventListener('error', function () {
    setStatus('Track file not found: ' + audio.src);
  });

  discBtn.addEventListener('click', function () {
    if (player.classList.contains('open')) {
      // Already open — close the panel and stop playback.
      pause();
      player.classList.remove('open');
    } else {
      // Closed — open the panel and start playback.
      player.classList.add('open');
      play();
    }
  });
  playBtn.addEventListener('click', togglePlay);
  nextBtn.addEventListener('click', function () { loadTrack(index + 1); if (isPlaying) play(); });
  prevBtn.addEventListener('click', function () { loadTrack(index - 1); if (isPlaying) play(); });
  audio.addEventListener('ended', function () { loadTrack(index + 1); play(); });

  loadTrack(0);
}

/* ---------------------------------------------------------- */
/* Full menu page (menu.html only — MENU_PAGE_CONTENT comes     */
/* from menu-content.js, only loaded on that page)              */
/* ---------------------------------------------------------- */

function renderFullMenuPage() {
  var heroEl = document.getElementById('fullMenuHero');
  var sectionsEl = document.getElementById('fullMenuSections');
  if (typeof MENU_PAGE_CONTENT === 'undefined' || (!heroEl && !sectionsEl)) return;

  var m = MENU_PAGE_CONTENT;

  if (heroEl) {
    heroEl.innerHTML =
      '<span class="eyebrow">' + escapeHTML(m.hero.eyebrow) + '</span>' +
      '<h1>' + escapeHTML(m.hero.heading) + '</h1>' +
      '<p class="lede" style="text-align:center">' + escapeHTML(m.hero.lede) + '</p>';
  }

  if (sectionsEl) {
    sectionsEl.innerHTML = m.categories.map(function (cat) {
      var rows = cat.items.map(function (row) {
        var badge = row.badge ? '<span class="badge">' + escapeHTML(row.badge) + '</span>' : '';
        return '<div class="row"><div><h4>' + escapeHTML(row.name) + badge + '</h4>' +
          '<span>' + escapeHTML(row.desc) + '</span></div>' +
          '<div class="price">' + escapeHTML(row.price) + '</div></div>';
      }).join('');
      return '<div class="menu-category">' +
        '<div class="menu-category-head">' + (CHIP_ICONS[cat.icon] || '') + '<h3>' + escapeHTML(cat.name) + '</h3></div>' +
        '<div class="menu">' + rows + '</div>' +
        '</div>';
    }).join('');
  }
}

/* ---------------------------------------------------------- */
/* SEO structured data (schema.org, injected as JSON-LD)        */
/* ---------------------------------------------------------- */

function renderBusinessSchema() {
  var b = CONTENT.business;
  if (!b) return;
  var data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": b.name,
    "description": b.description,
    "image": b.siteUrl + b.logo,
    "url": b.siteUrl,
    "priceRange": b.priceRange,
    "servesCuisine": ["Frozen Yogurt", "Açaí", "Matcha", "Smoothies"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": b.streetAddress,
      "addressLocality": b.city,
      "postalCode": b.postalCode,
      "addressCountry": b.country
    },
    "openingHours": b.openingHours
  };
  if (b.phone) data.telephone = b.phone;

  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function renderMenuSchema() {
  if (typeof MENU_PAGE_CONTENT === 'undefined') return;
  var b = CONTENT.business || {};
  var data = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "KefiYo Menu",
    "hasMenuSection": MENU_PAGE_CONTENT.categories.map(function (cat) {
      return {
        "@type": "MenuSection",
        "name": cat.name,
        "hasMenuItem": cat.items.map(function (item) {
          return {
            "@type": "MenuItem",
            "name": item.name,
            "description": item.desc,
            "offers": {
              "@type": "Offer",
              "price": (item.price || '').replace(/[^\d.]/g, ''),
              "priceCurrency": "GBP"
            }
          };
        })
      };
    })
  };

  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/* ---------------------------------------------------------- */
/* Boot                                                         */
/* ---------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
  renderNav();
  renderHero();
  renderFlavours();
  renderStory();
  renderMenu();
  renderInstagram();
  renderGift();
  renderFinal();
  renderIsland();
  renderFullMenuPage();
  renderBusinessSchema();
  renderMenuSchema();

  wireMenuChips();
  initVinylPlayer();
});
