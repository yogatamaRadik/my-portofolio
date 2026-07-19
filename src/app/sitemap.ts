import type { MetadataRoute } from "next";
import { EXPERIENCE, PROJECTS } from "@/lib/data";

const BASE_URL = "https://my-portofolio-six-smoky.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const experienceRoutes = EXPERIENCE.map((item) => ({
    url: `${BASE_URL}/experience/${item.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = PROJECTS.map((item) => ({
    url: `${BASE_URL}/projects/${item.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...experienceRoutes, ...projectRoutes];
}