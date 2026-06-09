export type Lang = "en" | "sr";

export type Project = {
  slug: string;
  name: string;
  url: string;
  image: string;
  status: "live" | "building";
  type: Record<Lang, string>;
};

export const projects: Project[] = [
  {
    slug: "urbanova",
    name: "Urbanova Realty",
    url: "https://urbanovarealty.com",
    image: "/portfolio/urbanova.png",
    status: "live",
    type: {
      en: "Real estate platform, fullstack with admin",
      sr: "Platforma za nekretnine, fullstack sa adminom",
    },
  },
  {
    slug: "enzahome",
    name: "Enza Home",
    url: "https://enza-home.rs/",
    image: "/portfolio/enzahome.png",
    status: "building",
    type: {
      en: "Furniture brand, fullstack with admin",
      sr: "Brend nameštaja, fullstack sa adminom",
    },
  },
  {
    slug: "anchor",
    name: "Anchor Apartments",
    url: "https://www.anchorapartmentshn.com/",
    image: "/portfolio/anchor.png",
    status: "live",
    type: {
      en: "Apartment development, Montenegro",
      sr: "Stambeni kompleks, Crna Gora",
    },
  },
  {
    slug: "luxbudva",
    name: "Lux Budva",
    url: "https://www.apartmaniluxbudva.com/",
    image: "/portfolio/luxbudva.png",
    status: "live",
    type: {
      en: "Apartment rentals, Montenegro",
      sr: "Izdavanje apartmana, Crna Gora",
    },
  },
  {
    slug: "mariclaw",
    name: "Maric Law",
    url: "https://www.mariclaw.rs/sr-Latn/",
    image: "/portfolio/mariclaw.png",
    status: "live",
    type: {
      en: "Law firm website",
      sr: "Sajt advokatske kancelarije",
    },
  },
  {
    slug: "swastha",
    name: "Swastha",
    url: "https://www.swastha.rs/",
    image: "/portfolio/swastha.png",
    status: "live",
    type: {
      en: "Healthy catering and wellness brand",
      sr: "Brend zdravog keteringa i wellnessa",
    },
  },
];

export const contact = {
  email: "99web.contact@gmail.com",
  phoneDisplay: "065 820 0252",
  phoneHref: "+381658200252",
};

type Dict = {
  nav: { services: string; work: string; process: string; contact: string; cta: string };
  hero: { eyebrow: string; heading: string; headingBold: string; statement: string; hint: string };
  services: {
    kicker: string;
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  };
  stats: { n: string; label: string }[];
  process: {
    kicker: string;
    title: string;
    intro: string;
    steps: { title: string; body: string }[];
  };
  portfolio: {
    kicker: string;
    title: string;
    intro: string;
    live: string;
    building: string;
    visit: string;
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    availability: string;
  };
  footer: { tagline: string; rights: string };
};

