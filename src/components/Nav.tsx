"use client";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
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
            className={styles.navLink}
            style={{ color: i === 0 ? "#0A0A0A" : "#8a8a8a" }}
          >
            {item}
          </a>
        ))}
      </nav>

      <a href="#contact" className={styles.ctaBtn}>
        <span className={styles.ctaInner}>
          {[0, 1].map(i => (
            <span key={i} className={styles.ctaLabel}>
              <span className={styles.dot} />
              Start a project
            </span>
          ))}
        </span>
      </a>
    </div>
  );
}
