// All homepage copy lives here. Edit text in this file, not in the
// components.

export const site = {
  name: "Lanchang Sun",
  title: "Lanchang Sun — I explore ideas by building products",
  description:
    "Lanchang Sun — product builder, former Microsoft engineer, student of durable businesses.",
  domainLabel: "SUNLANCHANG.COM",
  email: "sunlanchang@outlook.com",
  x: { handle: "@chris___sun", url: "https://x.com/chris___sun" },
  copyrightYear: 2026,
};

export const hero = {
  title: "I explore ideas by building products.",
  intro: site.description,
};

export const ciyo = {
  name: "Ciyo",
  status: "Building now",
  url: "https://ciyo.ai",
  linkLabel: "ciyo.ai →",
  lede: "An AI creative workspace where anyone can turn an idea into logos, images, and videos — no design background needed.",
  previewLabel: "ciyo.ai · live preview",
  previewTitle: "Ciyo live website preview",
  previewLinkLabel: "Open website ↗",
  facts: [
    {
      label: "Hypothesis",
      body: "People want creative control without becoming designers first.",
    },
    {
      label: "Exists today",
      body: "Logo, image, and video creation from a single prompt.",
    },
    {
      label: "Testing",
      body: "Which workflow gives enough value that people return.",
    },
  ],
};

export type Experiment = {
  name: string;
  status: string;
  accent: "options" | "buzi";
  description: string;
  href?: string;
};

export const experiments: Experiment[] = [
  {
    name: "Buzi",
    status: "Live",
    accent: "buzi",
    description:
      "An AI SEO assistant for independent site owners to find opportunities and grow organic traffic.",
    href: "https://sunlanchang.com/buzi",
  },
  {
    name: "Valuery",
    status: "In progress",
    accent: "options",
    description:
      "Assess option-selling opportunities in businesses you understand.",
    href: "https://valuery.ai",
  },
];

export const about =
  "Microsoft taught me how large technology organizations work. Leaving taught me what kind of work I actually care about. Since then, I've chosen ownership over prestige and trusted collaboration over convenient partnership. You can call me Chris.";
