import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: wpis dla każdej statycznej strony (np. /about, /contact).
  // Dla stron dynamicznych (np. wpisy blogowe) docelowo pobierz liste
  // slugów i zmapuj na obiekty w tym samym kształcie co poniżej.
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
