/* ============================================================
   KefiYo — CONTENT
   ============================================================
   Everything you'd normally want to edit — headings, menu items,
   prices, gift card values, footer text — lives in this one file.

   You should NOT need to open index.html or style.css to:
     - change a price
     - add/remove a menu item
     - edit any heading, paragraph, or button label
     - reorder the flavour cards
     - update the footer or address

   Just edit the values below (the text inside quotes " " ),
   save, and refresh the page. Don't remove commas, quotes, or
   curly braces { } — those hold the structure together.
   ============================================================ */

var CONTENT = {

  /* ---------- Header / navigation ---------- */
  nav: {
    logoAlt: "KefiYo",
    links: [
      { label: "Flavours", href: "index.html#flavours" },
      { label: "Menu", href: "menu.html" },
      { label: "Events", href: "events.html" },
      { label: "Our Story", href: "index.html#story" },
      { label: "Gift Cards", href: "index.html#gift" }
    ],
    /* NOTE: this must match gift.checkoutUrl below — both point to the
       same Square checkout, kept in two places since content.js is a
       plain object (can't reference one field from another). */
    cta: { label: "Buy a gift card", href: "https://app.squareup.com/gift/MLXHPN5GPT744/order" }
  },

  /* ---------- Hero (top banner) ---------- */
  hero: {
    eyebrow: "Frozen Yogurt · Açaí · Matcha · Coffee",
    headingBefore: "Where everyday tastes ",
    headingHighlight: "a little better",
    lede: "Light, fresh and made to order. \nSwirled, topped and taken slowly.",
    buttons: [
      { label: "See the menu", href: "#menu", style: "btn" },
      { label: "Gift a swirl", href: "#gift", style: "btn ghost" }
    ],
    pills: [
      { text: "Made fresh daily", className: "fp1" },
      { text: "Say hi 👋 Leeds", className: "fp2" }
    ],
    strip: ["Live cultures", "Vegan options", "Ceremonial matcha", "No bad days"]
  },

  /* ---------- Flavours (4 cards) ---------- */
  flavours: {
    eyebrow: "The line-up",
    heading: "Four ways to swirl",
    lede: "A short menu, done properly. \nRotating specials every week.",
    items: [
      {
        tag: "Classic", tagClass: "t1",
        image: "assets/images/flavour-original.jpg", alt: "Frozen yogurt",
        title: "Frozen Yogurt",
        desc: "Swirled your way, with something for every kind of craving — classic or vegan."
      },
      {
        tag: "Fruit", tagClass: "t2",
        image: "assets/images/flavour-acai.jpg", alt: "Açaí bowl",
        title: "Açaí Bowls",
        desc: "Deep purple base, fruit, granola, honey drizzle."
      },
      {
        tag: "Ceremonial", tagClass: "t3",
        image: "assets/images/flavour-matcha.jpg", alt: "Matcha",
        title: "Matcha",
        desc: "Ceremonial grade, iced or hot, softly sweet."
      },
      {
        tag: "Roasted", tagClass: "t4",
        image: "assets/images/flavour-coffee.jpg", alt: "Coffee",
        title: "Coffee",
        desc: "House espresso, hot or iced, with your choice of syrup."
      }
    ]
  },

  /* ---------- "Why KefiYo" story band ---------- */
  story: {
    eyebrow: "Why KefiYo",
    heading: "No bad days. Just badly needed KefiYo.",
    lede: "Kefi means good spirits — the joy you feel when something simple is done well. That's the whole idea behind the counter.",
    video: "assets/videos/story-video.mp4",
    points: [
      { number: "01", text: "Made with real Kefir yogurt, packed with protein and billions of live cultures." },
      { number: "02", text: "Toppings prepped fresh each morning in-store." },
      { number: "03", text: "Built for lingering — good light, good seats." }
    ]
  },

  /* ---------- Menu ---------- */
  /* This is the one you'll edit most often. To add an item, copy a whole
     { ... } block below (including the commas around it) and change the
     values. To remove an item, delete its whole { ... } block.
     "badge" is optional — remove the line entirely if an item has no badge.
     "category" must match one of the chip "icon" values below (froyo,
     acai, matcha, coffee) — it's what the filter tabs use to show/hide
     items when clicked. An item with no matching category just won't
     show up under any tab. */
  menu: {
    eyebrow: "Full menu",
    heading: "Everything on the counter",
    chips: [
      { label: "Froyo", icon: "froyo" },
      { label: "Açaí", icon: "acai" },
      { label: "Matcha", icon: "matcha" },
      { label: "Coffee", icon: "coffee" }
    ],
    items: [
      /* Froyo */
      { name: "Frozen Yogurt", desc: "Small cup, unlimited toppings", price: "£4.49", category: "froyo" },
      { name: "Medium Cup", desc: "Unlimited toppings", price: "£5.49", category: "froyo" },
      { name: "Large Cup", desc: "Unlimited toppings", price: "£6.49", category: "froyo" },
      { name: "Vegan Flavour of the Week", desc: "Mix Berry", price: "+£0.49", category: "froyo" },
      { name: "Premium Drips", desc: "Nutella, peanut butter, salted caramel & more", price: "+£0.49", category: "froyo" },
      /* Açaí */
      { name: "Amazon Energy", badge: "Most loved", desc: "Açaí, banana, mixed berries, granola", price: "£6.99", category: "acai" },
      { name: "The Chill Berry", desc: "Açaí, granola, strawberry, raspberry, goji berry", price: "£6.99", category: "acai" },
      { name: "Tropical Bliss", desc: "Açaí, mango, banana, kiwi, passion fruit", price: "£6.99", category: "acai" },
      { name: "Build Your Own", desc: "Pick a base, 4 toppings, and a sauce", price: "£6.99", category: "acai" },
      { name: "Superfoods", desc: "Chia seeds, goji berry, bee pollen & more", price: "+£0.49", category: "acai" },
      /* Matcha */
      { name: "Matcha", desc: "Ceremonial grade, hot", price: "£3.90", category: "matcha" },
      { name: "Vanilla Matcha", desc: "Ceremonial grade, vanilla", price: "£4.00", category: "matcha" },
      { name: "Iced Matcha", desc: "Ceremonial grade, oat or dairy milk", price: "£4.50", category: "matcha" },
      { name: "Iced Strawberry Matcha", desc: "Ceremonial grade, strawberry", price: "£4.50", category: "matcha" },
      { name: "Iced Salted Caramel Matcha", desc: "Ceremonial grade, salted caramel", price: "£4.75", category: "matcha" },
      /* Coffee */
      { name: "Espresso", desc: "House espresso", price: "£2.00", category: "coffee" },
      { name: "Americano", desc: "House espresso, hot water", price: "£2.90", category: "coffee" },
      { name: "Flat White", desc: "House espresso, silky micro-foam", price: "£3.50", category: "coffee" },
      { name: "Cappuccino", desc: "House espresso, steamed milk", price: "£3.70", category: "coffee" },
      { name: "Iced Caramel Macchiato", desc: "House espresso, caramel, cold milk", price: "£3.90", category: "coffee" }
    ],
    footerButton: { label: "View the full menu page", href: "menu.html" }
  },

  /* ---------- Instagram grid ---------- */
  instagram: {
    eyebrow: "@kefiyo",
    heading: "Seen in Leeds",
    sticker: "Come say hi 👋",
    url: "https://instagram.com/kefi.yo",
    followLabel: "Follow us on Instagram",
    videos: [
      "assets/videos/instagram-1.mp4",
      "assets/videos/instagram-2.mp4",
      "assets/videos/instagram-3.mp4",
      "assets/videos/instagram-4.mp4"
    ]
  },

  /* ---------- Gift card ---------- */
  /* Gift purchases happen on an external checkout (Square) — this section
     is just a simple "buy" button, not a value picker. To change where it
     sends people, update checkoutUrl below.

     "images" are the actual gift card artwork the client provides — drop
     the files into assets/images/ with these names (or your own — just
     update the paths below to match) and they'll display side by side
     on the card face. Add or remove lines to show more/fewer designs;
     leave the array empty ( images: [] ) to fall back to the plain
     logo + label placeholder instead. */
  gift: {
    eyebrow: "New",
    heading: "Give a good mood",
    desc: "Digital gift cards, delivered by email in seconds. Choose your own amount at checkout — spend it on anything at the counter.",
    checkoutUrl: "https://app.squareup.com/gift/MLXHPN5GPT744/order",
    buttonLabel: "Buy a gift card",
    cardLabel: "KefiYo Gift Card",
    images: [
      { src: "assets/images/gift-card-1.jpg", alt: "KefiYo gift card design" },
      { src: "assets/images/gift-card-2.jpg", alt: "KefiYo gift card design" }
    ]
  },

  /* ---------- Final call-to-action ---------- */
  final: {
    eyebrow: "Come say hi",
    heading: "Your main-character moment is one swirl away",
    address: "17 Ash Rd, Headingley, Leeds LS6 3JJ · Open daily 11am – 9pm",
    button: { label: "Get directions", href: "https://maps.app.goo.gl/3xj619SGTdadP82F9" }
  },

  /* ---------- Business info (used for SEO structured data — ---------- */
  /* this doesn't show up as visible text, it's what lets Google show
     your hours/address/phone directly in search results) */
  business: {
    name: "KefiYo",
    description: "Frozen yogurt, açaí, matcha and coffee counter in Leeds. Fresh daily, vegan options, live cultures.",
    streetAddress: "17 Ash Rd, Headingley",
    city: "Leeds",
    postalCode: "LS6 3JJ",
    country: "GB",
    phone: "+447568657433",
    priceRange: "££",
    openingHours: "Mo-Su 11:00-21:00",
    logo: "assets/images/logo.png",
    siteUrl: "https://www.kefiyo.com/",
    /* Used for the "Find out more" buttons on the Events page. Digits
       only, country code first, no +, no spaces or dashes — e.g. a UK
       number 07123 456789 becomes "447123456789". Leave blank and those
       buttons just won't have anywhere to send people. */
    whatsapp: "447568657433"
  },

  /* ---------- Footer ---------- */
  /* The two footer links (Instagram, Contact) aren't set here — they're
     built automatically from instagram.url above and business.whatsapp,
     so there's nothing to duplicate or keep in sync. */
  footer: {
    copyright: "© KefiYo 2026"
  },

  /* ---------- Mobile floating nav (bottom pill) ---------- */
  island: [
    { label: "Menu", href: "menu.html" },
    { label: "Flavours", href: "index.html#flavours" },
    { label: "Events", href: "events.html" },
    /* NOTE: must match gift.checkoutUrl / nav.cta.href above */
    { label: "Gift card", href: "https://app.squareup.com/gift/MLXHPN5GPT744/order", highlight: true }
  ],

  /* ---------- Vinyl music player playlist ---------- */
  /* Add MP3 files to assets/audio/ and list them here.
     "cover" is optional — leave "" for a plain numbered label. */
  playlist: [
    { title: "Spin the Swirl", artist: "KefiYo Radio", src: "assets/audio/track-1.mp3", cover: "" },
    { title: "Açaí Contact", artist: "KefiYo Radio", src: "assets/audio/track-2.mp3", cover: "" },
    { title: "Matcha Made in Heaven", artist: "KefiYo Radio", src: "assets/audio/track-3.mp3", cover: "" }
  ]

};
