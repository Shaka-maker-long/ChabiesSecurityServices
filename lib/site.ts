export const site = {
  name: "Second Plate",
  legalName: "Second Plate ZA",
  wordmark: "SECOND//PLATE",
  tagline: "Explore the art of cooking and premium catering",
  mantra: "SIP | INDULGE | REPEAT",
  phoneDisplay: "071 355 7557",
  phoneHref: "tel:+27713557557",
  email: "info@secondplate.co.za",
  emailHref: "mailto:info@secondplate.co.za",
  area: "Polokwane and surrounding",
  address: "5th Floor, Bloukrans Building, Lynnwood Bridge, Pretoria, 0081",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=5th%20Floor%2C%20Bloukrans%20Building%2C%20Lynnwood%20Bridge%2C%20Pretoria%2C%200081",
  description:
    "Second Plate is a catering company offering cooking classes for adults and children, and dishes for events, in Polokwane and surrounding areas.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
};

export const photos = {
  plate: {
    src: "/images/plate.jpg",
    alt: "Plated meal of yellow grains, stewed meat with carrots and courgette, and cabbage slaw",
    width: 1280,
    height: 1280,
  },
  youngChefs: {
    src: "/images/young-chefs.jpg",
    alt: "Children in chef whites preparing burgers, waffle fries, and a milkshake",
    width: 1280,
    height: 1280,
  },
  salmon: {
    src: "/images/salmon.jpg",
    alt: "Salmon on grains as a herb sauce is poured over the plate",
    width: 1600,
    height: 2000,
    credit: "Image by Sam Moghadam",
  },
  cocktails: {
    src: "/images/cocktails.jpg",
    alt: "Citrus cocktails garnished with rosemary and grapefruit",
    width: 1574,
    height: 2000,
    credit: "Image by Sara Cervera",
  },
  salad: {
    src: "/images/salad.jpg",
    alt: "A colourful salad plate with olives, onion, and orange juice",
    width: 1333,
    height: 2000,
    credit: "Image by Eiliv Aceron",
  },
  wings: {
    src: "/images/wings.jpg",
    alt: "Glazed chicken wings and drumsticks on a dark plate",
    width: 2000,
    height: 1125,
  },
  grazing: {
    src: "/images/grazing.jpg",
    alt: "A grazing board of cheese, cured meat, grapes, bread, and honey",
    width: 2000,
    height: 1333,
    credit: "Image by Theme Photos",
  },
  meatballs: {
    src: "/images/meatballs.jpg",
    alt: "Seared meatballs on greens, with a fork lifting one",
    width: 1328,
    height: 2000,
    credit: "Image by Emiliano Vittoriosi",
  },
  cheese: {
    src: "/images/cheese.jpg",
    alt: "Sliced cheese and a bowl of olives with rosemary",
    width: 2000,
    height: 1334,
  },
  sprouts: {
    src: "/images/sprouts.jpg",
    alt: "Roasted sprouts with lemon and rosemary on a dark surface",
    width: 2000,
    height: 1600,
    credit: "Image by Nathan Lemon",
  },
  chili: {
    src: "/images/chili.jpg",
    alt: "A sliced red chili arranged in a long line on a dark surface",
    width: 1500,
    height: 2000,
    credit: "Image by Aliona Gumeniuk",
  },
} as const satisfies Record<string, Photo>;

export const offerings = [
  {
    index: "01",
    title: "Culinary Classes for Adults",
    text: "Immerse yourself in the flavors of our adult cooking classes, ranging from Asian delicacies to European classics, and elevate your culinary skills.",
    photo: photos.meatballs,
  },
  {
    index: "02",
    title: "Fun and Creative Classes for Kids",
    text: "Let your kids embark on a delightful cooking journey with our fun and educational classes, where they can learn to prepare Mediterranean delights and Latin American feasts.",
    photo: photos.youngChefs,
  },
  {
    index: "03",
    title: "Catered Events",
    text: "Experience the perfect blend of flavors and presentation with our catering services, offering a fusion of global cuisines to elevate your special occasions.",
    photo: photos.grazing,
  },
  {
    index: "04",
    title: "Our Kitchen",
    text: "Step into our kitchen and witness the art of creating modern South African-inspired dishes, and much more, crafted with passion and expertise.",
    photo: photos.plate,
  },
] as const;

export const gallery: Photo[] = [
  photos.salmon,
  photos.cocktails,
  photos.wings,
  photos.salad,
  photos.cheese,
  photos.sprouts,
  photos.chili,
];

