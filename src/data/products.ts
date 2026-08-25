import { Product } from "../lib/types";

import pDenim from "../assets/img/p-denim.jpg";
import pVarsity from "../assets/img/p-varsity.jpg";
import pBandtee from "../assets/img/p-bandtee.jpg";
import pCorduroy from "../assets/img/p-corduroy.jpg";
import pJeans from "../assets/img/p-jeans.jpg";
import pHoodie from "../assets/img/p-hoodie.jpg";
import pHoodieBack from "../assets/img/p-hoodie-back.jpg";
import pCraneTee from "../assets/img/p-crane-tee.jpg";
import pArtDenim from "../assets/img/p-art-denim.jpg";
import pArtDenimBack from "../assets/img/p-art-denim-back.jpg";
import pSweatshirt from "../assets/img/p-sweatshirt.jpg";
import pBomber from "../assets/img/p-bomber.jpg";
import pBomberBack from "../assets/img/p-bomber-back.jpg";
import pHat from "../assets/img/p-hat.jpg";
import pTote from "../assets/img/p-tote.jpg";
import dropHoodie from "../assets/img/drop-hoodie.jpg";
import dropTee from "../assets/img/drop-tee.jpg";
import dropCargo from "../assets/img/drop-cargo.jpg";
import kickCourt from "../assets/img/kicks/court.jpg";
import kickApex from "../assets/img/kicks/apex.jpg";
import kickBlaze from "../assets/img/kicks/blaze.jpg";

const US = ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"];
const APP = ["S", "M", "L", "XL", "XXL"];

