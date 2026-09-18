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
    .replace(/>/g, '&gt;')
    // A literal newline (\n) in any content.js/menu-content.js text field
    // becomes a real line break here. This is the ONLY way to force a
    // line break — typing <br> directly would just show up as the literal
    // text "<br>" on the page, since everything else gets escaped above.
    .replace(/\n/g, '<br>');
}

/* Used for menu/event row descriptions specifically. Same escaping as
   above, but if the text contains "Step 1:", "Step 2:" etc (like the
   Açaí "Build Your Own" description), each step automatically gets its
   own line and a bold label — no need to manually add line breaks for
   this in content.js/menu-content.js, it's detected automatically. */
function formatRowDesc(str) {
  var escaped = escapeHTML(str);
  return escaped
    .replace(/(Step \d+:)/g, '<br><strong>$1</strong>')
    .replace(/^(<br>)+/, '');
}

var CHIP_ICONS = {
  froyo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 0-5.2 2-5.2 4.5S9 12 12 12s5.2-2 5.2-4.5S15 3 12 3Z"/><path d="M8.3 12c-.3 4 1.6 7.7 3.7 9 2.1-1.3 4-5 3.7-9"/></svg>',
  acai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h16a8 8 0 0 1-16 0Z"/><circle cx="9" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="6.3" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="8" r="1" fill="currentColor" stroke="none"/></svg>',
  matcha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h11v6a5.5 5.5 0 0 1-5.5 5.5h-0a5.5 5.5 0 0 1-5.5-5.5V8Z"/><path d="M16 9.2h1.3a2.3 2.3 0 0 1 0 4.6H16"/><path d="M9.3 8c-.2-1.8.8-2.9 2.5-3.7-.2 1.8-.9 2.9-2.5 3.7Z" fill="currentColor" stroke="none"/></svg>',
  coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9Z"/><path d="M16 10h1.5a2.3 2.3 0 0 1 0 4.6H16"/><path d="M8 5c0 1-.9 1.2-.9 2.2S8 8.4 8 8.4M11.5 5c0 1-.9 1.2-.9 2.2s.9 1.2.9 2.2M15 5c0 1-.9 1.2-.9 2.2s.9 1.2.9 2.2"/></svg>',
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

/* External links (e.g. the Square gift card checkout, Google Maps)
   should open in a new tab rather than navigating away from the site. */
function isExternal(href) {
  return /^https?:\/\//.test(href);
}
function externalAttrs(href) {
  return isExternal(href) ? ' target="_blank" rel="noopener"' : '';
}

/* Renders either a single "price" string, or a "sizes" array like
   [{ label: "Medium", price: "£6.99" }, { label: "Large", price: "£7.99" }]
   as two (or more) stacked size/price lines within the same price slot —
   used for items that come in more than one size, e.g. Flavour of the Day. */
function renderPriceSlot(row) {
  if (row.sizes && row.sizes.length) {
    return '<div class="row-sizes">' + row.sizes.map(function (s) {
      return '<div class="size-line"><span class="size-label">' + escapeHTML(s.label) + '</span><span class="size-price">' + escapeHTML(s.price) + '</span></div>';
    }).join('') + '</div>';
  }
  return row.price ? '<div class="price">' + escapeHTML(row.price) + '</div>' : '<div class="price"></div>';
}

/* Renders one menu row's inner markup (badge, description, flavour-tag
   pills, price or stacked sizes, highlight styling). Shared between the
   homepage teaser menu and the full menu page so both can show the same
   item types (e.g. a tag list like "Flavours", or a multi-size item like
   "Kefiyo Special Flavour"). Pass withCategory = true to also stamp a
   data-category attribute for the homepage's chip filter. */
function renderMenuRow(row, withCategory) {
  var badge = row.badge ? '<span class="badge">' + escapeHTML(row.badge) + '</span>' : '';
  var desc = row.desc ? '<span>' + formatRowDesc(row.desc) + '</span>' : '';
  var tags = row.tags && row.tags.length
    ? '<div class="flavour-tags">' + row.tags.map(function (t) {
        return '<span class="flavour-tag">' + escapeHTML(t) + '</span>';
      }).join('') + '</div>'
    : '';
  var priceSlot = renderPriceSlot(row);
  var rowClass = row.highlight ? 'row row-highlight' : 'row';
  var catAttr = withCategory ? ' data-category="' + escapeHTML(row.category || '') + '"' : '';
  return '<div class="' + rowClass + '"' + catAttr + '><div><h4>' + escapeHTML(row.name) + badge + '</h4>' + desc + tags + '</div>' + priceSlot + '</div>';
}

/* ---------------------------------------------------------- */
/* Render functions — one per section                          */
/* ---------------------------------------------------------- */

function renderNav() {
  var linksEl = document.getElementById('navLinks');
  var ctaEl = document.getElementById('navCta');
  if (linksEl) {
    linksEl.innerHTML = CONTENT.nav.links.map(function (l) {
      var href = navHref(l.href);
      return '<a href="' + href + '"' + externalAttrs(href) + '>' + escapeHTML(l.label) + '</a>';
    }).join('');
  }
  if (ctaEl) {
    var ctaHref = navHref(CONTENT.nav.cta.href);
    ctaEl.href = ctaHref;
    ctaEl.textContent = CONTENT.nav.cta.label;
    if (isExternal(ctaHref)) {
      ctaEl.target = '_blank';
      ctaEl.rel = 'noopener';
    }
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
  if (video) video.dataset.src = s.video;
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
      return '<span class="chip' + (i === 0 ? ' on' : '') + '" data-category="' + escapeHTML(c.icon) + '">' +
        (CHIP_ICONS[c.icon] || '') +
        escapeHTML(c.label) +
        '</span>';
    }).join('');
  }
  if (items) {
    items.innerHTML = m.items.map(function (row) {
      return renderMenuRow(row, true);
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
      return '<div><video class="lazy-video" muted loop playsinline preload="none" data-src="' + src + '"></video></div>';
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

  var hasImages = g.images && g.images.length > 0;
  var cardArtHTML;

  if (hasImages && g.images.length > 1) {
    cardArtHTML =
      '<div class="cardart cardart-slider" id="giftSlider">' +
      '<div class="cardart-slides">' +
      g.images.map(function (img, i) {
        return '<img src="' + img.src + '" alt="' + escapeHTML(img.alt || 'KefiYo gift card') + '" loading="lazy"' + (i === 0 ? ' class="active"' : '') + '>';
      }).join('') +
      '</div>' +
      '<button type="button" class="cardart-nav prev" aria-label="Previous design">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>' +
      '</button>' +
      '<button type="button" class="cardart-nav next" aria-label="Next design">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>' +
      '</button>' +
      '<div class="cardart-dots">' +
      g.images.map(function (_, i) {
        return '<span class="dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '" aria-label="Design ' + (i + 1) + '"></span>';
      }).join('') +
      '</div>' +
      '</div>';
  } else if (hasImages) {
    cardArtHTML = '<div class="cardart cardart-images"><img src="' + g.images[0].src + '" alt="' + escapeHTML(g.images[0].alt || 'KefiYo gift card') + '" loading="lazy"></div>';
  } else {
    cardArtHTML = '<div class="cardart"><img class="cardart-logo" src="assets/images/logo.png" alt="KefiYo"><span class="amt">' + escapeHTML(g.cardLabel) + '</span></div>';
  }

  el.innerHTML =
    '<div>' +
    '<span class="eyebrow" style="color:var(--matcha)">' + escapeHTML(g.eyebrow) + '</span>' +
    '<h2 style="margin:12px 0 16px">' + escapeHTML(g.heading) + '</h2>' +
    '<p>' + escapeHTML(g.desc) + '</p>' +
    '<a href="' + g.checkoutUrl + '" target="_blank" rel="noopener" class="btn giftbtn">' + escapeHTML(g.buttonLabel) + '</a>' +
    '</div>' +
    cardArtHTML;
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
      '<a href="' + f.button.href + '"' + externalAttrs(f.button.href) + ' class="btn">' + escapeHTML(f.button.label) + '</a>';
  }
  if (footer) {
    var igUrl = CONTENT.instagram && CONTENT.instagram.url;
    var ttUrl = CONTENT.tiktok && CONTENT.tiktok.url;
    var whatsapp = CONTENT.business && CONTENT.business.whatsapp;
    var contactHref = whatsapp
      ? ('https://wa.me/' + whatsapp + '?text=' + encodeURIComponent('Hi, I have a question for KefiYo'))
      : '#';
    footer.innerHTML =
      '<span>' + escapeHTML(ft.copyright) + '</span>' +
      '<div class="footer-links">' +
      (igUrl ? '<a href="' + igUrl + '" target="_blank" rel="noopener">Instagram</a>' : '') +
      (ttUrl ? '<a href="' + ttUrl + '" target="_blank" rel="noopener">TikTok</a>' : '') +
      '<a href="' + contactHref + '" target="_blank" rel="noopener">Contact</a>' +
      '</div>';
  }
}

function renderIsland() {
  var el = document.getElementById('islandNav');
  if (!el) return;
  el.innerHTML = CONTENT.island.map(function (item) {
    var href = navHref(item.href);
    return '<a href="' + href + '"' + externalAttrs(href) + (item.highlight ? ' class="hi"' : '') + '>' + escapeHTML(item.label) + '</a>';
  }).join('');
}

/* ---------------------------------------------------------- */
/* Full menu page (menu.html only — MENU_PAGE_CONTENT comes     */
/* from menu-content.js, only loaded on that page)              */
/* ---------------------------------------------------------- */

function renderFullMenuPage() {
  var heroEl = document.getElementById('fullMenuHero');
  var sectionsEl = document.getElementById('fullMenuSections');
  var allergyEl = document.getElementById('menuAllergyNote');
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
      var note = cat.note ? '<p class="lede" style="margin-bottom:20px">' + escapeHTML(cat.note) + '</p>' : '';
      var rows = cat.items.map(function (row) {
        return renderMenuRow(row, false);
      }).join('');
      return '<div class="menu-category">' +
        '<div class="menu-category-head">' + (CHIP_ICONS[cat.icon] || '') + '<h3>' + escapeHTML(cat.name) + '</h3></div>' +
        note +
        '<div class="menu">' + rows + '</div>' +
        '</div>';
    }).join('');
  }

  if (allergyEl && m.allergyNote) {
    allergyEl.innerHTML = '<p class="lede" style="max-width:none;text-align:center;margin:0 auto">' + escapeHTML(m.allergyNote) + '</p>';
  }
}