export type ClassEvent = {
  slug: string;
  title: string;
  shortDate: string;
  when: string;
  time: string;
  place: string;
  city: string;
  audience: string;
  price: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  summary: string;
  paragraphs: string[];
  skills?: string[];
  listingNote?: string;
  ticket?: string;
};

export const events: ClassEvent[] = [
  {
    slug: "kids-cooking-class-tacos-wraps-strawberry-lemonade",
    title: "Kid's Cooking Class: Tacos & Wraps + Strawberry Lemonade",
    shortDate: "Sat, 30 Aug 2025",
    when: "30 August 2025",
    time: "10:00–13:00",
    place: "21A Hoog Street, Polokwane",
    city: "Polokwane",
    audience: "Ages 5–17",
    price: "R380 per child, or R700 for two kids (siblings or friends). Returning students get 20% off.",
    image: "/images/events/tacos.jpg",
    imageAlt:
      "Second Plate poster for the kids’ class: tacos and strawberry lemonade, with RSVP on 071 355 7557",
    width: 1600,
    height: 1600,
    summary:
      "A hands-on class in Polokwane where children make tacos and wraps, then a refreshing homemade lemonade.",
    paragraphs: [
      "Looking for a fun, life skills and social activity for your child? Enroll your little chef (ages 5–17) in this hands-on cooking class.",
      "This class teaches kids how to prepare tacos and wraps, mastering the art of layering flavors and textures with fresh ingredients, sauces, and fillings. They also make their own refreshing homemade lemonade.",
      "Your child will learn kitchen skills like measuring, food safety, and flavor balancing, while boosting creativity and confidence. Cooking with peers also helps build teamwork and social skills in a supportive environment.",
      "Spaces fill quickly and are reserved on a first-payment basis. The listing invites families to book via WhatsApp on 071 355 7557.",
    ],
    ticket: "Registration is closed.",
  },
  {
    slug: "teens-cooking-class-pizza-making-iced-coffee",
    title: "Teens Cooking Class: Pizza making + Iced Coffee",
    shortDate: "Sat, 19 Jul 2025",
    when: "19 July 2025",
    time: "10:00–12:00",
    place: "21A Hoog St, Polokwane Central, Polokwane, 0700",
    city: "Polokwane",
    audience: "Ages 14–19",
    price: "The class description lists R470 per teen. General admission was listed at R380 plus a R9.50 ticket service fee.",
    image: "/images/events/pizza-coffee.jpg",
    imageAlt:
      "Second Plate poster for the teens’ class: pizza and iced coffee, with RSVP on 071 355 7557",
    width: 1080,
    height: 1080,
    summary:
      "A supervised teen class in Polokwane focused on pizza and iced coffee, with an apron, chef hat, and goodie bag.",
    paragraphs: [
      "Give your teen an unforgettable experience with this cooking class in Polokwane. Designed for 14–19 year olds, it is a chance to develop culinary skills while socialising with peers in a supervised setting.",
      "Under the guidance of experienced instructors, teens prepare pizza and iced coffee. The class also encourages teamwork, confidence, and making new friends.",
      "An apron and chef hat are provided, and the class includes a goodie bag.",
    ],
    skills: [
      "Social skills — teamwork that encourages self-esteem.",
      "Colours, shapes, art, and textures of food and equipment.",
      "Science — how the properties of food change through cooking.",
      "Maths — measuring, weighing, and counting.",
      "Language — terminology, foods, equipment, and following instructions.",
      "Fine motor skills — mixing, weighing, cutting, mashing, separating, and rolling.",
    ],
    listingNote:
      "The event record lists Saturday 19 July 2025, 10:00–12:00, at 21A Hoog St, Polokwane Central. The class description also gives 5 July 2025, 10 AM to 1 PM, at Plot 36 Lower Myngenoegen, Polokwane.",
    ticket:
      "General admission was listed at R380, plus a R9.50 ticket service fee, and included ingredients, a rented apron and chef hat, and a goodie bag. Registration is closed and the sale has ended.",
  },
  {
    slug: "kids-cooking-class-pizza-making-lemonade",
    title: "Kid's Cooking Class: Pizza making + Lemonade",
    shortDate: "Sat, 12 Jul 2025",
    when: "12 July 2025",
    time: "10:00–12:00",
    place: "Plot 36 Myngenoegen, Polokwane",
    city: "Polokwane",
    audience: "Ages 4–13",
    price: "R380 per child",
    image: "/images/events/pizza-lemonade.jpg",
    imageAlt:
      "Second Plate poster for the kids’ class: pizza and lemonade, with RSVP on 071 355 7557",
    width: 1600,
    height: 1600,
    summary:
      "A supervised class for children aged 4–13 making pizza and lemonade, with an apron, chef hat, and goodie bag.",
    paragraphs: [
      "A hands-on cooking adventure in Polokwane for children aged 4–13. Little chefs make pizza and lemonade under expert supervision.",
      "An apron and chef hat are provided, and each child takes home a goodie bag. Instructors guide every step so children learn cooking skills in a safe setting.",
      "RSVP on 071 355 7557 or info@secondplate.co.za.",
    ],
    ticket:
      "General admission was listed at R380, plus a R9.50 ticket service fee, and included ingredients, a rented apron and chef hat, and a goodie bag. Registration is closed and the sale has ended.",
  },
  {
    slug: "teens-cooking-class-burgers-waffle-fries-boba-tea",
    title: "Teens Cooking Class: Burgers, Waffle fries, Boba Tea",
    shortDate: "Sat, 5 Jul 2025",
    when: "5 July 2025",
    time: "10:00–12:00",
    place: "21A Hoog St, Polokwane Central, Polokwane, 0700",
    city: "Polokwane",
    audience: "Ages 14–19",
    price: "The class description lists R470 per teen. General admission was listed at R380 plus a R9.50 ticket service fee.",
    image: "/images/events/burgers-boba.jpg",
    imageAlt:
      "Second Plate poster for the teens’ class: burgers, waffle fries, and boba tea, with RSVP on 071 355 7557",
    width: 1600,
    height: 1600,
    summary:
      "A supervised teen class making burgers, waffle fries, and boba tea at 21A Hoog Street in Polokwane.",
    paragraphs: [
      "Give your teen an unforgettable experience with this cooking class in Polokwane. Designed for 14–19 year olds, it is a chance to develop culinary skills while socialising with peers in a supervised setting.",
      "Teens learn to prepare burgers, crispy waffle fries, and boba tea. Beyond cooking, the class encourages teamwork, confidence, and making new friends.",
      "An apron and chef hat are provided, and the class includes a goodie bag. RSVP on 071 355 7557 or info@secondplate.co.za.",
    ],
    skills: [
      "Social skills — teamwork that encourages self-esteem.",
      "Colours, shapes, art, and textures of food and equipment.",
      "Science — how the properties of food change through cooking.",
      "Maths — measuring, weighing, and counting.",
      "Language — terminology, foods, equipment, and following instructions.",
      "Fine motor skills — mixing, weighing, cutting, mashing, separating, and rolling.",
    ],
    listingNote:
      "The event record lists 10:00–12:00. The class description says 10 AM to 1 PM, at the same Hoog Street address.",
    ticket:
      "General admission was listed at R380, plus a R9.50 ticket service fee, and included ingredients, a rented apron and chef hat, and a goodie bag. Registration is closed and the sale has ended.",
  },
  {
    slug: "kids-cooking-class-burgers-waffle-fries-milkshake",
    title: "Kid's Cooking Class: Burgers, Waffle fries, Milkshake",
    shortDate: "Sat, 28 Jun 2025",
    when: "28 June 2025",
    time: "10:00–13:00",
    place: "21A Hoog St, Polokwane Central, Polokwane, 0700",
    city: "Polokwane",
    audience: "Ages 4–13",
    price: "R380 per child",
    image: "/images/events/burgers-milkshake.jpg",
    imageAlt:
      "Second Plate poster for the kids’ class: burgers, waffle fries, and a milkshake, with RSVP on 071 355 7557",
    width: 1600,
    height: 1600,
    summary:
      "Children aged 4–13 make burgers, waffle fries, and milkshakes under supervision in Polokwane.",
    paragraphs: [
      "A hands-on cooking adventure in Polokwane for children aged 4–13. Little chefs make burgers, crispy waffle fries, and milkshakes under expert supervision.",
      "An apron and chef hat are provided so each child can feel like a chef, and a goodie bag goes home afterwards. Instructors guide every step.",
      "RSVP on 071 355 7557 or info@secondplate.co.za.",
    ],
    ticket:
      "General admission was listed at R380, plus a R9.50 ticket service fee, and included ingredients, a rented apron and chef hat, and a goodie bag. Registration is closed and the sale has ended.",
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}
