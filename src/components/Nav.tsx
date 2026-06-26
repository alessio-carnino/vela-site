"use client";

export default function Nav() {
  return (
    <>
      <style>{`
        .vela-cta:hover .vela-cta-inner { transform: translateY(-50%) !important; }
        .vela-nav-link:hover { color: #0A0A0A !important; }
        .vela-footer-link:hover { color: #0A0A0A !important; }
        .vela-contact-cta:hover .vela-contact-inner { transform: translateY(-50%); }
      `}</style>
      <div style={{
        height: 88,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 64px",
        position: "sticky",
        top: 0,
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 10,
        borderBottom: "1px solid #efefef",
      }}>
        <div style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>Vela design</div>

        <nav style={{ display: "flex", gap: 36, fontSize: 16 }}>
          {["Home", "Work", "Services", "Studio"].map((item, i) => (
            <a
              key={item}
              href={i === 0 ? "#" : `#${item.toLowerCase()}`}
              className="vela-nav-link"
              style={{ color: i === 0 ? "#0A0A0A" : "#8a8a8a", textDecoration: "none", transition: "color 0.2s" }}
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="vela-cta" style={{
          display: "inline-block",
          overflow: "hidden",
          height: 48,
          borderRadius: 40,
          background: "#0A0A0A",
          textDecoration: "none",
        }}>
          <span className="vela-cta-inner" style={{
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.45s cubic-bezier(0.65,0,0.35,1)",
          }}>
            {[0, 1].map(i => (
              <span key={i} style={{
                height: 48,
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: "0 24px",
                color: "#fff",
                fontSize: 15,
                fontWeight: 500,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C7F73E", display: "inline-block", flexShrink: 0 }} />
                Start a project
              </span>
            ))}
          </span>
        </a>
      </div>
    </>
  );
}