/* ---------------------------------------------------------- */
/* Events page (events.html only — EVENTS_PAGE_CONTENT comes    */
/* from events-content.js, only loaded on that page)            */
/* ---------------------------------------------------------- */

function renderEventsPage() {
  var heroEl = document.getElementById('eventsHero');
  var filterEl = document.getElementById('eventsFilter');
  var listEl = document.getElementById('eventsList');
  if (typeof EVENTS_PAGE_CONTENT === 'undefined' || (!heroEl && !listEl)) return;

  var ev = EVENTS_PAGE_CONTENT;
  var whatsapp = (CONTENT.business && CONTENT.business.whatsapp) || '';

  if (heroEl) {
    heroEl.innerHTML =
      '<span class="eyebrow">' + escapeHTML(ev.hero.eyebrow) + '</span>' +
      '<h1>' + escapeHTML(ev.hero.heading) + '</h1>' +
      '<p class="lede" style="text-align:center">' + escapeHTML(ev.hero.lede) + '</p>';
  }

  var months = [];
  ev.events.forEach(function (e) {
    if (e.month && months.indexOf(e.month) === -1) months.push(e.month);
  });

  if (filterEl) {
    filterEl.innerHTML = '<span class="chip on" data-month="all">All</span>' +
      months.map(function (m) {
        return '<span class="chip" data-month="' + escapeHTML(m) + '">' + escapeHTML(m) + '</span>';
      }).join('');
  }

  if (listEl) {
    listEl.innerHTML = ev.events.map(function (e) {
      var message = 'Hi, I would like to find out about ' + e.name;
      var waLink = whatsapp ? ('https://wa.me/' + whatsapp + '?text=' + encodeURIComponent(message)) : '#';
      var cost = e.cost ? '<span class="price">' + escapeHTML(e.cost) + '</span>' : '';
      var desc = e.desc ? '<p class="event-desc">' + formatRowDesc(e.desc) + '</p>' : '';
      var hasAsset = !!e.asset;
      var isVideo = hasAsset && /\.(mp4|webm|mov|m4v)$/i.test(e.asset);
      var media = hasAsset
        ? '<div class="event-card-media">' +
          (isVideo
            ? '<video class="lazy-video" muted loop playsinline preload="none" data-src="' + e.asset + '"></video>'
            : '<img src="' + e.asset + '" alt="' + escapeHTML(e.name) + '" loading="lazy">') +
          '</div>'
        : '';
      return '<article class="event-card" data-month="' + escapeHTML(e.month || '') + '">' +
        media +
        '<div class="event-card-body">' +
        '<div class="event-card-top"><h3>' + escapeHTML(e.name) + '</h3>' + cost + '</div>' +
        '<div class="event-meta">' + escapeHTML(e.date) + ' · ' + escapeHTML(e.time) + ' · ' + escapeHTML(e.venue) + '</div>' +
        desc +
        '<a href="' + waLink + '" target="_blank" rel="noopener" class="btn event-cta">Find out more</a>' +
        '</div>' +
        '</article>';
    }).join('');
  }
}