export const content: Record<Lang, Dict> = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      contact: "Contact",
      cta: "Start a project",
    },
    hero: {
      eyebrow: "Website and web app development",
      heading: "Cherry",
      headingBold: "Stone",
      statement: "Websites and web applications, engineered from first idea to launch.",
      hint: "Scroll",
    },
    services: {
      kicker: "What we do",
      title: "Built for the whole web, not just a homepage.",
      intro:
        "From a fast marketing site to a fullstack application with its own admin, we cover the entire build.",
      items: [
        {
          title: "Websites",
          body: "Marketing sites, corporate pages, and landing pages that load fast and look right on every screen.",
        },
        {
          title: "Web applications",
          body: "Custom apps with dashboards, user accounts, and the real functionality your team works in every day.",
        },
        {
          title: "Fullstack with admin",
          body: "Complete builds with an admin panel, so you manage listings, content, and data yourself without calling a developer.",
        },
        {
          title: "E-commerce and booking",
          body: "Online stores and reservation flows with payments, inventory, and a checkout people actually finish.",
        },
      ],
    },
    stats: [
      { n: "6", label: "Projects shipped" },
      { n: "3", label: "Countries" },
      { n: "2", label: "Fullstack platforms" },
      { n: "0", label: "Templates used" },
    ],
    process: {
      kicker: "How we work",
      title: "A clear path from idea to live site.",
      intro:
        "No mystery, no endless back and forth. Four steps, and you know where the project stands at all times.",
      steps: [
        {
          title: "Discovery",
          body: "We learn the business, the goals, and who the site is for before a single pixel is drawn.",
        },
        {
          title: "Design",
          body: "Wireframes and a visual direction you approve, so there are no surprises later.",
        },
        {
          title: "Build",
          body: "We develop the frontend and backend, connect the data, and test on real devices.",
        },
        {
          title: "Launch and support",
          body: "We deploy, hand over the admin, and stay available for changes and growth.",
        },
      ],
    },
    portfolio: {
      kicker: "Selected work",
      title: "Real sites, live for real businesses.",
      intro:
        "A look at recent projects across real estate, law, wellness, and hospitality.",
      live: "Live",
      building: "In progress",
      visit: "Visit site",
    },
    contact: {
      kicker: "Get in touch",
      title: "Have a project in mind? Let's talk.",
      intro:
        "Tell us what you are building. We reply to every serious inquiry, usually within a day.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      availability: "Based in Serbia, working with clients worldwide.",
    },
    footer: {
      tagline: "Websites and web apps, built end to end.",
      rights: "All rights reserved.",
    },
  },
  sr: {
    nav: {
      services: "Usluge",
      work: "Radovi",
      process: "Proces",
      contact: "Kontakt",
      cta: "Pokreni projekat",
    },
    hero: {
      eyebrow: "Izrada veb sajtova i veb aplikacija",
      heading: "Cherry",
      headingBold: "Stone",
      statement: "Veb sajtovi i veb aplikacije, projektovani od prve ideje do lansiranja.",
      hint: "Skroluj",
    },
    services: {
      kicker: "Šta radimo",
      title: "Pravimo ceo veb, ne samo naslovnu stranu.",
      intro:
        "Od brzog prezentacionog sajta do fullstack aplikacije sa sopstvenim admin panelom, pokrivamo ceo proces.",
      items: [
        {
          title: "Veb sajtovi",
          body: "Prezentacioni i korporativni sajtovi i landing stranice koje se brzo učitavaju i izgledaju dobro na svakom ekranu.",
        },
        {
          title: "Veb aplikacije",
          body: "Aplikacije po meri sa kontrolnim panelima, korisničkim nalozima i pravom funkcionalnošću u kojoj tim radi svaki dan.",
        },
        {
          title: "Fullstack sa adminom",
          body: "Kompletni sajtovi sa admin panelom, da sami upravljate oglasima, sadržajem i podacima bez zvanja programera.",
        },
        {
          title: "Prodaja i rezervacije",
          body: "Online prodavnice i sistemi rezervacija sa plaćanjem, zalihama i naplatom koju ljudi zaista završe.",
        },
      ],
    },
    stats: [
      { n: "6", label: "Završenih projekata" },
      { n: "3", label: "Države" },
      { n: "2", label: "Fullstack platforme" },
      { n: "0", label: "Korišćenih šablona" },
    ],
    process: {
      kicker: "Kako radimo",
      title: "Jasan put od ideje do sajta uživo.",
      intro:
        "Bez misterije i beskrajnog dopisivanja. Četiri koraka, i u svakom trenutku znate dokle je projekat stigao.",
      steps: [
        {
          title: "Upoznavanje",
          body: "Upoznajemo biznis, ciljeve i publiku pre nego što nacrtamo i jedan piksel.",
        },
        {
          title: "Dizajn",
          body: "Žičani okviri i vizuelni pravac koji odobravate, da kasnije nema iznenađenja.",
        },
        {
          title: "Izrada",
          body: "Razvijamo frontend i backend, povezujemo podatke i testiramo na pravim uređajima.",
        },
        {
          title: "Lansiranje i podrška",
          body: "Postavljamo sajt, predajemo admin i ostajemo dostupni za izmene i rast.",
        },
      ],
    },
    portfolio: {
      kicker: "Izabrani radovi",
      title: "Pravi sajtovi, uživo za prave biznise.",
      intro:
        "Pogled na nedavne projekte iz nekretnina, prava, wellnessa i ugostiteljstva.",
      live: "Uživo",
      building: "U izradi",
      visit: "Poseti sajt",
    },
    contact: {
      kicker: "Javite se",
      title: "Imate projekat na umu? Hajde da popričamo.",
      intro:
        "Recite nam šta gradite. Odgovaramo na svaki ozbiljan upit, obično u roku od jednog dana.",
      emailLabel: "Email",
      phoneLabel: "Telefon",
      availability: "Iz Srbije, radimo sa klijentima širom sveta.",
    },
    footer: {
      tagline: "Veb sajtovi i veb aplikacije, izrađeni od početka do kraja.",
      rights: "Sva prava zadržana.",
    },
  },
};
