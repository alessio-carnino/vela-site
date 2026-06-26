export default function Contact() {
  return (
    <div id="contact" className="contact-root">
      <div className="contact-card">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, color: "#a8a8a8", marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#C7F73E", display: "inline-block" }} />
            Open for projects · Q3 2026
          </div>
          <h2 className="contact-title">Got something<br />in mind?</h2>
          <p style={{ fontSize: 18, color: "#a8a8a8" }}>
            Tell us about your project and we&apos;ll get back within a day.
          </p>
        </div>

        <a href="mailto:hello@vela.design" className="contact-cta">
          <span className="contact-cta-inner">
            {[0, 1].map(i => (
              <span key={i} className="contact-cta-label">
                Let&apos;s build something <span style={{ fontSize: 22 }}>→</span>
              </span>
            ))}
          </span>
        </a>
      </div>

      <div className="footer-row">
        <span>© 2026 Vela design</span>
        <div className="footer-links">
          {["Instagram", "Dribbble", "LinkedIn"].map(link => (
            <a key={link} href="#" className="footer-link">{link}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
