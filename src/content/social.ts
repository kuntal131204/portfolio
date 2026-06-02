export const social = [
  { url: "mailto:business.teamkuntal@gmail.com", name: "mail" },
  { url: "https://github.com/kuntal131204", name: "github" },
  { url: "https://www.linkedin.com/in//kuntalghosh-bytekicker/", name: "linkedin" },
  { url: "https://x.com/unscripted_lens", name: "x" },
  //{ url: "https://www.instagram.com/davidhckh/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
