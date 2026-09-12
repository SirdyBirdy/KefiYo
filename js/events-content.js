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
     - desc        (optional) — one or two sentences about the event.

   The "Find out more" button on every event opens WhatsApp with a
   pre-filled message naming that specific event — nothing to set up
   per event, it's generated automatically from the event's name and
   the phone number in content.js → business.whatsapp.
   ============================================================ */

var EVENTS_PAGE_CONTENT = {

  hero: {
    eyebrow: "What's on",
    heading: "Events at KefiYo",
    lede: "Tastings, workshops and evenings at the counter — come hang out with us."
  },

  events: [
    {
      name: "Matcha Tasting Night",
      venue: "KefiYo, Merrion Street",
      date: "Saturday, 20 September 2026",
      month: "September 2026",
      time: "6:00 PM – 8:00 PM",
      cost: "£10 per person",
      desc: "A guided tasting through our full matcha range with the team behind the counter — grades, origins, and how we make each drink."
    },
    {
      name: "Açaí Bowl Building Workshop",
      venue: "KefiYo, Merrion Street",
      date: "Saturday, 27 September 2026",
      month: "September 2026",
      time: "11:00 AM – 12:30 PM",
      cost: "£15 per person",
      desc: "Build your own açaí bowl from scratch and learn our base recipe, plus a few combinations we don't usually put on the menu."
    },
    {
      name: "Frozen Yogurt Flavour Launch",
      venue: "KefiYo, Merrion Street",
      date: "Friday, 10 October 2026",
      month: "October 2026",
      time: "5:00 PM – 7:00 PM",
      desc: "First taste of our new seasonal frozen yogurt flavour, free samples while they last."
    }
  ]

};