function wireEventsFilter() {
  var filterEl = document.getElementById('eventsFilter');
  var listEl = document.getElementById('eventsList');
  if (!filterEl || !listEl) return;
  filterEl.addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    filterEl.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('on'); });
    chip.classList.add('on');
    var month = chip.dataset.month;
    listEl.querySelectorAll('.event-card').forEach(function (row) {
      var match = month === 'all' || row.dataset.month === month;
      row.classList.toggle('is-hidden', !match);
    });
  });
}

/* ---------------------------------------------------------- */
/* Interactions (event delegation)                             */
/* ---------------------------------------------------------- */

function applyMenuFilter(category) {
  var items = document.getElementById('menuItems');
  if (!items) return;
  items.querySelectorAll('.row').forEach(function (row) {
    var match = !category || row.dataset.category === category;
    row.classList.toggle('is-hidden', !match);
  });
}

function wireMenuChips() {
  var chips = document.getElementById('menuChips');
  if (!chips) return;
  chips.addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    chips.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('on'); });
    chip.classList.add('on');
    applyMenuFilter(chip.dataset.category);
  });
  var initial = chips.querySelector('.chip.on');
  if (initial) applyMenuFilter(initial.dataset.category);
}

/* ---------------------------------------------------------- */
/* Gift card image slider (only active when 2+ images given)   */
/* ---------------------------------------------------------- */

