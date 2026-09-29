/* ============================================================
   MANNY'S WAFFLES — SITE CONTENT
   Every photo, price, menu item, link, phone number and opening
   hour on the website is read from this one file.
   Edit the values below; both pages (Home + Menu) update.

   PHOTOS: stock('12345') pulls a temporary stock image from Pexels.
   To use real Manny's photography, drop the file into /assets and
   replace e.g.  stock('34390602')  with  'assets/nutella-waffle.jpg'
   ============================================================ */
(function () {
  const stock = (id, w = 1200) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

  window.MANNYS = {
    brand: "Manny's Waffles",
    isConcept: true, // set to false to hide the "concept preview" strip

    // ---------- CONTACT ----------
    phone: '+91 00000 00000',          // TODO: add real number
    phoneHref: 'tel:+910000000000',     // TODO: same number, no spaces
    email: '',                          // optional

    instagram: {
      handle: '@mannyswaffles',
      url: 'https://www.instagram.com/mannyswaffles/',
    },

    // ---------- ORDERING PLATFORMS ----------
    order: [
      { name: 'Zomato', note: 'Delivery & takeaway', url: 'https://www.zomato.com/ncr/mannys-waffles-sector-65-gurgaon' },
      // NOTE: this Swiggy link is the Sector 14/15 listing — swap for the 65th Avenue listing if there is one
      { name: 'Swiggy', note: 'Delivery', url: 'https://www.swiggy.com/city/gurgaon/mannyswaffles-sector-15-sector-14-rest528526' },
    ],

    // ---------- LOCATIONS ----------
    locations: [
      {
        primary: true,
        name: 'M3M 65th Avenue',
        line1: 'M3M 65th Avenue, Sector 65',
        line2: 'Gurugram, Haryana',
        mapQuery: "Manny's Waffles M3M 65th Avenue Sector 65 Gurugram",
      },
      {
        primary: false,
        name: '32nd Avenue',
        line1: '32nd Avenue, Sector 31',
        line2: 'Gurugram, Haryana',
        mapQuery: "Manny's Waffles 32nd Avenue Sector 31 Gurugram",
      },
    ],

    // ---------- OPENING HOURS (M3M 65th Avenue) ----------
    // dow: 0 = Sunday … 6 = Saturday. open/close in 24h decimal hours; past midnight = 24+ (e.g. 24.5 = 12:30 am)
    hours: [
      { dow: 1, day: 'Monday',    label: '1 pm – 12 am',    open: 13, close: 24 },
      { dow: 2, day: 'Tuesday',   label: '3 pm – 12 am',    open: 15, close: 24 },
      { dow: 3, day: 'Wednesday', label: '3 pm – 12 am',    open: 15, close: 24 },
      { dow: 4, day: 'Thursday',  label: '3 pm – 12 am',    open: 15, close: 24 },
      { dow: 5, day: 'Friday',    label: '3 pm – 12:30 am', open: 15, close: 24.5 },
      { dow: 6, day: 'Saturday',  label: '3 pm – 12:30 am', open: 15, close: 24.5 },
      { dow: 0, day: 'Sunday',    label: '1 pm – 12 am',    open: 13, close: 24 },
    ],
    hoursNote: 'Hours may differ on public holidays.',

    // ---------- HERO VIDEO (stock placeholder) ----------
    heroVideo: {
      src: 'https://videos.pexels.com/video-files/36170482/15339279_1080_1920_30fps.mp4',
      poster: 'https://images.pexels.com/videos/36170482/pexels-photo-36170482.jpeg?auto=compress&cs=tinysrgb&w=1080',
    },

    // ---------- OTHER SECTION IMAGES ----------
    images: {
      editorial: stock('28919124', 2000),
      story: stock('7786846', 1400),
      experience: [
        { title: 'DATE NIGHT', line: 'Something sweet after dinner.', image: stock('3967499', 1000) },
        { title: 'FRIENDS', line: 'Meet, eat and stay awhile.', image: stock('8626822', 1000) },
        { title: 'LATE-NIGHT CRAVING', line: "When dessert can't wait.", image: stock('36752677', 1000) },
      ],
      instagram: [
        stock('34390602', 700), stock('28919126', 700), stock('35054722', 700),
        stock('5715780', 700), stock('5848187', 700), stock('8160967', 700),
      ],
    },

    // ---------- OUR STORY ----------
    // Replace with official brand story
    story: {
      headline: 'At Manny’s, waffles are made for the moments that deserve something sweet.',
      body: [
        'This is placeholder copy. Replace it with the official Manny’s story: how it started, who is behind it, and what makes the waffles yours.',
        'Keep it to two short paragraphs. Visitors read this on their phones on the way to the counter.',
      ],
    },

    // ---------- BESTSELLERS (home page) ----------
    // Names, descriptions and prices are SAMPLE content — replace with the real menu.
    bestsellers: [
      { name: 'Nutella Overload', desc: 'Warm waffle, Nutella, toasted hazelnuts.', price: '₹ —', veg: true, badge: 'Signature', image: stock('34390602', 900) },
      { name: 'Strawberry & Cream', desc: 'Fresh strawberries, whipped cream, icing sugar.', price: '₹ —', veg: true, badge: '', image: stock('28919126', 900) },
      { name: 'Waffle Ice-Cream Sandwich', desc: 'Two crisp halves, a thick scoop in between.', price: '₹ —', veg: true, badge: 'Signature', image: stock('35054722', 900) },
      { name: 'Berry Gelato Waffle', desc: 'Mixed berries, vanilla gelato, syrup drizzle.', price: '₹ —', veg: true, badge: '', image: stock('5715780', 900) },
      { name: 'Choco Waffle Bites', desc: 'Mini waffles sandwiched with chocolate cream.', price: '₹ —', veg: true, badge: '', image: stock('5848187', 900) },
      { name: 'Classic Butter & Syrup', desc: 'Golden waffle, melting butter, warm syrup.', price: '₹ —', veg: true, badge: '', image: stock('8160967', 900) },
    ],

    // ---------- FULL MENU (menu page) ----------
    // image: '' = text-only row. Add an image to feature an item with a photo.
    menuNote: 'Sample menu. Items and prices will be replaced with the official Manny’s menu.',
    menu: [
      { id: 'waffles', name: 'Waffles', blurb: 'Made fresh to order.', items: [
        { name: 'Nutella Overload', desc: 'Nutella, toasted hazelnuts, cocoa dust.', price: '₹ —', veg: true, image: stock('34390602', 900) },
        { name: 'Strawberry & Cream', desc: 'Fresh strawberries, whipped cream.', price: '₹ —', veg: true, image: stock('28919126', 900) },
        { name: 'Classic Butter & Syrup', desc: 'Butter, warm syrup.', price: '₹ —', veg: true, image: '' },
        { name: 'Triple Chocolate', desc: 'Dark, milk and white chocolate.', price: '₹ —', veg: true, image: '' },
        { name: 'Biscoff Crunch', desc: 'Biscoff spread, crushed biscuit.', price: '₹ —', veg: true, image: '' },
        { name: 'Red Velvet', desc: 'Red velvet batter, cream cheese drizzle.', price: '₹ —', veg: true, image: '' },
        { name: 'Banana Caramel', desc: 'Sliced banana, salted caramel.', price: '₹ —', veg: true, image: '' },
      ]},
      { id: 'gelato', name: 'Gelato / Ice Cream', blurb: 'By the scoop, or on a waffle.', items: [
        { name: 'Waffle Ice-Cream Sandwich', desc: 'Crisp waffle halves, thick scoop.', price: '₹ —', veg: true, image: stock('35054722', 900) },
        { name: 'Vanilla Bean', desc: 'Single or double scoop.', price: '₹ —', veg: true, image: '' },
        { name: 'Belgian Chocolate', desc: 'Single or double scoop.', price: '₹ —', veg: true, image: '' },
        { name: 'Salted Caramel', desc: 'Single or double scoop.', price: '₹ —', veg: true, image: '' },
        { name: 'Strawberry', desc: 'Single or double scoop.', price: '₹ —', veg: true, image: '' },
      ]},
      { id: 'coffee', name: 'Coffee', blurb: 'Hot or iced.', items: [
        { name: 'Espresso', desc: 'Single shot.', price: '₹ —', veg: true, image: '' },
        { name: 'Cappuccino', desc: 'Espresso, steamed milk, foam.', price: '₹ —', veg: true, image: '' },
        { name: 'Café Latte', desc: 'Espresso, steamed milk.', price: '₹ —', veg: true, image: '' },
        { name: 'Iced Mocha', desc: 'Espresso, chocolate, cold milk.', price: '₹ —', veg: true, image: '' },
        { name: 'Cold Coffee', desc: 'Blended, with or without ice cream.', price: '₹ —', veg: true, image: '' },
      ]},
      { id: 'beverages', name: 'Beverages', blurb: 'Shakes and coolers.', items: [
        { name: 'Nutella Shake', desc: 'Thick, blended with ice cream.', price: '₹ —', veg: true, image: '' },
        { name: 'Oreo Shake', desc: 'Thick, blended with ice cream.', price: '₹ —', veg: true, image: '' },
        { name: 'Hot Chocolate', desc: 'Rich, made with real chocolate.', price: '₹ —', veg: true, image: '' },
        { name: 'Lemon Iced Tea', desc: 'Freshly brewed.', price: '₹ —', veg: true, image: '' },
      ]},
      { id: 'desserts', name: 'Desserts', blurb: 'For when a waffle isn’t enough.', items: [
        { name: 'Choco Waffle Bites', desc: 'Mini waffles, chocolate cream.', price: '₹ —', veg: true, image: stock('5848187', 900) },
        { name: 'Fudge Brownie', desc: 'Warm, with a scoop on the side.', price: '₹ —', veg: true, image: '' },
        { name: 'Pancake Stack', desc: 'Three pancakes, butter, syrup.', price: '₹ —', veg: true, image: '' },
      ]},
      { id: 'extras', name: 'Extras / Toppings', blurb: 'Add to anything.', items: [
        { name: 'Extra Scoop', desc: 'Any flavour.', price: '₹ —', veg: true, image: '' },
        { name: 'Whipped Cream', desc: '', price: '₹ —', veg: true, image: '' },
        { name: 'Chocolate Drizzle', desc: 'Dark, milk or white.', price: '₹ —', veg: true, image: '' },
        { name: 'Fresh Fruit', desc: 'Strawberry or banana.', price: '₹ —', veg: true, image: '' },
        { name: 'Nuts & Crumble', desc: 'Hazelnut, almond, Oreo or Biscoff.', price: '₹ —', veg: true, image: '' },
      ]},
    ],

    // ---------- BUILD YOUR CRAVING ----------
    // SAMPLE options — confirm with the owner what is actually available.
    builder: [
      { id: 'base', num: '01', title: 'PICK YOUR WAFFLE', hint: 'Choose one.', multi: false, options: [
        { name: 'Classic Belgian', note: 'Golden, crisp edges' },
        { name: 'Chocolate', note: 'Cocoa batter' },
        { name: 'Red Velvet', note: 'Soft, cocoa-tinged' },
        { name: 'Waffle Sandwich', note: 'Folded, filled' },
      ]},
      { id: 'toppings', num: '02', title: 'ADD YOUR TOPPINGS', hint: 'Choose up to three.', multi: true, max: 3, options: [
        { name: 'Nutella', note: '' }, { name: 'Dark chocolate', note: '' }, { name: 'White chocolate', note: '' },
        { name: 'Biscoff', note: '' }, { name: 'Strawberries', note: '' }, { name: 'Banana', note: '' },
        { name: 'Brownie chunks', note: '' }, { name: 'Oreo crumble', note: '' },
      ]},
      { id: 'extras', num: '03', title: 'MAKE IT EXTRA', hint: 'Optional. Pick any.', multi: true, max: 5, options: [
        { name: 'Scoop of gelato', note: '' }, { name: 'Whipped cream', note: '' },
        { name: 'Extra drizzle', note: '' }, { name: 'Toasted nuts', note: '' }, { name: 'Icing sugar', note: '' },
      ]},
    ],
  };
})();
