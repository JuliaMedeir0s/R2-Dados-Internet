import type { MetadataRoute } from "next";
import { SITE_NOINDEX, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Ambiente de teste/aprovação: nada indexado (ver lib/site.ts).
  if (SITE_NOINDEX) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
