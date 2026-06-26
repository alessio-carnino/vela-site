"use client";

import { useState } from "react";

export interface Project {
  _id: string;
  title: string;
  category: string;
  imageUrl: string | null;
  url?: string;
}

const fallbackProjects: Project[] = [
  { _id: "1", title: "Northwind", category: "Fintech · Webflow", imageUrl: "https://picsum.photos/id/48/900/620" },
  { _id: "2", title: "Ember Labs", category: "SaaS · Product", imageUrl: "https://picsum.photos/id/119/900/620" },
  { _id: "3", title: "Caldera", category: "AI · No-Code", imageUrl: "https://picsum.photos/id/160/900/620" },
  { _id: "4", title: "Atlas Studio", category: "Agency · Brand", imageUrl: "https://picsum.photos/id/20/900/620" },
];

export default function Projects({ projects }: { projects?: Project[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const items = projects && projects.length > 0 ? projects : fallbackProjects;

  return (
    <div id="work" className="projects-root">
      <div className="projects-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56 }}>
        <h2 style={{ fontWeight: 700, fontSize: 48, letterSpacing: "-0.03em", margin: 0 }}>Selected projects</h2>
        <div style={{ fontSize: 16, color: "#8a8a8a" }}>2024 — 2026</div>
      </div>

      <div className="projects-grid">
        {items.map(project => (
          <a
            key={project._id}
            href={project.url || "#"}
            style={{ textDecoration: "none", color: "#0A0A0A" }}
            onMouseEnter={() => setHovered(project._id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{ aspectRatio: "16/11", borderRadius: 18, overflow: "hidden", marginBottom: 20 }}>
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    filter: hovered === project._id ? "grayscale(0)" : "grayscale(1)",
                    transform: hovered === project._id ? "scale(1.04)" : "scale(1)",
                    transition: "transform 0.6s ease, filter 0.5s ease",
                  }}
                  alt={project.title}
                />
              ) : (
                <div style={{ width: "100%", height: "100%", background: "#e6e6e6" }} />
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em" }}>{project.title}</span>
              <span style={{ fontSize: 15, color: "#8a8a8a" }}>{project.category}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
