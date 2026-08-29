export type Note = {
  title: string;
  date: string;
  href: string;
};

// v1: hardcoded sample entries. When notes become MDX files in the
// repo, build this list from their frontmatter (title, date) instead.
export const notes: Note[] = [
  {
    title: "What Microsoft taught me — and what I had to unlearn",
    date: "Aug 2026",
    href: "#notes",
  },
  {
    title: "Selling options is selling insurance",
    date: "Jul 2026",
    href: "#notes",
  },
  {
    title: "Ciyo build log №1 — marketing with zero users",
    date: "Jul 2026",
    href: "#notes",
  },
];