function wireGiftSlider() {
  var slider = document.getElementById('giftSlider');
  if (!slider) return;

  var slides = slider.querySelectorAll('.cardart-slides img');
  var dots = slider.querySelectorAll('.dot');
  var index = 0;

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach(function (s, n) { s.classList.toggle('active', n === index); });
    dots.forEach(function (d, n) { d.classList.toggle('active', n === index); });
  }

  var prevBtn = slider.querySelector('.cardart-nav.prev');
  var nextBtn = slider.querySelector('.cardart-nav.next');
  if (prevBtn) prevBtn.addEventListener('click', function () { goTo(index - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goTo(index + 1); });

  dots.forEach(function (dot, n) {
    dot.addEventListener('click', function () { goTo(n); });
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
      pause();
      player.classList.remove('open');
    } else {
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
/* Lazy-load below-the-fold videos                              */
/* ---------------------------------------------------------- */
/* Videos marked class="lazy-video" with a data-src (instead of
   src) don't download or play until they're about to scroll into
   view. This is the single biggest lever for page-load speed on a
   site with several autoplaying videos — without it, every video
   on the page starts downloading at once, regardless of whether
   the visitor ever scrolls far enough to see it. */

function initLazyVideos() {
  var videos = document.querySelectorAll('.lazy-video[data-src]');
  if (!videos.length) return;

  if (!('IntersectionObserver' in window)) {
    videos.forEach(function (v) { v.src = v.dataset.src; v.play().catch(function () {}); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var v = entry.target;
      v.src = v.dataset.src;
      v.play().catch(function () {});
      observer.unobserve(v);
    });
  }, { rootMargin: '200px 0px' });

  videos.forEach(function (v) { observer.observe(v); });
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
    "servesCuisine": ["Frozen Yogurt", "Açaí", "Matcha", "Coffee"],
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
  var data = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "KefiYo Menu",
    "hasMenuSection": MENU_PAGE_CONTENT.categories.map(function (cat) {
      return {
        "@type": "MenuSection",
        "name": cat.name,
        "hasMenuItem": cat.items.map(function (item) {
          var priceText = item.price || (item.sizes && item.sizes[0] && item.sizes[0].price) || '';
          return {
            "@type": "MenuItem",
            "name": item.name,
            "description": item.desc || '',
            "offers": {
              "@type": "Offer",
              "price": priceText.replace(/[^\d.]/g, ''),
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
  renderEventsPage();
  renderBusinessSchema();
  renderMenuSchema();

  wireMenuChips();
  wireEventsFilter();
  wireGiftSlider();
  initLazyVideos();
  initVinylPlayer();
});
