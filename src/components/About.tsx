export default function About() {
  return (
    <div id="studio" style={{ padding: "96px 64px", background: "#F7F7F5" }}>
      <div style={{ display: "flex", gap: 80, alignItems: "center" }}>
        <div style={{ flex: 1.05, aspectRatio: "5/4", borderRadius: 20, overflow: "hidden" }}>
          <img src="https://picsum.photos/id/180/900/720" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32, fontSize: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#7BB800", display: "inline-block" }} />
            The studio
          </div>
          <h2 style={{
            fontWeight: 700,
            fontSize: 42,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: 28,
            marginTop: 0,
          }}>
            A small team that designs, builds, and ships the whole thing.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#5c5c5c", marginBottom: 24, marginTop: 0 }}>
            We started Vela because great design too often stalls in handoff. So we kept the team tight and the skills under one roof — strategy, design, and development working in the same room.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#5c5c5c", marginBottom: 40, marginTop: 0 }}>
            No bloated process, no endless decks. Just a focused crew turning ambitious ideas into live, fast, beautiful products.
          </p>
          <div style={{ display: "flex", gap: 48 }}>
            {[
              { value: "Since 2021", label: "Building together" },
              { value: "Remote-first", label: "Clients worldwide" },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em" }}>{stat.value}</div>
                <div style={{ fontSize: 14, color: "#8a8a8a" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
