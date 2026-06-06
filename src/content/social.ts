export const social = [
  { url: "mailto:hello@kuntalghosh.in", name: "mail" },
  { url: "https://github.com/kuntal131204", name: "github" },
  { url: "https://www.linkedin.com/in//kuntalghosh-bytekicker/", name: "linkedin" },
  { url: "https://x.com/unscripted_lens", name: "x" },
  { url: "https://www.instagram.com/_bytekicker/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
