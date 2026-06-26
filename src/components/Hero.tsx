export default function Hero() {
  return (
    <div style={{ padding: "80px 64px 64px" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 15,
        color: "#0A0A0A",
        marginBottom: 40,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#7BB800", display: "inline-block" }} />
        Open for projects · Q3 2026
      </div>

      <h1 style={{
        fontWeight: 700,
        fontSize: 78,
        lineHeight: 1.0,
        letterSpacing: "-0.03em",
        maxWidth: 1180,
        marginBottom: 80,
        margin: "0 0 80px",
      }}>
        We design and build websites people actually{" "}
        <span style={{ background: "linear-gradient(transparent 60%, #C7F73E 60%)" }}>remember.</span>
      </h1>

      <div style={{ display: "flex", gap: 64, alignItems: "flex-end" }}>
        <div style={{ flex: 1, maxWidth: 500 }}>
          <p style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: "#5c5c5c",
            marginBottom: 40,
            marginTop: 0,
          }}>
            Vela is a small creative studio pairing design with no-code development. We craft websites that are sharp, intuitive, and built to convert — powered by Webflow and modern vibe-coding workflows.
          </p>
          <div style={{ display: "flex", gap: 48 }}>
            {[
              { value: "40+", label: "Projects shipped" },
              { value: "2 wks", label: "Avg. to launch" },
              { value: "100%", label: "Built in-house" },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontWeight: 700, fontSize: 36, letterSpacing: "-0.02em" }}>{stat.value}</div>
                <div style={{ fontSize: 14, color: "#8a8a8a" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1.25, display: "flex", gap: 20 }}>
          <div style={{ flex: 1, aspectRatio: "3/4", borderRadius: 14, overflow: "hidden", transform: "rotate(-2deg)" }}>
            <img src="https://picsum.photos/id/1027/600/800" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }} alt="" />
          </div>
          <div style={{ flex: 1, aspectRatio: "3/4", borderRadius: 14, overflow: "hidden", marginBottom: 24 }}>
            <img src="https://picsum.photos/id/1005/600/800" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
          </div>
          <div style={{ flex: 1, aspectRatio: "3/4", borderRadius: 14, overflow: "hidden", transform: "rotate(2deg)" }}>
            <img src="https://picsum.photos/id/1011/600/800" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
