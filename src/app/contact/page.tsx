"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ fontFamily: "'Hanken Grotesk', sans-serif", color: "#0A0A0A", background: "#fff", minHeight: "100vh" }}>
      <Nav />

      <div style={{ display: "flex", minHeight: "calc(100vh - 88px)" }}>

        {/* Left — info */}
        <div style={{ flex: 1, background: "#0A0A0A", color: "#fff", padding: "80px 64px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#a8a8a8", marginBottom: 48 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C7F73E", display: "inline-block" }} />
              Open for projects · Q3 2026
            </div>
            <h1 style={{ fontWeight: 700, fontSize: 56, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 32px" }}>
              Let&apos;s build<br />something great.
            </h1>
            <p style={{ fontSize: 18, color: "#a8a8a8", lineHeight: 1.7, maxWidth: 380, margin: "0 0 64px" }}>
              We work with founders, brands, and teams who care about craft. Tell us about your project and we&apos;ll get back within 24 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { label: "Email", value: "hello@vela.design" },
                { label: "Based in", value: "Milan, Italy" },
                { label: "Working with", value: "Clients worldwide" },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: 13, color: "#666", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</div>
                  <div style={{ fontSize: 17, color: "#fff" }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 24, paddingTop: 48 }}>
            {["Instagram", "Dribbble", "LinkedIn"].map(link => (
              <a key={link} href="#" style={{ color: "#666", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#666")}
              >{link}</a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div style={{ flex: 1, padding: "80px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {submitted ? (
            <div style={{ maxWidth: 480 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#C7F73E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 32 }}>✓</div>
              <h2 style={{ fontWeight: 700, fontSize: 36, letterSpacing: "-0.02em", margin: "0 0 16px" }}>Message sent.</h2>
              <p style={{ fontSize: 18, color: "#5c5c5c", marginBottom: 40 }}>We&apos;ll be in touch within 24 hours.</p>
              <Link href="/" style={{ color: "#0A0A0A", fontSize: 15, textDecoration: "none", borderBottom: "1px solid #0A0A0A", paddingBottom: 2 }}>← Back to home</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: 480, width: "100%", display: "flex", flexDirection: "column", gap: 32 }}>
              <h2 style={{ fontWeight: 700, fontSize: 36, letterSpacing: "-0.02em", margin: 0 }}>Start a project</h2>

              {[
                { name: "name", label: "Your name", type: "text", placeholder: "Alex Johnson" },
                { name: "email", label: "Email address", type: "email", placeholder: "alex@company.com" },
              ].map(field => (
                <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 14, fontWeight: 500, color: "#0A0A0A" }}>{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    style={{ border: "1px solid #e6e6e6", borderRadius: 12, padding: "14px 18px", fontSize: 16, outline: "none", fontFamily: "inherit", color: "#0A0A0A", background: "#fafafa" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#0A0A0A")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#e6e6e6")}
                  />
                </div>
              ))}

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontSize: 14, fontWeight: 500 }}>Budget range</label>
                <select
                  name="budget"
                  required
                  defaultValue=""
                  style={{ border: "1px solid #e6e6e6", borderRadius: 12, padding: "14px 18px", fontSize: 16, outline: "none", fontFamily: "inherit", color: "#0A0A0A", background: "#fafafa", appearance: "none" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "#0A0A0A")}
                  onBlur={e => (e.currentTarget.style.borderColor = "#e6e6e6")}
                >
                  <option value="" disabled>Select a range</option>
                  <option>Under €5k</option>
                  <option>€5k – €10k</option>
                  <option>€10k – €25k</option>
                  <option>€25k+</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontSize: 14, fontWeight: 500 }}>Tell us about your project</label>
                <textarea
                  name="message"
                  placeholder="What are you building? What's the timeline?"
                  required
                  rows={5}
                  style={{ border: "1px solid #e6e6e6", borderRadius: 12, padding: "14px 18px", fontSize: 16, outline: "none", fontFamily: "inherit", color: "#0A0A0A", background: "#fafafa", resize: "vertical" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "#0A0A0A")}
                  onBlur={e => (e.currentTarget.style.borderColor = "#e6e6e6")}
                />
              </div>

              <button
                type="submit"
                style={{ background: "#0A0A0A", color: "#fff", border: "none", borderRadius: 40, padding: "16px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer", alignSelf: "flex-start" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#333")}
                onMouseLeave={e => (e.currentTarget.style.background = "#0A0A0A")}
              >
                Send message →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
