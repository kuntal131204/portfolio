import type { Locale } from "../../i18n/types";

// your projects
export const projectIds = [
  "ai-assistant",
  "data-viz",
  "nexus",
  "healthbridge",
  "todo",
  "smartghat",
  "music-player",
  "portfolio3d"
];

function simplifyModules(glob: Record<string, any>) {
  const result: Record<string, any> = {};
  for (const [path, mod] of Object.entries(glob)) {
    const match = path.match(/\/([a-z0-9_-]+)\.ts$/i);
    if (match) result[match[1] as string] = mod;
  }
  return result;
}

// ✅ ONLY EN (remove DE completely)
export const projectModules = {
  en: simplifyModules(import.meta.glob("./en/*.ts", { eager: true })),
} as const satisfies Record<"en", Record<string, any>>;
