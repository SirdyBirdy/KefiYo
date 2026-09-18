/* ============================================================
   KefiYo — FULL MENU PAGE CONTENT
   ============================================================
   This powers menu.html only (not the homepage teaser, which is
   still edited in content.js). Add, remove, or reorder items by
   editing the arrays below — same rules as content.js:
     - keep the quotes " " around text
     - keep commas between items
     - "badge" and "desc" are optional — delete the whole line if
       an item doesn't need one
     - "tags" is an optional array — use it instead of "desc" to show
       a list of options as individual pills rather than one line of
       comma-separated text (used for things like the flavour list).
       e.g. tags: ["Coconut", "Mango", "Strawberry"]
     - "sizes" is an optional array of { label, price } pairs — use it
       instead of "price" when an item comes in more than one size,
       e.g. sizes: [{ label: "Medium", price: "£6.99" }, { label: "Large", price: "£7.99" }]
     - "highlight": true makes an item stand out with a colored
       callout instead of blending in with the rest of the list —
       use sparingly, for one-off specials like a flavour of the day
     - "note" (under each category name) is optional too
     - "icon" must be one of: froyo, acai, matcha, coffee, toppings
   ============================================================ */

var MENU_PAGE_CONTENT = {

  hero: {
    eyebrow: "Full menu",
    heading: "Everything on the counter",
    lede: "Every swirl, bowl and cup we make — with the same short, honest ingredient list on all of it."
  },

  categories: [
    {
      name: "Frozen Yogurt",
      icon: "froyo",
      note: "Creamy, tangy frozen yogurt — the KefiYo way.",
      items: [
        { name: "Flavours", tags: ["Natural", "Caramelised Banana", "Biscoff", "Tiramisu", "Rhubarb", "Mango"] },
        { name: "Kefiyo Special Flavour", desc: "Pistachio", sizes: [{ label: "Medium", price: "£6.99" }, { label: "Large", price: "£7.99" }], highlight: true },
        { name: "Vegan Flavour of the Week", tags: ["Coconut"], price: "+£0.49" },
        { name: "Small Cup", desc: "Unlimited toppings", price: "£4.49" },
        { name: "Medium Cup", desc: "Unlimited toppings", price: "£5.49" },
        { name: "Large Cup", desc: "Unlimited toppings", price: "£6.49" },
        { name: "Premium Drips", desc: "Nutella, Peanut Butter, Almond Butter, Salted Caramel, Agave Syrup, Honey, Frozen Yogurt, Pistachio", price: "+£0.49" },
        { name: "Dietary Notes", desc: "Gluten free and nut free options available. Contains soya." }
      ]
    },
    {
      name: "Açaí Bowls",
      icon: "acai",
      note: "Organic, vegan, gluten-free açaí — the KefiYo way. All açaí bowls come with 2 toppings and a sauce of your choice.",
      items: [
        { name: "Amazon Energy", desc: "Organic açaí, banana & mixed berries, granola, strawberry, blueberry, coconut flakes", price: "£6.99" },
        { name: "The Chill Berry", desc: "Organic açaí, granola, strawberry, raspberry, goji berry, almond butter", price: "£6.99" },
        { name: "Tropical Bliss", desc: "Organic açaí, mango & banana, kiwi, passion fruit, granola", price: "£6.99" },
        { name: "Build Your Own", desc: "Step 1: choose a base — cacao & coconut granola or plain granola. Step 2: choose 4 toppings from fruit & indulges. Step 3: choose 2 toppings sauce of your choice.", price: "£6.99" },
        { name: "Superfoods", desc: "Chia seeds, flax seeds, goji berry, bee pollen, cocoa nibs, pistachio", price: "+£0.49" }
      ]
    },
    {
      name: "Coffee & Hot Drinks",
      icon: "coffee",
      note: "High-quality coffee selections to keep you energised. Iced versions available.",
      items: [
        { name: "Espresso", price: "£2.00" },
        { name: "Double Espresso", price: "£2.50" },
        { name: "Americano", price: "£2.90" },
        { name: "Flat White", price: "£3.50" },
        { name: "Cappuccino", price: "£3.70" },
        { name: "Latte", price: "£3.70" },
        { name: "Iced Latte", price: "£3.70" },
        { name: "Iced Americano", price: "£3.50" },
        { name: "Iced Caramel Macchiato", price: "£3.90" }
      ]
    },
    {
      name: "Matcha",
      icon: "matcha",
      note: "Ceremonial grade Japanese matcha. Rich in antioxidants, promotes calm energy and focus.",
      items: [
        { name: "Matcha", price: "£3.90" },
        { name: "Vanilla Matcha", price: "£4.00" },
        { name: "Iced Matcha", price: "£4.50" },
        { name: "Iced Strawberry Matcha", price: "£4.50" },
        { name: "Iced Mango Matcha", price: "£4.50" },
        { name: "Iced Salted Caramel Matcha", price: "£4.75" },
        { name: "Iced Double Matcha", price: "£5.50" },
        { name: "Iced Coconut Matcha", price: "£4.50" },
        { name: "Cold Foam", desc: "Salted Caramel, Vanilla, or Matcha", price: "+£1.00" },
        { name: "Milk Options", desc: "Oat Milk or Whole Milk" }
      ]
    },
    {
      name: "Syrups & Add-ons",
      icon: "toppings",
      note: "Add to any coffee or matcha drink.",
      items: [
        { name: "Choose Your Syrup", desc: "Salted Caramel, Vanilla, Caramel, Hazelnut, Cinnamon, Butterscotch, Raspberry, Strawberry, Mango", price: "£1.00" }
      ]
    }
  ],

  /* Shown once at the bottom of the page, below every category. */
  allergyNote: "Please inform staff of any allergies. Nuts, dairy & gluten present in our kitchen. Allergens may contain traces."

};
