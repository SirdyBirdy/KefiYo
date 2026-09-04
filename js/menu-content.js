/* ============================================================
   KefiYo — FULL MENU PAGE CONTENT
   ============================================================
   This powers menu.html only (not the homepage teaser, which is
   still edited in content.js). Add, remove, or reorder items by
   editing the arrays below — same rules as content.js:
     - keep the quotes " " around text
     - keep commas between items
     - "badge" is optional, delete the whole line if not needed
     - "icon" must be one of: froyo, acai, matcha, smoothie, toppings
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
      items: [
        { name: "Classic Swirl", desc: "Original froyo, two toppings", price: "£5.20" },
        { name: "Signature Bowl", badge: "Most loved", desc: "Froyo, fruit, granola, sauce", price: "£6.80" },
        { name: "Vegan Coconut Swirl", desc: "Dairy-free base, two toppings", price: "£5.60" },
        { name: "Double Scoop", desc: "Two flavours, three toppings", price: "£7.20" },
        { name: "Kids Cup", desc: "Small cup, one topping", price: "£3.50" }
      ]
    },
    {
      name: "Açaí Bowls",
      icon: "acai",
      items: [
        { name: "Açaí Bowl", desc: "Banana, berries, granola, honey", price: "£7.50" },
        { name: "Tropical Açaí", desc: "Mango, pineapple, coconut flakes", price: "£7.80" },
        { name: "Peanut Butter Açaí", desc: "Peanut butter swirl, banana, cacao nibs", price: "£8.00" }
      ]
    },
    {
      name: "Matcha & Coffee",
      icon: "matcha",
      items: [
        { name: "Iced Matcha Latte", desc: "Ceremonial grade, oat or dairy", price: "£4.20" },
        { name: "Hot Matcha Latte", desc: "Ceremonial grade, oat or dairy", price: "£4.00" },
        { name: "Matcha Frappé", desc: "Blended, whipped cream, matcha dust", price: "£5.20" },
        { name: "Flat White", desc: "House espresso, steamed milk", price: "£3.60" },
        { name: "Iced Latte", desc: "House espresso, cold milk", price: "£3.80" }
      ]
    },
    {
      name: "Smoothies",
      icon: "smoothie",
      items: [
        { name: "Mango Smoothie", desc: "Mango, banana, orange juice", price: "£5.00" },
        { name: "Berry Smoothie", desc: "Mixed berries, banana, oat milk", price: "£5.00" },
        { name: "Green Smoothie", desc: "Spinach, apple, banana, ginger", price: "£5.20" }
      ]
    },
    {
      name: "Toppings",
      icon: "toppings",
      items: [
        { name: "Fresh Fruit", desc: "Strawberry, banana, mango, kiwi", price: "£0.80" },
        { name: "Granola", desc: "House-baked oat granola", price: "£0.70" },
        { name: "Sauce Drizzle", desc: "Honey, chocolate, or caramel", price: "£0.50" },
        { name: "Sprinkles & Crunch", desc: "Sprinkles, crushed cookies, or nuts", price: "£0.60" }
      ]
    }
  ]

};
