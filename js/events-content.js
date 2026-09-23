/* ============================================================
   KefiYo — EVENTS PAGE CONTENT
   ============================================================
   This powers events.html only. Add, remove, or reorder events by
   editing the "events" array below.

   ORDER MATTERS: events display in the exact order you list them
   here — top of the array shows first on the page. This is
   deliberate: it's NOT auto-sorted by date, so you stay in control.
   When you add a new event, put it at the TOP of the array (just
   under "events: [") to have it show first, even if the event
   itself is scheduled further out than others already on the page.

   Fields per event:
     - name        (required) — event title
     - venue       (required)
     - date        (required) — however you want it displayed, e.g.
                    "Saturday, 20 September 2026"
     - month       (required) — used ONLY for the month filter tabs
                    at the top of the page. Use a consistent label
                    per month, e.g. "September 2026" — every event
                    in the same month must use the exact same text
                    or they'll end up under separate filter tabs.
     - time        (required) — e.g. "6:00 PM – 8:00 PM"
     - cost        (optional) — e.g. "£10 per person". Leave out
                    entirely (delete the line) for free events.
     - desc        (optional) — a sentence or a few about the event.
                    Use \n inside the text wherever you want a line
                    break (see README for details).
     - ticketUrl   (optional) — a direct link to buy tickets (e.g. a
                    Glofox, Eventbrite or Square checkout link). When
                    this is set, the button says "Get tickets" and
                    goes straight there instead of opening WhatsApp.
                    Leave this line out for events with no ticket
                    link yet — the button falls back to "Find out
                    more" via WhatsApp, same as always.
     - asset       (optional) — a photo or video for the event. Just
                    give the file path, e.g.
                    "assets/events/flavours-drop.jpg" — the page
                    automatically shows it as an image or a (silent,
                    looping) video based on the file's extension.
                    Leave this line out entirely for events with no
                    photo/video yet; the event still displays
                    perfectly fine without one, just as text.

   The "Find out more" button on every event opens WhatsApp with a
   pre-filled message naming that specific event — nothing to set up
   per event, it's generated automatically from the event's name and
   the phone number in content.js → business.whatsapp. This is
   automatically replaced with a "Get tickets" button whenever an
   event has a ticketUrl set (see above).
   ============================================================ */

var EVENTS_PAGE_CONTENT = {

  hero: {
    eyebrow: "What's on",
    heading: "Events at KefiYo",
    lede: "Tastings, launches and evenings at the counter — come hang out with us."
  },

  events: [
    {
      name: "Halloween Retreat",
      venue: "Yeadon, Leeds — LS19 7EA",
      date: "Sunday 18th October 2026",
      month: "October 2026",
      time: "10:30 AM – 2:00 PM",
      cost: "£45 · Early bird £39.99 until 27th September",
      desc: "Join Auri Pilates x @missholistic_pilates for a magical morning of movement, creativity, wellness and a little Halloween magic. ✨\nCome dressed in your favourite Halloween-inspired look and spend the day moving, creating, connecting and getting into the seasonal spirit with a beautiful community of women.\n\n🖤 What's included\n✨ Reformer Pilates — an energising session suitable for all levels\n🎃 Pumpkin Carving — carve your very own Halloween pumpkin, the perfect autumn activity with the girls\n🔮 Astrology Reading — a special reading from @petalsofneptune\n🍵 Matcha & Açaí — refuel after Pilates with a matcha and açaí bowl from Kefiyo\n\nYour ticket includes the full retreat experience — reformer Pilates, pumpkin carving, astrology reading + refreshments. ✨\n\nCome for the Pilates. Stay for the pumpkins, stars & matcha.\n\nSpaces are limited — grab your ticket and join us for an unforgettable Halloween afternoon.",
      ticketUrl: "https://app.glofox.com/portal/#/branch/69fb159853175ce93c086215/courses/6aa4fadd201b431b460b4abf/schedule/1789196951964/book",
      asset: "assets/events/halloween-retreat.jpg"
    },
    {
      name: "The New Flavours Drop!",
      venue: "KefiYo, 17 Ash Rd, Headingley",
      date: "15th September",
      month: "September 2026",
      time: "4:00 PM – 8:00 PM",
      desc: "Hey! We have something exciting to share! 🍦✨\nKefiyo is bringing some delicious newness to the table, and we'd absolutely love for you to be a part of it! 💛\nJoin us for an evening filled with new frozen yogurt flavours, fun conversations & plenty of scoops!\nCan't wait to have you with us! 💚",
      asset: "assets/events/flavours-drop.mp4"
    }
  ]

};
