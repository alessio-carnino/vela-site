"use client";

import { useState } from "react";

const services = [
  { num: "01", title: "Product & UI Design", desc: "Brand systems and interfaces designed around real user behaviour — clean, considered, ready to build." },
  { num: "02", title: "Webflow Development", desc: "Pixel-accurate, scalable Webflow builds with CMS and interactions — fast to ship, easy to maintain." },
  { num: "03", title: "No-Code & Vibe Coding", desc: "AI-assisted, no-code workflows to prototype and ship tools fast — validated ideas in days, not quarters." },
  { num: "04", title: "Motion & Interaction", desc: "Scroll moments and micro-interactions that add personality without ever getting in the way." },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div id="services" className="services-root">
      <div className="services-header">
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#7BB800", display: "inline-block" }} />
          Services
        </div>
        <h2 className="services-headline">Everything you need to go from idea to launch.</h2>
      </div>

      <div>
        {services.map((s, i) => (
          <a
            key={s.num}
            href="#"
            className="service-row"
            style={{
              padding: hovered === i ? "36px 8px 36px 24px" : "36px 8px",
              borderTop: "1px solid #e6e6e6",
              borderBottom: i === services.length - 1 ? "1px solid #e6e6e6" : "none",
              textDecoration: "none",
              color: "#0A0A0A",
              background: hovered === i ? "#F7F7F5" : "transparent",
              transition: "padding 0.35s ease, background 0.35s ease",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: "#7BB800", width: 48, flexShrink: 0 }}>{s.num}</span>
            <span className="service-title">{s.title}</span>
            <span className="service-desc">{s.desc}</span>
            <span className="service-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
