import { client, urlFor } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

async function getProject(slug: string) {
  if (!client) return null;
  try {
    return await client.fetch(
      `*[_type == "project" && slug.current == $slug][0] {
        _id, title, category, tagline, image, url, year, content
      }`,
      { slug }
    );
  } catch {
    return null;
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) {
    return (
      <div style={{ padding: "120px 64px", fontFamily: "Hanken Grotesk, sans-serif" }}>
        <p>Project not found.</p>
        <Link href="/">← Back</Link>
      </div>
    );
  }

  const imageUrl = project.image ? urlFor(project.image).url() : null;

  return (
    <div style={{ fontFamily: "'Hanken Grotesk', sans-serif", color: "#0A0A0A", background: "#fff", minHeight: "100vh" }}>
      {/* Nav */}
      <div style={{ height: 88, display: "flex", alignItems: "center", padding: "0 64px", borderBottom: "1px solid #efefef", position: "sticky", top: 0, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", zIndex: 10 }}>
        <Link href="/#work" style={{ textDecoration: "none", color: "#0A0A0A", fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}>
          ← All projects
        </Link>
      </div>

      {/* Hero */}
      <div style={{ padding: "72px 64px 0" }}>
        <div style={{ fontSize: 14, color: "#8a8a8a", marginBottom: 16 }}>{project.category} · {project.year}</div>
        <h1 style={{ fontWeight: 700, fontSize: 72, letterSpacing: "-0.03em", lineHeight: 1, margin: "0 0 24px" }}>{project.title}</h1>
        {project.tagline && (
          <p style={{ fontSize: 22, color: "#5c5c5c", maxWidth: 600, marginBottom: 56 }}>{project.tagline}</p>
        )}
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#0A0A0A", color: "#fff", padding: "14px 28px", borderRadius: 40, textDecoration: "none", fontSize: 15, fontWeight: 500, marginBottom: 56 }}>
            Visit site →
          </a>
        )}
      </div>

      {/* Cover image */}
      {imageUrl && (
        <div style={{ padding: "0 64px", marginBottom: 80 }}>
          <img src={imageUrl} alt={project.title} style={{ width: "100%", borderRadius: 20, display: "block" }} />
        </div>
      )}

      {/* Content */}
      {project.content && (
        <div style={{ padding: "0 64px 120px", maxWidth: 760 }}>
          <div style={{ fontSize: 18, lineHeight: 1.75, color: "#2a2a2a" }}>
            <PortableText value={project.content} />
          </div>
        </div>
      )}
    </div>
  );
}