export const PRODUCTS: Product[] = [
  /* ================= FRIDAY KICKS (locked until the drop) ================= */
  {
    slug: "court-high-night-shift",
    name: "Court High “Night Shift”",
    line: "High-top · black / white / volt stitch",
    category: "kicks",
    price: 320_000,
    sizes: US,
    colors: [
      { hex: "#111111", name: "Black" },
      { hex: "#ecece8", name: "Bone" },
      { hex: "#c8ff16", name: "Volt" },
    ],
    isDrop: true,
    isBestseller: true,
    stock: 8,
    addedAt: 24,
    short: "The high-top that started the hallway whispering. Deadstock-grade condition.",
    description:
      "Crisp black leather high-tops with a bone sole and a single volt stitch line — sourced deadstock and authenticated by our team before the drop. Clean enough for the office, loud enough for the rooftop.",
    story:
      "Part of the Friday Kicks drop: limited pairs, first come first served, 8PM sharp. Join the notify list — our WhatsApp list hears first.",
    fabric: "Full-grain leather upper, rubber cupsole",
    care: "Wipe with a damp cloth. Crease protectors recommended.",
    images: [{ src: kickCourt }, { src: kickCourt, zoom: true }],
    reviews: [],
  },
  {
    slug: "apex-runner-volt-surge",
    name: "Apex Runner “Volt Surge”",
    line: "Chunky runner · grey mesh / volt",
    category: "kicks",
    price: 385_000,
    sizes: US,
    colors: [
      { hex: "#8a8a8a", name: "Grey" },
      { hex: "#c8ff16", name: "Volt" },
    ],
    isDrop: true,
    isNew: true,
    stock: 6,
    addedAt: 25,
    short: "Grey mesh runner with volt shocks — the fastest thing at the taxi stage.",
    description:
      "A sculpted retro runner: breathable grey mesh, buttery suede overlays and volt hits on the cages and sole pods. Foam so soft it should be illegal below the equator.",
    story:
      "Drops Friday 8PM with extremely limited pairs. Members of the notify list get the link 15 minutes early.",
    fabric: "Engineered mesh, suede overlays, dual-density foam",
    care: "Remove insoles and air-dry. No machine wash.",
    images: [{ src: kickApex }, { src: kickApex, zoom: true }],
    reviews: [],
  },
  {
    slug: "blaze-low-cardinal",
    name: "Blaze Low “Cardinal”",
    line: "Low-top skate · cardinal red / gum",
    category: "kicks",
    price: 290_000,
    sizes: US,
    colors: [
      { hex: "#c2222a", name: "Cardinal" },
      { hex: "#ecece8", name: "Bone" },
    ],
    isDrop: true,
    stock: 10,
    addedAt: 23,
    short: "Cardinal red lows on a gum sole — the Owino-to-Kololo express.",
    description:
      "A skate-built low-top in deep cardinal leather with a gum rubber outsole. Double-stitched where it counts, pre-loved silhouette, zero scuffs. Pairs with literally everything in this catalogue.",
    story: "Friday Kicks drop — locked until 8PM EAT. Set your reminder below.",
    fabric: "Suede & leather upper, vulcanized gum sole",
    care: "Suede brush only. Keep the laces crisp.",
    images: [{ src: kickBlaze }, { src: kickBlaze, zoom: true }],
    reviews: [],
  },

  /* ================= NEW STREET DROPS (custom art apparel) ================= */
  {
    slug: "static-skull-hoodie",
    name: "Static Skull Hoodie",
    line: "Heavyweight · volt drawstrings",
    category: "custom",
    price: 178_000,
    sizes: APP,
    colors: [
      { hex: "#111111", name: "Black" },
      { hex: "#c8ff16", name: "Volt" },
    ],
    isNew: true,
    isBestseller: true,
    stock: 9,
    addedAt: 22,
    short: "Gothic skull, hand-finished lightning, volt strings. Static energy.",
    description:
      "Our heaviest hoodie yet — 460gsm black fleece carrying a large hand-finished skull-and-lightning graphic, spiked with neon volt drawstrings. Screened and hand-detailed in the Najjera studio.",
    story:
      "Every Static Skull gets a final pass with a brush — small paint accents differ from piece to piece, so no two hoodies are perfectly identical. That's called provenance.",
    fabric: "460gsm brushed fleece, 100% cotton face",
    care: "Cold wash inside-out, hang dry. Do not iron the graphic.",
    images: [{ src: dropHoodie }, { src: dropHoodie, zoom: true }],
    reviews: [
      {
        id: "r-sh1",
        author: "Trevor Mukiibi",
        handle: "@trev.mk",
        rating: 5,
        date: "22 Aug 2026",
        title: "The volt strings are a cheat code",
        text: "Heaviest hoodie I own, and I've imported hoodies before. The skull detail up close is crazy. Wore it out Saturday — three people asked for the plug.",
        verified: true,
      },
      {
        id: "r-sh2",
        author: "Amara Kirabo",
        handle: "@amara.k",
        rating: 5,
        date: "19 Aug 2026",
        title: "Instant uniform",
        text: "Oversized exactly how I like (stayed true to size). Delivery to Ntinda was same-day. This is my entire personality now.",
        verified: true,
      },
    ],
  },
  {
    slug: "red-dragon-block-tee",
    name: "Red Dragon Block Tee",
    line: "Boxy heavyweight · block print",
    category: "custom",
    price: 79_000,
    sizes: APP,
    colors: [
      { hex: "#ecece8", name: "Bone" },
      { hex: "#c2222a", name: "Cardinal" },
    ],
    isNew: true,
    stock: 14,
    addedAt: 21,
    short: "A block-printed dragon in cardinal red on heavyweight bone cotton.",
    description:
      "Boxy 240gsm tee with a hand-pressed dragon block print — red and black ink, deliberately imperfect like a Japanese woodcut, softened only slightly by the wash.",
    story:
      "Block printing means pressure varies edge to edge — each print is its own animal. Yours may be bolder on the left wing than the right. That's the medium talking.",
    fabric: "240gsm heavyweight cotton, boxy drop shoulder",
    care: "Cold wash, inside-out. Line dry in shade.",
    images: [{ src: dropTee }, { src: dropTee, zoom: true }],
    reviews: [
      {
        id: "r-rd1",
        author: "Denis Opolot",
        handle: "@den.o",
        rating: 4,
        date: "20 Aug 2026",
        title: "Print is art, blank is thick",
        text: "The tee alone is worth it — thick, structured. Print faded in a nice vintage way after two washes. Go up one size for the streetwear fit.",
        verified: true,
      },
    ],
  },
  {
    slug: "shadow-utility-cargo",
    name: "Shadow Utility Cargo",
    line: "Technical · 6-pocket",
    category: "custom",
    price: 148_000,
    sizes: APP,
    colors: [
      { hex: "#1a1a1a", name: "Shadow" },
      { hex: "#3d3d3d", name: "Graphite" },
    ],
    isNew: true,
    stock: 11,
    addedAt: 20,
    short: "Six-pocket tactical cargos with ankle cinches. Carries your whole day.",
    description:
      "Technical black cargos with deep flap pockets, bartacked seams and adjustable ankle straps. Cut relaxed through the thigh with a taper that sits clean on sneakers.",
    story:
      "Pattern-drafted in-house after three fit sessions on real Kampala bodies — boda-proof knees included.",
    fabric: "Cotton ripstop with mechanical stretch",
    care: "Machine wash cold, tumble low. Avoid bleach.",
    images: [{ src: dropCargo }, { src: dropCargo, zoom: true }],
    reviews: [
      {
        id: "r-sc1",
        author: "Kevin Ssemwanga",
        handle: "@kev.ssw",
        rating: 5,
        date: "21 Aug 2026",
        title: "Pockets for days",
        text: "Phone, wallet, powerbank, keys — all zipped, nothing bulging. Fit is perfect with high-tops. Buying the graphite when it drops.",
        verified: true,
      },
    ],
  },

  /* ================= VINTAGE ARCHIVE ================= */
  {
    slug: "kampala-98-denim-jacket",
    name: "Kampala ’98 Denim Jacket",
    line: "Vintage trucker · perfectly faded",
    category: "vintage",
    price: 145_000,
    sizes: ["S", "M", "L", "XL"],
    colors: [{ hex: "#46617c", name: "Faded Indigo" }],
    isBestseller: true,
    stock: 4,
    addedAt: 12,
    short: "A true 90s trucker with two decades of stories in its fade.",
    description:
      "Sourced from our favourite Owino Market bale, this late-90s denim trucker has faded to a shade of blue you can only earn with time. Copper shank buttons, structured collar, broken-in hand feel.",
    story:
      "Every vintage piece at Gayita is hand-picked, steam-cleaned and restored by our Kampala team. The whiskering and honeycombs are original — not factory-printed.",
    fabric: "100% cotton denim, mid-weight (13oz)",
    care: "Cold machine wash inside-out. Line dry in shade.",
    images: [{ src: pDenim }, { src: pDenim, zoom: true }],
    reviews: [
      {
        id: "r-d1", author: "Nakato Sarah", handle: "@nakato.s", rating: 5, date: "12 Aug 2026",
        title: "Better than the photos",
        text: "The fade is even more beautiful in person. Fits true to size and the quality check before delivery was obvious. Worth every shilling.",
        verified: true,
      },
      {
        id: "r-d2", author: "Brian Mwebaze", handle: "@b.mwebz", rating: 5, date: "28 Jul 2026",
        title: "My third Gayita vintage find",
        text: "These people know denim. Arrived same day within Kampala with a thank-you card. Slight vintage wear on one cuff — exactly as described.",
        verified: true,
      },
      {
        id: "r-d3", author: "Emma Waiswa", handle: "@emma.w", rating: 4, date: "02 Jul 2026",
        title: "Solid piece",
        text: "Great jacket, heavy and authentic. Took one size up for the oversized fit and it's perfect.",
        verified: true,
      },
    ],
  },
  {
    slug: "retro-eagles-varsity",
    name: "Retro Eagles Varsity",
    line: "Wool body · leather sleeves",
    category: "vintage",
    price: 165_000,
    sizes: ["M", "L", "XL"],
    colors: [
      { hex: "#1d3a2a", name: "Forest" },
      { hex: "#e8e2d2", name: "Cream" },
    ],
    isBestseller: true,
    stock: 3,
    addedAt: 10,
    short: "Forest-green wool and cream leather — an 80s American classic.",
    description:
      "A genuine vintage letterman in forest green melton wool with cream leather sleeves and striped rib trims. The chenille chest patch gives it authentic collegiate attitude.",
    story: "Found in a curated Nairobi bale. The leather sleeves carry a patina no new jacket can fake.",
    fabric: "Wool body, genuine leather sleeves, quilted lining",
    care: "Dry clean only. Condition sleeves twice a year.",
    images: [{ src: pVarsity }, { src: pVarsity, zoom: true }],
    reviews: [
      {
        id: "r-v1", author: "Aisha Namono", handle: "@aisha.n", rating: 5, date: "15 Aug 2026",
        title: "Statement piece!",
        text: "Wore it to a rooftop party in Kololo and got asked about it all night. Warm, heavy, premium.",
        verified: true,
      },
      {
        id: "r-v2", author: "Ssemakula David", handle: "@ssema.d", rating: 4, date: "30 Jun 2026",
        title: "Clean vintage",
        text: "Real leather, real wool. Sleeves run slightly long — that's the varsity look.",
        verified: true,
      },
    ],
  },
  {
    slug: "owino-market-band-tee",
    name: "Owino Market Band Tee",
    line: "Single-stitch · faded black",
    category: "vintage",
    price: 58_000,
    compareAt: 75_000,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ hex: "#232323", name: "Faded Black" }],
    stock: 9,
    addedAt: 9,
    short: "Soft single-stitch vintage tee with a sun-faded concert print.",
    description:
      "The holy grail of vintage: a single-stitch band tee washed black by time itself. Buttery cotton, boxy 90s cut, distressed concert graphic that improves with every wear.",
    story: "Hand-picked from Owino's bales. Washed, steamed and sun-dried by our team before it lists.",
    fabric: "100% cotton, single-stitch construction",
    care: "Cold wash with similar colours. Line dry.",
    images: [{ src: pBandtee }, { src: pBandtee, zoom: true }],
    reviews: [
      {
        id: "r-b1", author: "Flavia Nansubuga", handle: "@flavia.n", rating: 5, date: "09 Aug 2026",
        title: "Softest tee I own",
        text: "That one tee you reach for every weekend? This is it now. Bought two more for my sisters.",
        verified: true,
      },
      {
        id: "r-b2", author: "Isaac Okello", handle: "@isaac.o", rating: 5, date: "19 Jul 2026",
        title: "Authentic vintage",
        text: "Single stitch confirmed 😄 proper old-school quality. Courier to Gulu took 2 days.",
        verified: true,
      },
      {
        id: "r-b3", author: "Sheilah Tushabe", handle: "@sheilah.t", rating: 4, date: "21 Jun 2026",
        title: "Great value",
        text: "On sale and still premium. Love it tucked into mom jeans.",
        verified: true,
      },
    ],
  },
  {
    slug: "tan-corduroy-trucker",
    name: "Tan Corduroy Trucker",
    line: "Wide-wale cord · honey tone",
    category: "vintage",
    price: 128_000,
    sizes: ["S", "M", "L"],
    colors: [{ hex: "#a97e4f", name: "Honey" }],
    stock: 5,
    addedAt: 8,
    short: "Warm honey-coloured corduroy with the perfect vintage slouch.",
    description:
      "Wide-wale corduroy in a rich tan that catches the Kampala evening light like nothing else. Flap pockets, brass buttons, soft structured drape only old cord can give.",
    story: "Minor wear at the collar, professionally cleaned and conditioned in our studio.",
    fabric: "Cotton wide-wale corduroy",
    care: "Gentle cold wash, hang dry. Brush the wale to revive texture.",
    images: [{ src: pCorduroy }, { src: pCorduroy, zoom: true }],
    reviews: [
      {
        id: "r-c1", author: "Grace Atim", handle: "@grace.atim", rating: 5, date: "05 Aug 2026",
        title: "Obsessed with the colour",
        text: "The honey tone is even richer in person. Works over dresses and jeans. Gayita never misses.",
        verified: true,
      },
      {
        id: "r-c2", author: "Mukasa Joel", handle: "@mukasa.j", rating: 4, date: "11 Jul 2026",
        title: "Very clean for vintage",
        text: "Almost no wear. WhatsApp answers were quick when I asked for measurements.",
        verified: true,
      },
    ],
  },
  {
    slug: "vintage-mom-jeans",
    name: "Vintage High-Waist Mom Jeans",
    line: "Light wash · tapered 90s fit",
    category: "vintage",
    price: 85_000,
    compareAt: 98_000,
    sizes: ["26", "28", "30", "32"],
    colors: [{ hex: "#8fa8c2", name: "Light Wash" }],
    stock: 6,
    addedAt: 7,
    short: "The perfect high-rise 90s jean — light blue, no stretch, all attitude.",
    description:
      "Rigid 90s denim with a high rise and tapered leg — the mom jean silhouette that flatters everyone. Light-washed by time, not chemicals.",
    story:
      "Vintage denim runs small — message us on WhatsApp and we'll measure the exact pair for you before you order.",
    fabric: "100% rigid cotton denim",
    care: "Cold wash inside-out, line dry.",
    images: [{ src: pJeans }, { src: pJeans, zoom: true }],
    reviews: [
      {
        id: "r-j1", author: "Patricia Kiconco", handle: "@patricia.k", rating: 5, date: "17 Aug 2026",
        title: "Finally, jeans that fit my waist!",
        text: "High rise actually means high rise. The team WhatsApped measurements before I paid — rare service.",
        verified: true,
      },
      {
        id: "r-j2", author: "Ronald Kato", handle: "@ron.k", rating: 4, date: "24 Jul 2026",
        title: "Bought for my sister",
        text: "She hasn't taken them off since. Genuine vintage, very clean.",
        verified: true,
      },
      {
        id: "r-j3", author: "Dorcus Apio", handle: "@dorcus.a", rating: 5, date: "14 Jun 2026",
        title: "Vintage done right",
        text: "No weird smells, no stains — just perfect old denim.",
        verified: false,
      },
    ],
  },

  /* ================= CUSTOM ART — THE CLASSICS ================= */
  {
    slug: "kampala-nights-hoodie",
    name: "“Kampala Nights” Hoodie",
    line: "Hand-painted · 1 of 1 series",
    category: "custom",
    price: 185_000,
    sizes: APP,
    colors: [{ hex: "#111111", name: "Black" }],
    oneOfOne: true,
    isBestseller: true,
    stock: 3,
    addedAt: 14,
    short: "A wearable mural of the city that never slows down.",
    description:
      "Our signature piece. A heavyweight black hoodie carrying a hand-painted Kampala nightscape — boda bodas weaving through neon, in acrylic golds, oranges and teals. Sealed with textile medium.",
    story:
      "Each one is painted to order over 2–3 days in Najjera, signed inside the hem. Allow 3–5 working days before delivery.",
    fabric: "450gsm brushed fleece, 100% cotton face",
    care: "Cold gentle wash inside-out. Do not iron the artwork.",
    images: [{ src: pHoodie }, { src: pHoodieBack }, { src: pHoodie, zoom: true }],
    reviews: [
      {
        id: "r-h1", author: "Daniel Ssebunya", handle: "@dan.ssebu", rating: 5, date: "19 Aug 2026",
        title: "A literal art piece",
        text: "People stop me on the street to ask where I got it. The painting is even more detailed in real life. Proudly Ugandan.",
        verified: true,
      },
      {
        id: "r-h2", author: "Namono Patricia", handle: "@namono.p", rating: 5, date: "03 Aug 2026",
        title: "Worth the wait",
        text: "Took 4 days because it's painted to order — worth every one. Got WhatsApp photo updates while they painted mine.",
        verified: true,
      },
      {
        id: "r-h3", author: "Peter Okumu", handle: "@p.okumu", rating: 5, date: "22 Jul 2026",
        title: "Premium quality",
        text: "Washed twice already, artwork still perfect. Size up for the full oversized look.",
        verified: true,
      },
      {
        id: "r-h4", author: "Linda Awino", handle: "@linda.a", rating: 4, date: "05 Jul 2026",
        title: "Beautiful",
        text: "Gorgeous artwork, great fit. Would love more base colour options.",
        verified: true,
      },
    ],
  },
  {
    slug: "crested-crane-tee",
    name: "Crested Crane Art Tee",
    line: "Hand-drawn gold ink · oversized",
    category: "custom",
    price: 88_000,
    sizes: APP,
    colors: [{ hex: "#e9e2cf", name: "Cream" }],
    isNew: true,
    stock: 11,
    addedAt: 15,
    short: "Uganda's crowned crane, drawn in gold on heavyweight cream cotton.",
    description:
      "Our love letter to the national bird. A crested crane in fine gold-and-ink line work with soft watercolour washes, finished by hand on a heavyweight cream oversized tee.",
    story:
      "Eleven hours of stippling before it ever touched a shirt. Each tee is finished individually — tiny variations make yours unique.",
    fabric: "240gsm heavyweight cotton, drop-shoulder fit",
    care: "Cold wash inside-out. Hang dry in shade to protect the gold.",
    images: [{ src: pCraneTee }, { src: pCraneTee, zoom: true }],
    reviews: [
      {
        id: "r-t1", author: "Aisha Namono", handle: "@aisha.n", rating: 5, date: "20 Aug 2026",
        title: "Elegant and proud",
        text: "Rare to find Ugandan-themed designs this premium. Representing at a Nairobi conference next week!",
        verified: true,
      },
      {
        id: "r-t2", author: "Moses Katumba", handle: "@moses.k", rating: 5, date: "08 Aug 2026",
        title: "Quality blank + great art",
        text: "Heavy and structured, artwork crisp. Ordered Monday, delivered Wednesday.",
        verified: true,
      },
      {
        id: "r-t3", author: "Grace Atim", handle: "@grace.atim", rating: 4, date: "29 Jul 2026",
        title: "Lovely tee",
        text: "Properly oversized — stick to your normal size. Would love a black version.",
        verified: true,
      },
    ],
  },
  {
    slug: "ancestral-lines-denim",
    name: "“Ancestral Lines” Art Denim",
    line: "Hand-drawn white ink · 1 of 1",
    category: "custom",
    price: 235_000,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { hex: "#46617c", name: "Indigo" },
      { hex: "#ecece8", name: "White Ink" },
    ],
    oneOfOne: true,
    isBestseller: true,
    stock: 2,
    addedAt: 13,
    short: "Gallery-grade line work on vintage-wash denim. One of one.",
    description:
      "Thousands of hand-drawn white ink lines flow across this jacket — African geometry, ancestral pattern work, a statement mask across the back. Museum material.",
    story:
      "Painted freehand with archival fabric pens over three days. Once your size sells, the design retires forever — signed and numbered.",
    fabric: "Upcycled premium denim, archival fabric ink",
    care: "Spot clean preferred. Cold gentle wash inside-out if needed.",
    images: [{ src: pArtDenim }, { src: pArtDenimBack }, { src: pArtDenim, zoom: true }],
    reviews: [
      {
        id: "r-a1", author: "Ssemakula David", handle: "@ssema.d", rating: 5, date: "16 Aug 2026",
        title: "Wearable museum piece",
        text: "I've bought custom jackets from London — this is better. The line density is insane up close.",
        verified: true,
      },
      {
        id: "r-a2", author: "Flavia Nansubuga", handle: "@flavia.n", rating: 5, date: "01 Aug 2026",
        title: "Compliment magnet",
        text: "Wore it to Blankets & Wine and lost count of the compliments.",
        verified: true,
      },
      {
        id: "r-a3", author: "Brian Mwebaze", handle: "@b.mwebz", rating: 5, date: "18 Jul 2026",
        title: "Investment piece",
        text: "Fair price for three days of hand work. Arrived with a signed certificate card.",
        verified: true,
      },
    ],
  },
  {
    slug: "matatu-dreams-sweatshirt",
    name: "“Matatu Dreams” Sweatshirt",
    line: "Hand-painted pop-art",
    category: "custom",
    price: 138_000,
    sizes: ["S", "M", "L", "XL"],
    colors: [{ hex: "#d8cdb4", name: "Sand" }],
    isNew: true,
    stock: 7,
    addedAt: 11,
    short: "Pop-art matatu energy on a sand-toned crewneck.",
    description:
      "East Africa's most iconic taxi re-imagined as loud, joyful pop-art — teals, oranges and magentas brushed freehand across a soft sand crewneck.",
    story:
      "Painted after you order — expect playful differences from the photo. That's the point of handmade.",
    fabric: "380gsm loopback French terry",
    care: "Cold wash inside-out, hang dry.",
    images: [{ src: pSweatshirt }, { src: pSweatshirt, zoom: true }],
    reviews: [
      {
        id: "r-m1", author: "Sheilah Tushabe", handle: "@sheilah.t", rating: 5, date: "13 Aug 2026",
        title: "Happiest sweatshirt ever",
        text: "The colours pop so hard in person. Got the matching tote for my best friend.",
        verified: true,
      },
      {
        id: "r-m2", author: "Emma Waiswa", handle: "@emma.w", rating: 4, date: "27 Jul 2026",
        title: "Great, runs roomy",
        text: "Comfy, well-painted. Size down for a standard fit.",
        verified: true,
      },
    ],
  },
  {
    slug: "nakasero-sunset-bomber",
    name: "“Nakasero Sunset” Bomber",
    line: "Hand-painted satin · premium",
    category: "custom",
    price: 265_000,
    sizes: ["M", "L", "XL"],
    colors: [{ hex: "#44502f", name: "Olive" }],
    oneOfOne: true,
    isNew: true,
    stock: 2,
    addedAt: 16,
    short: "A golden African sunset, hand-painted across olive satin.",
    description:
      "Our premium collector's bomber. Deep olive satin carries a full-back hand-painted sunset — acacia silhouettes, molten orange sky, birds in flight.",
    story:
      "Painted over four days with heat-set textile paints that flex with the satin. Lined, antique brass hardware, signed inside. Ships with a garment bag.",
    fabric: "Satin shell, viscose lining, YKK zip",
    care: "Dry clean only. Store on a padded hanger.",
    images: [{ src: pBomber }, { src: pBomberBack }, { src: pBomberBack, zoom: true }],
    reviews: [
      {
        id: "r-bo1", author: "Daniel Ssebunya", handle: "@dan.ssebu", rating: 5, date: "21 Aug 2026",
        title: "The best thing in my wardrobe",
        text: "I own designer bombers and this beats them. The painting glows in evening light.",
        verified: true,
      },
      {
        id: "r-bo2", author: "Namono Patricia", handle: "@namono.p", rating: 5, date: "09 Aug 2026",
        title: "Bought as a gift — he cried",
        text: "Ordered for my brother's graduation. The team wrote a custom message card free of charge.",
        verified: true,
      },
      {
        id: "r-bo3", author: "Isaac Okello", handle: "@isaac.o", rating: 5, date: "25 Jul 2026",
        title: "Pure luxury",
        text: "Satin feels expensive, art is flawless. Delivery to Jinja in 3 days.",
        verified: true,
      },
    ],
  },

  /* ================= ACCESSORIES ================= */
  {
    slug: "art-bucket-hat",
    name: "Hand-Painted Art Bucket Hat",
    line: "Mini motifs · washed black",
    category: "accessories",
    price: 55_000,
    sizes: ["One Size"],
    colors: [{ hex: "#1c1c1c", name: "Washed Black" }],
    isNew: true,
    stock: 12,
    addedAt: 17,
    short: "Tiny hand-painted suns and stars on washed black cotton.",
    description:
      "A washed-black bucket hat scattered with miniature hand-painted motifs — suns, stars and abstract sparks in gold, orange and teal. Adjustable inner band.",
    story: "Painted in batches of five. Motifs are freestyle — yours alone.",
    fabric: "Washed cotton twill",
    care: "Hand wash cold, air dry flat.",
    images: [{ src: pHat }, { src: pHat, zoom: true }],
    reviews: [
      {
        id: "r-ha1", author: "Moses Katumba", handle: "@moses.k", rating: 5, date: "18 Aug 2026",
        title: "Subtle flex",
        text: "The painted details catch the light beautifully. Fits my head comfortably — rare!",
        verified: true,
      },
      {
        id: "r-ha2", author: "Patricia Kiconco", handle: "@patricia.k", rating: 4, date: "30 Jul 2026",
        title: "Cute and artsy",
        text: "Great finish for the price. Arrived nicely packed with my tee.",
        verified: true,
      },
    ],
  },
  {
    slug: "gayita-sketch-tote",
    name: "“Gayita Sketch” Art Tote",
    line: "Ink illustration · heavy canvas",
    category: "accessories",
    price: 45_000,
    sizes: ["One Size"],
    colors: [{ hex: "#e6ddc6", name: "Ecru" }],
    stock: 15,
    addedAt: 6,
    short: "Our signature fashion sketch, hand-finished on heavy canvas.",
    description:
      "A sturdy ecru tote carrying the Gayita signature sketch — a figure in flowing dress and headwrap in fine black ink with a single gold accent. Fits your laptop and your soft life.",
    story: "Adapted from an original pen drawing in the studio archive. Hand-finished, tiny variations included.",
    fabric: "16oz natural cotton canvas, reinforced handles",
    care: "Spot clean or gentle hand wash. Line dry.",
    images: [{ src: pTote }, { src: pTote, zoom: true }],
    reviews: [
      {
        id: "r-to1", author: "Dorcus Apio", handle: "@dorcus.a", rating: 5, date: "11 Aug 2026",
        title: "My everyday bag",
        text: "Strong stitching, beautiful artwork, carries my 15-inch laptop plus groceries.",
        verified: true,
      },
      {
        id: "r-to2", author: "Ronald Kato", handle: "@ron.k", rating: 5, date: "20 Jul 2026",
        title: "Bought four as gifts",
        text: "Affordable art you can actually use daily. Everyone loved them.",
        verified: true,
      },
      {
        id: "r-to3", author: "Linda Awino", handle: "@linda.a", rating: 4, date: "28 Jun 2026",
        title: "Lovely tote",
        text: "Thick canvas, gorgeous art. Wish it had an inner zip pocket.", 
        verified: true,
      },
    ],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

export const avgRating = (p: Product, extra: { rating: number }[] = []) => {
  const all = [...p.reviews, ...extra];
  if (!all.length) return 0;
  return all.reduce((s, r) => s + r.rating, 0) / all.length;
};

export const reviewCount = (p: Product, extra: unknown[] = []) =>
  p.reviews.length + extra.length;

export const dropProducts = PRODUCTS.filter((p) => p.isDrop);

export const newArrivals = [...PRODUCTS]
  .filter((p) => !p.isDrop)
  .sort((a, b) => b.addedAt - a.addedAt)
  .slice(0, 6);

export const heavyHitters = PRODUCTS.filter(
  (p) => p.isBestseller && !p.isDrop
).slice(0, 4);
