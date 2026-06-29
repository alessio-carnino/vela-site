import { client, urlFor } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Contact from "@/components/Contact";

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
          <PortableText
            value={project.content}
            components={{
              block: {
                normal: ({ children }) => (
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: "#3a3a3a", margin: "0 0 28px" }}>{children}</p>
                ),
                h2: ({ children }) => (
                  <h2 style={{ fontWeight: 700, fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "64px 0 20px" }}>{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 style={{ fontWeight: 700, fontSize: 24, letterSpacing: "-0.01em", lineHeight: 1.2, margin: "48px 0 16px" }}>{children}</h3>
                ),
                blockquote: ({ children }) => (
                  <blockquote style={{ borderLeft: "3px solid #C7F73E", margin: "40px 0", paddingLeft: 28, fontSize: 20, color: "#5c5c5c", fontStyle: "italic" }}>{children}</blockquote>
                ),
              },
              marks: {
                strong: ({ children }) => <strong style={{ fontWeight: 700, color: "#0A0A0A" }}>{children}</strong>,
                em: ({ children }) => <em style={{ fontStyle: "italic" }}>{children}</em>,
                link: ({ children, value }) => (
                  <a href={value?.href} target="_blank" rel="noopener noreferrer" style={{ color: "#0A0A0A", textDecoration: "underline", textUnderlineOffset: 3 }}>{children}</a>
                ),
              },
              types: {
                image: ({ value }) => (
                  <div style={{ margin: "48px 0" }}>
                    <img src={urlFor(value).url()} alt={value.alt || ""} style={{ width: "100%", borderRadius: 16, display: "block" }} />
                  </div>
                ),
              },
              list: {
                bullet: ({ children }) => <ul style={{ margin: "0 0 28px", paddingLeft: 24, fontSize: 18, lineHeight: 1.8, color: "#3a3a3a" }}>{children}</ul>,
                number: ({ children }) => <ol style={{ margin: "0 0 28px", paddingLeft: 24, fontSize: 18, lineHeight: 1.8, color: "#3a3a3a" }}>{children}</ol>,
              },
              listItem: {
                bullet: ({ children }) => <li style={{ marginBottom: 8 }}>{children}</li>,
                number: ({ children }) => <li style={{ marginBottom: 8 }}>{children}</li>,
              },
            }}
          />
        </div>
      )}
      {/* Footer */}
      <div style={{ padding: "0 64px 48px" }}>
        <Link
          href="/#work"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "#0A0A0A",
            fontSize: 16,
            fontWeight: 500,
            marginBottom: 48,
          }}
        >
          ← Back to projects
        </Link>
      </div>
      <Contact />
    </div>
  );
}
