export default function Contact() {
  return (
    <div id="contact" style={{ padding: 64 }}>
      <div style={{
        background: "#0A0A0A",
        color: "#fff",
        borderRadius: 28,
        padding: "96px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 48,
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, color: "#a8a8a8", marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#C7F73E", display: "inline-block" }} />
            Open for projects · Q3 2026
          </div>
          <h2 style={{ fontWeight: 700, fontSize: 64, lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 32, marginTop: 0 }}>
            Got something<br />in mind?
          </h2>
          <p style={{ fontSize: 18, color: "#a8a8a8", margin: 0 }}>
            Tell us about your project and we&apos;ll get back within a day.
          </p>
        </div>

        <a href="mailto:hello@vela.design" className="vela-contact-cta" style={{
          display: "inline-flex",
          overflow: "hidden",
          height: 68,
          borderRadius: 40,
          background: "#C7F73E",
          textDecoration: "none",
          flexShrink: 0,
        }}>
          <span className="vela-contact-inner" style={{
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.45s cubic-bezier(0.65,0,0.35,1)",
          }}>
            {[0, 1].map(i => (
              <span key={i} style={{
                height: 68,
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "0 40px",
                color: "#0A0A0A",
                fontSize: 19,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}>
                Let&apos;s build something <span style={{ fontSize: 22 }}>→</span>
              </span>
            ))}
          </span>
        </a>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "48px 16px 8px", fontSize: 15, color: "#8a8a8a" }}>
        <span>© 2026 Vela design</span>
        <div style={{ display: "flex", gap: 28 }}>
          {["Instagram", "Dribbble", "LinkedIn"].map(link => (
            <a key={link} href="#" className="vela-footer-link" style={{ color: "#8a8a8a", textDecoration: "none", transition: "color 0.2s" }}>{link}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
