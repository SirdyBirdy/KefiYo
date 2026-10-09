/* ============================================================
   KefiYo — PRESS CONTENT
   ============================================================
   This powers the homepage "In the press" section AND press.html.
   Add a new piece of coverage by copying a whole { ... } line,
   pasting it at the TOP of the "items" list below (newest first —
   items show in exactly the order listed, nothing is auto-sorted),
   and changing the values. Keep the quotes " " and the commas.

   Fields per item:
     - outlet    (required) — who published it, e.g. "Business Insider"
     - type      (required) — "press" for news sites, magazines and
                  blogs; "social" for Instagram/TikTok creators. This
                  drives the filter tabs on the press page.
     - title     (press) — the headline. Leave out for social items.
     - note      (social) — a short detail line instead of a headline,
                  e.g. "Reel & 5 stories · 4k followers".
     - date      (required) — however you want it shown,
                  e.g. "8 October 2026"
     - featured  (optional) — add  featured: true  to show it on the
                  homepage. The FIRST featured item becomes the big
                  card; the next three featured items sit beside it.
                  Un-feature an old one by deleting that bit.
     - url       (required) — link to the article/post. Opens in a
                  new tab.
   ============================================================ */

var PRESS_CONTENT = {

  /* Homepage section */
  teaser: {
    eyebrow: "In the press",
    heading: "Leeds can't stop talking about us",
    lede: "From launch day to the giveaway, here's where KefiYo has been featured.",
    buttonLabel: "See all press coverage",
    href: "press.html"
  },

  /* press.html page header */
  hero: {
    eyebrow: "Press",
    heading: "KefiYo in the press",
    lede: "News, features and shout-outs from Leeds and beyond."
  },

  items: [
    { outlet: "Business Insider", type: "press", title: "KefiYo Launches Autumn Frozen Yoghurt Flavours Following Strong Leeds Opening", date: "8 October 2026", featured: true, url: "https://markets.businessinsider.com/news/currencies/kefiyo-launches-autumn-frozen-yoghurt-flavours-following-strong-leeds-opening-1036607692" },
    { outlet: "Life With Clauds", type: "social", note: "Instagram Reel", date: "6 October 2026", url: "https://www.instagram.com/reel/DeH5OCDAPSw/" },
    { outlet: "Life With Clauds (TikTok)", type: "social", note: "TikTok", date: "6 October 2026", url: "https://vm.tiktok.com/ZGdC6AfwY/" },
    { outlet: "Eat Wonky", type: "press", title: "A Student’s Guide to KefiYo: Frozen Yoghurt in Headingley", date: "28 September 2026", url: "https://eatwonky.com/a-students-guide-to-kefiyo-frozen-yoghurt-in-headingley/" },
    { outlet: "Just Foodie", type: "press", title: "Frozen Yoghurt in Leeds: How to Build Your KefiYo Bowl with Unlimited Standard Toppings", date: "28 September 2026", url: "https://justfoodle.com/frozen-yoghurt-in-leeds-how-to-build-your-kefiyo-bowl-with-unlimited-standard-toppings/" },
    { outlet: "Food for Dorks", type: "press", title: "Matcha and Frozen Yoghurt in Headingley: What to Try at KefiYo", date: "28 September 2026", url: "https://www.foodfordorks.com/matcha-and-frozen-yoghurt-in-headingley-what-to-try-at-kefiyo/" },
    { outlet: "TGG Food", type: "press", title: "KefiYo’s Autumn Frozen Yoghurt Menu in Leeds: Tiramisu, Apple Pie and More", date: "28 September 2026", url: "https://tggfood.com/kefiyos-autumn-frozen-yoghurt-menu-in-leeds-tiramisu-apple-pie-and-more/" },
    { outlet: "Yahoo", type: "press", title: "Leeds Froyo Brand KefiYo Goes Viral As Student Demand Fuels Smash Hit Launch", date: "25 September 2026", featured: true, url: "https://finance.yahoo.com/small-business/articles/leeds-froyo-brand-kefiyo-goes-145300044.html" },
    { outlet: "Eat Mug", type: "press", title: "Autumn Gets a Frozen Twist as KefiYo Launches Its New Seasonal Menu", date: "24 September 2026", url: "https://www.eatmug.com/autumn-gets-a-frozen-twist-as-kefiyo-launches-its-new-seasonal-menu/" },
    { outlet: "Start Ups UK", type: "press", title: "Viral Froyo Favourite KefiYo Unveils Its Autumn Frozen Yoghurt Menu With Nine New Seasonal Flavours", date: "23 September 2026", url: "https://startups.uk.com/viral-froyo-favourite-kefiyo-unveils-its-autumn-frozen-yoghurt-menu-with-nine-new-seasonal-flavours" },
    { outlet: "Tour Feeds", type: "press", title: "Viral Froyo Favourite KefiYo Unveils Its Autumn Frozen Yoghurt Menu With Nine New Seasonal Flavours", date: "22 September 2026", url: "https://tourfeeds.com/viral-froyo-favourite-kefiyo-unveils-its-autumn-frozen-yoghurt-menu-with-nine-new-seasonal-flavours/" },
    { outlet: "My Travel Magazine", type: "press", title: "Viral Froyo Favourite KefiYo Unveils Its Autumn Frozen Yoghurt Menu With Nine New Seasonal Flavours", date: "22 September 2026", url: "https://mytravelmagazine.co.uk/viral-froyo-favourite-kefiyo-unveils-its-autumn-frozen-yoghurt-menu-with-nine-new-seasonal-flavours/" },
    { outlet: "Conscious Foodie", type: "press", title: "Vegan Frozen Yoghurt in Leeds: Discover Kefiyo’s Rotating Froyo Flavours", date: "21 September 2026", url: "https://www.conscious-foodie.com/vegan-frozen-yoghurt-in-leeds-discover-kefiyos-rotating-froyo-flavours/" },
    { outlet: "The Food Buff", type: "press", title: "Colourful Bowls And Free Froyo: Inside Leeds’ New KefiYo Craze", date: "19 September 2026", url: "https://thefoodbuff.com/colourful-bowls-and-free-froyo-inside-leeds-new-kefiyo-craze/" },
    { outlet: "The Tribune", type: "press", title: "Leeds’ Viral Froyo Favourite KefiYo Marks Its Official Launch By Giving Ten People Free Frozen Yoghurt For A Whole Year", date: "18 September 2026", url: "https://www.tribune.co.com/leeds-viral-froyo-favourite-kefiyo-marks-its-official-launch-by-giving-ten-people-free-frozen-yoghurt-for-a-whole-year/" },
    { outlet: "Tour UK", type: "press", title: "Leeds’ Viral Froyo Favourite KefiYo Marks Its Official Launch By Giving Ten People Free Frozen Yoghurt For A Whole Year", date: "18 September 2026", url: "https://tour.uk.com/leeds-viral-froyo-favourite-kefiyo-marks-its-official-launch-by-giving-ten-people-free-frozen-yoghurt-for-a-whole-year" },
    { outlet: "Travels Magazine", type: "press", title: "Leeds’ Viral Froyo Favourite KefiYo Marks Its Official Launch By Giving Ten People Free Frozen Yoghurt For A Whole Year", date: "18 September 2026", url: "https://travelsmag.co.uk/leeds-viral-froyo-favourite-kefiyo-marks-its-official-launch-by-giving-ten-people-free-frozen-yoghurt-for-a-whole-year/" },
    { outlet: "The Food Haunt", type: "press", title: "Leeds’ Viral Froyo Favourite KefiYo Marks Its Official Launch By Giving Ten People Free Frozen Yoghurt For A Whole Year", date: "18 September 2026", url: "https://thefoodhaunt.com/leeds-viral-froyo-favourite-kefiyo-marks-its-official-launch-by-giving-ten-people-free-frozen-yoghurt-for-a-whole-year/" },
    { outlet: "Secret Lunch", type: "press", title: "Kefiyo’s Leeds Giveaway: Ten People Can Win Frozen Yoghurt for a Year", date: "18 September 2026", url: "https://www.secret-lunch.com/kefiyos-leeds-giveaway-ten-people-can-win-frozen-yoghurt-for-a-year/" },
    { outlet: "The Food Queen", type: "press", title: "Frozen Yoghurt in Leeds: A Guide to Kefiyo’s Flavours and Unlimited Standard Toppings", date: "18 September 2026", url: "https://thefoodqueen.com/frozen-yoghurt-in-leeds-a-guide-to-kefiyos-flavours-and-unlimited-standard-toppings/" },
    { outlet: "Looking to Eat", type: "press", title: "Meet Kefiyo: The Headingley Café Serving Froyo, Matcha and Açaí Bowls", date: "18 September 2026", url: "https://lookingtoeat.com/meet-kefiyo-the-headingley-cafe-serving-froyo-matcha-and-acai-bowls/" },
    { outlet: "Ellis Food Blog", type: "press", title: "Leeds’ New Froyo Favourite KefiYo Is Already A Viral Smash Hit — And New Flavours Are Coming", date: "18 September 2026", url: "https://ellisfoodblog.com/leeds-new-froyo-favourite-kefiyo-is-already-a-viral-smash-hit-and-new-flavours-are-coming/" },
    { outlet: "Inside Business", type: "press", title: "Leeds’ Viral Froyo Favourite KefiYo Marks Its Official Launch By Giving Ten People Free Frozen Yoghurt For A Whole Year", date: "18 September 2026", url: "https://insidebusiness.com/leeds-viral-froyo-favourite-kefiyo-marks-its-official-launch-by-giving-ten-people-free-frozen-yoghurt-for-a-whole-year/" },
    { outlet: "Today’s News", type: "press", title: "Leeds’ Viral Froyo Favourite KefiYo Marks Its Official Launch By Giving Ten People Free Frozen Yoghurt For A Whole Year", date: "18 September 2026", url: "https://todaynews.co.uk/2026/09/23/leeds-viral-froyo-favourite-kefiyo-marks-its-official-launch-by-giving-ten-people-free-frozen-yoghurt-for-a-whole-year/" },
    { outlet: "In The Kitchen With S", type: "social", note: "Reel · 12k views", date: "18 September 2026", url: "https://www.instagram.com/reel/Dd_qQbVihd6/" },
    { outlet: "Leeds Student Radio", type: "social", note: "Reel & story · 5.5k followers", date: "15 September 2026", url: "https://www.instagram.com/thisislsr/reel/DdUIsRttOOo/" },
    { outlet: "Halal Dining Leeds", type: "social", note: "4 stories · 16k followers", date: "15 September 2026", url: "https://www.instagram.com/halaldiningleeds/" },
    { outlet: "Social Sisters Leeds", type: "social", note: "5 stories · 7.6k followers", date: "15 September 2026", url: "https://www.instagram.com/socialsistersleeds/" },
    { outlet: "Eat With Liv", type: "social", note: "2 stories · 4k followers", date: "15 September 2026", url: "https://www.instagram.com/eatwith.liv/" },
    { outlet: "Brunch at Dawn", type: "social", note: "Reel & 5 stories · 4k followers", date: "15 September 2026", url: "https://www.instagram.com/brunch_at_dawn/reel/DdUWjc6xSe8/" },
    { outlet: "My Daughter My Bestie", type: "social", note: "10 pic carousel & story · 28k followers", date: "15 September 2026", url: "https://www.instagram.com/mydaughter_mybestie/p/DdUM-gqCJr1/" },
    { outlet: "Adventure in Yorkshire", type: "social", note: "3 stories · 12.5k followers", date: "15 September 2026", url: "https://www.instagram.com/adventureinyorkshire" },
    { outlet: "Adventure in Yorkshire (TikTok)", type: "social", note: "TikTok · 1k views", date: "15 September 2026", url: "https://www.tiktok.com/@adventureinyorkshire/video/7685884646101404960" },
    { outlet: "Eat Out With A", type: "social", note: "9 pic carousel & 6 stories · 2k followers", date: "15 September 2026", url: "https://www.instagram.com/eatoutwitha_/p/DdUkBQpkT0u/" },
    { outlet: "Leeds Living", type: "press", title: "KeFiYo: Leeds’ Viral Froyo Favourite Launches", date: "12 September 2026", featured: true, url: "https://leedsliving.co.uk/food-drink/kefiyo-leeds-viral-froyo-favourite-launches/" },
    { outlet: "Yorkshire Evening Post", type: "press", title: "Viral Leeds food craze giving 10 people chance to get free treats for a year", date: "4 September 2026", featured: true, url: "https://www.yorkshireeveningpost.co.uk/lifestyle/food-and-drink/viral-leeds-food-craze-giving-10-people-chance-to-get-free-treats-for-a-year-8958038" }
  ]

};
