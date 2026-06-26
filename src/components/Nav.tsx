"use client";

export default function Nav() {
  return (
    <div className="nav-root">
      <div style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>Vela design</div>

      <nav className="nav-links">
        {["Home", "Work", "Services", "Studio"].map((item, i) => (
          <a
            key={item}
            href={i === 0 ? "#" : `#${item.toLowerCase()}`}
            className="nav-link"
            style={{ color: i === 0 ? "#0A0A0A" : "#8a8a8a" }}
          >
            {item}
          </a>
        ))}
      </nav>

      <a href="#contact" className="nav-cta">
        <span className="nav-cta-inner">
          {[0, 1].map(i => (
            <span key={i} className="nav-cta-label">
              <span className="nav-dot" />
              Start a project
            </span>
          ))}
        </span>
      </a>
    </div>
  );
}
