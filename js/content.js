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
    eyebrow: "Frozen yogurt · Açaí · Matcha · Leeds",
    headingBefore: "Where everyday tastes ",
    headingHighlight: "a little better",
    lede: "Light, fresh and made to order. Swirled, topped and taken slowly.",
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
    lede: "A short menu, done properly. Rotating specials every week.",
    items: [
      {
        tag: "Classic", tagClass: "t1",
        image: "assets/images/flavour-original.jpg", alt: "Original frozen yogurt",
        title: "Original Froyo",
        desc: "Tangy, live-cultured and lighter than ice cream."
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
        tag: "Plant-based", tagClass: "t4",
        image: "assets/images/flavour-vegan.jpg", alt: "Vegan froyo",
        title: "Vegan & Smoothies",
        desc: "Coconut base swirls and blended fruit cups."
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
      { number: "01", text: "Real yogurt, live cultures, nothing artificial." },
      { number: "02", text: "Toppings prepped fresh each morning in-store." },
      { number: "03", text: "Built for lingering — good light, good seats." }
    ]
  },

  /* ---------- Menu ---------- */
  /* This is the one you'll edit most often. To add an item, copy a whole
     { ... } block below (including the commas around it) and change the
     values. To remove an item, delete its whole { ... } block.
     "badge" is optional — remove the line entirely if an item has no badge. */
  menu: {
    eyebrow: "Full menu",
    heading: "Everything on the counter",
    chips: [
      { label: "Froyo", icon: "froyo" },
      { label: "Açaí", icon: "acai" },
      { label: "Matcha & Coffee", icon: "matcha" },
      { label: "Smoothies", icon: "smoothie" },
      { label: "Toppings", icon: "toppings" }
    ],
    items: [
      { name: "Classic Swirl", desc: "Original froyo, two toppings", price: "£5.20" },
      { name: "Signature Bowl", badge: "Most loved", desc: "Froyo, fruit, granola, sauce", price: "£6.80" },
      { name: "Vegan Coconut Swirl", desc: "Dairy-free base, two toppings", price: "£5.60" },
      { name: "Açaí Bowl", desc: "Banana, berries, granola, honey", price: "£7.50" },
      { name: "Iced Matcha Latte", desc: "Ceremonial grade, oat or dairy", price: "£4.20" },
      { name: "Fruit Smoothie", desc: "Mango, berry or green", price: "£5.00" }
    ],
    footerButton: { label: "View the full menu page", href: "menu.html" }
  },

  /* ---------- Instagram grid ---------- */
  instagram: {
    eyebrow: "@kefiyo",
    heading: "Seen in Leeds",
    sticker: "Come say hi 👋",
    url: "https://instagram.com/kefiyo",
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
     sends people, update checkoutUrl below. */
  gift: {
    eyebrow: "New",
    heading: "Give a good mood",
    desc: "Digital gift cards, delivered by email in seconds. Choose your own amount at checkout — spend it on anything at the counter.",
    checkoutUrl: "https://app.squareup.com/gift/MLXHPN5GPT744/order",
    buttonLabel: "Buy a gift card",
    cardLabel: "KefiYo Gift Card"
  },

  /* ---------- Final call-to-action ---------- */
  final: {
    eyebrow: "Come say hi",
    heading: "Your main-character moment is one swirl away",
    address: "Merrion Street, Leeds · Open daily 11am – 9pm",
    button: { label: "Get directions", href: "#" }
  },

  /* ---------- Business info (used for SEO structured data — ---------- */
  /* this doesn't show up as visible text, it's what lets Google show
     your hours/address/phone directly in search results) */
  business: {
    name: "KefiYo",
    description: "Frozen yogurt, açaí and matcha counter in Leeds. Fresh daily, vegan options, live cultures.",
    streetAddress: "Merrion Street",
    city: "Leeds",
    postalCode: "",
    country: "GB",
    phone: "",
    priceRange: "££",
    openingHours: "Mo-Su 11:00-21:00",
    logo: "assets/images/logo.png",
    siteUrl: "https://www.kefiyo.co.uk/"
  },

  /* ---------- Footer ---------- */
  footer: {
    copyright: "© KefiYo 2026",
    links: "Instagram · TikTok · Contact"
  },

  /* ---------- Mobile floating nav (bottom pill) ---------- */
  island: [
    { label: "Menu", href: "menu.html" },
    { label: "Flavours", href: "index.html#flavours" },
    /* NOTE: must match gift.checkoutUrl / nav.cta.href above */
    { label: "Gift card", href: "https://app.squareup.com/gift/MLXHPN5GPT744/order", highlight: true }
  ],

  /* ---------- Vinyl music player playlist ---------- */
  /* Add MP3 files to assets/audio/ and list them here.
     "cover" is optional — leave "" for a plain numbered label. */
  playlist: [
    { title: "Track One", artist: "KefiYo Radio", src: "assets/audio/track-1.mp3", cover: "" },
    { title: "Track Two", artist: "KefiYo Radio", src: "assets/audio/track-2.mp3", cover: "" },
    { title: "Track Three", artist: "KefiYo Radio", src: "assets/audio/track-3.mp3", cover: "" }
  ]

};
