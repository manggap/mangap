import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const totalPages = 300;

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: "https://mangapp.me",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: "https://mangapp.me/genres",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  for (let page = 1; page <= totalPages; page++) {
    sitemapEntries.push({
      url: `https://mangapp.me/manga-list/${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return sitemapEntries;
}
