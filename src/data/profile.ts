// All site content lives here.
// DRAFT: wording is a placeholder until Miya fills in the real text.

export const profile = {
  name: "Miya",
  // DRAFT
  role: "Дизайнер и разработчик",
  location: "Удалённо",
  // DRAFT
  oneLiner:
    "Придумываю и собираю цифровые продукты целиком: от исследования и дизайна до работающего сайта или iOS-приложения.",
  // DRAFT
  summary:
    "Работаю на стыке дизайна, исследований и кода. Мне важно, чтобы продукт был не только красивым, но и понятным: поэтому я сначала разговариваю с людьми, а потом рисую и программирую.",
  links: [{ label: "GitHub", href: "https://github.com/strangeshiro" }],
};

// DRAFT
export const principles = [
  {
    label: "Исследование",
    title: "Сначала люди, потом пиксели.",
    text: "Прежде чем рисовать, выясняю, кому и зачем это нужно.",
  },
  {
    label: "Дизайн",
    title: "Меньше, но точнее.",
    text: "Каждый элемент на странице должен отрабатывать своё место.",
  },
  {
    label: "Код",
    title: "Довожу до продакшена.",
    text: "Макет — это только начало. Я сама собираю то, что придумала.",
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
    kind: "Веб и iOS",
    text: "Справочник ста самых употребимых французских глаголов со спряжениями: веб-версия и нативное приложение на SwiftUI.",
    stack: ["HTML", "JavaScript", "SwiftUI"],
  },
  {
    name: "Сайт Ивана Кузнецова",
    year: "2026",
    kind: "Персональный сайт",
    text: "Портфолио QA-лида: от анкеты и контент-брифа до вёрстки на Astro. Тот самый стиль, в котором сделан этот сайт.",
    stack: ["Astro", "TypeScript", "CSS"],
  },
];
