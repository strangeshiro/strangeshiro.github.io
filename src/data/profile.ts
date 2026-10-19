// All site content lives here.
// DRAFT: wording is a placeholder until Miya fills in the real text.

export const profile = {
  name: "Miya",
  // DRAFT
  role: "Designer and developer",
  location: "Remote",
  // DRAFT
  oneLiner:
    "I design and build digital products end to end: from research and design to a working website or iOS app.",
  // DRAFT
  summary:
    "I work where design, research and code meet. I want a product to be clear, not just good-looking, so I talk to people first and only then draw and write code.",
  links: [{ label: "GitHub", href: "https://github.com/strangeshiro" }],
};

// DRAFT
export const principles = [
  {
    label: "Research",
    title: "People first, pixels second.",
    text: "Before I draw anything, I find out who it is for and why they need it.",
  },
  {
    label: "Design",
    title: "Less, but sharper.",
    text: "Every element on the page has to earn its place.",
  },
  {
    label: "Code",
    title: "I ship it.",
    text: "A mockup is only the start. I build what I design myself.",
  },
];

export type Project = {
  name: string;
  year: string;
  kind: string;
  text: string;
  stack: string[];
  href?: string;
};

// DRAFT: descriptions are guesses from the repositories, Miya should rewrite them.
export const projects: Project[] = [
  {
    name: "French Verbs",
    year: "2026",
    kind: "Web and iOS",
    text: "A reference of the 100 most common French verbs with their conjugations: a web version and a native SwiftUI app.",
    stack: ["HTML", "JavaScript", "SwiftUI"],
  },
];
