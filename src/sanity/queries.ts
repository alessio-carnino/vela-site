import { client, urlFor } from "./client";
import { Project } from "@/components/Projects";

export async function getProjects(): Promise<Project[]> {
  if (!client) return [];

  try {
    const raw = await client.fetch(
      `*[_type == "project"] | order(year desc) {
        _id,
        title,
        category,
        tagline,
        "slug": slug.current,
        image,
        url
      }`
    );

    return raw.map((p: { _id: string; title: string; category: string; tagline?: string; slug?: string; image?: object; url?: string }) => ({
      _id: p._id,
      title: p.title,
      category: p.category,
      tagline: p.tagline,
      slug: p.slug,
      imageUrl: p.image ? urlFor(p.image).url() : null,
      url: p.url,
    }));
  } catch {
    return [];
  }
}
