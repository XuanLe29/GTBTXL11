import { useState } from "react";

const ACCENT = "#5b4fcf";

const NAV = ["HOME", "ABOUT", "WORK", "CONTACT"];

const PROJECTS = [
  {
    id: "01",
    name: "ParaBank Web Application Testing",
    category: "Software Testing",
    year: "2026",
    period: "Jun – Jul 2026",
    tags: ["Manual Testing", "BVA", "Testiny", "GitHub Issues"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=560&fit=crop&auto=format",
    bullets: [
      "Designed and executed 29 manual test cases for Registration, Login, Bill Payment, and Open New Account modules.",
      "Applied functional, validation, negative, UI, and basic security testing including Boundary Value Analysis (BVA).",
      "Identified and reported 5 defects; managed test cases in Testiny and tracked bugs through GitHub Issues.",
    ],
    stats: [{ v: "29", l: "Test Cases" }, { v: "5", l: "Defects" }, { v: "4", l: "Modules" }],
  },
  {
    id: "02",
    name: "Bookstore Management System",
    category: "Business Analysis",
    year: "2025",
    period: "Oct – Nov 2025",
    tags: ["BRD", "SRS", "RTM", "BPMN", "DFD", "UML", "Figma"],
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=560&fit=crop&auto=format",
    bullets: [
      "Gathered and analyzed business requirements through stakeholder interviews; developed BRD, SRS, RTM, and BPMN/DFD/UML diagrams.",
      "Designed UI/UX prototypes and validated workflows for sales, inventory, reporting, and role-based management modules.",
      "Collaborated with developers to ensure alignment between business requirements and system implementation.",
    ],
    stats: [{ v: "4+", l: "Documents" }, { v: "4", l: "Modules" }, { v: "3", l: "Diagram Types" }],
  },
  {
    id: "03",
    name: "Bakery Management System",
    category: "OO Analysis & Design",
    year: "2026",
    period: "Feb – Apr 2026",
    tags: ["OOAD", "45+ Use Cases", "SQL Server", "3-Tier Architecture", "Class Diagram", "Activity Diagram", "Sequence Diagram"],
    img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=560&fit=crop&auto=format",
    bullets: [
      "Analyzed multi-branch sales and inventory workflows; defined 45+ Use Cases for ordering, payment, inventory, and CRM processes.",
      "Designed Activity, Sequence, Collaboration, and Class Diagrams alongside a 3-tier architecture and SQL Server database.",
      "Built business rules, constraints, and automated triggers for inventory synchronization and order processing.",
    ],
    stats: [{ v: "45+", l: "Use Cases" }, { v: "5", l: "Diagram Types" }, { v: "3-tier", l: "Architecture" }],
  },
];

const SKILLS_BA = [
  "Requirement Analysis & Elicitation",
  "BACCM Framework",
  "Analysis & Solution Evaluation",
  "Business Process Modeling (BPMN, DFD)",
  "UML Modeling",
  "Business Rules Analysis",
  "Requirements Traceability Matrix (RTM)",
  "Stakeholder Analysis & Management",
  "Scope Definition & Management",
  "Risk Management & Quality Control",
  "UI/UX Prototyping",
];

const SKILLS_DESIGN = [
  "Object-Oriented Analysis & Design (OOAD)",
  "3-Tier Architecture Design",
  "Database Design & Modeling",
  "Use Case / Activity / Sequence / Class / Collaboration Diagrams",
  "Entity-Relationship Modeling",
  "Automated Business Rules & Triggers",
];

const SKILLS_QA = [
  "Manual Testing",
  "Test Case Design & Execution",
  "Functional / Validation / Negative / UI Testing",
  "Boundary Value Analysis (BVA)",
  "Basic Authorization Testing",
  "Defect Reporting & Result Analysis",
];

const TOOLS = [
  "Enterprise Architect", "Draw.io", "Figma", "Canva",
  "Testiny", "GitHub", "GitHub Issues", "SQL Server",
  "MS Office", "Google Workspace",
];

export default function App() {
  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8 md:px-14 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-[1.35rem] font-semibold tracking-tight" onClick={() => setActive("HOME")}>
            Le Thi Xua<span style={{ color: ACCENT }}>n</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV.map((n) => (
              <button
                key={n}
                onClick={() => scrollTo(n)}
                className="text-[11px] font-medium tracking-[0.18em] transition-colors"
                style={{ color: active === n ? ACCENT : "#888" }}
              >
                {n}
              </button>
            ))}
          </div>

          {/* Mobile burger */}
          <button className="md:hidden flex flex-col gap-[5px]" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-5 h-px bg-[#1f1f1f] transition-all ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-px bg-[#1f1f1f] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#1f1f1f] transition-all ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
        <div className="max-w-6xl mx-auto px-8 md:px-14">
          <div className="h-px bg-[#e8e8e8]" />
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#e8e8e8] px-8 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <button key={n} onClick={() => scrollTo(n)}
                className="text-left text-xs font-medium tracking-[0.18em]"
                style={{ color: active === n ? ACCENT : "#555" }}>
                {n}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HOME ── */}
      <section id="home" className="pt-[72px]">
        {/* Info bar */}
        <div className="max-w-6xl mx-auto px-8 md:px-14 py-4 flex flex-wrap items-center justify-between gap-y-3 gap-x-6">
          <p className="text-[11px] font-medium tracking-[0.14em] text-[#888] uppercase leading-relaxed">
            Business Analysis&nbsp;&nbsp;//&nbsp;&nbsp;System Design&nbsp;&nbsp;//&nbsp;&nbsp;Software Testing<br className="md:hidden" />
            <span className="hidden md:inline">&nbsp;&nbsp;/&nbsp;&nbsp;</span>Requirements &amp; QA
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-[0.13em] uppercase border border-dashed border-[#ccc] px-3 py-1.5 text-[#555]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Available for Internship 2026
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-[0.13em] uppercase border border-dashed border-[#ccc] px-3 py-1.5 text-[#555]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="4" r="2" stroke="#888" strokeWidth="1.2"/><path d="M1.5 9c0-1.933 1.567-3.5 3.5-3.5S8.5 7.067 8.5 9" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/></svg>
              Ho Chi Minh City
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a href="http://linkedin.com/in/lethixuan11" target="_blank" rel="noopener noreferrer"
              className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#888] underline underline-offset-4 hover:text-[#1f1f1f] transition-colors">
              LINKEDIN
            </a>
            <a href="mailto:lethixuan0295@gmail.com"
              className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#888] underline underline-offset-4 hover:text-[#1f1f1f] transition-colors">
              EMAIL
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-8 md:px-14"><div className="h-px bg-[#e8e8e8]" /></div>

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-8 md:px-14 pt-20 pb-32 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-[3.2rem] md:text-[4.5rem] font-semibold leading-[1.05] tracking-tight text-[#1f1f1f]">
              Le Thi<br />
              <span style={{ color: ACCENT }}>Xuan.</span>
            </h1>
          </div>
          <div className="md:pt-4">
            <p className="text-[1.85rem] md:text-[2.4rem] font-light leading-[1.35] text-[#1f1f1f]">
              I <span className="italic-serif text-[2.1rem] md:text-[2.8rem]">analyze</span> requirements, design systems, and ensure software{" "}
              <span className="italic-serif text-[2.1rem] md:text-[2.8rem]">quality.</span>
            </p>
            <button
              onClick={() => scrollTo("ABOUT")}
              className="mt-8 text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-[#888] hover:text-[#1f1f1f] transition-colors"
            >
              More about me
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="bg-[#fafafa] border-t border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-8 md:px-14 py-24">
          <h2 className="text-[3rem] md:text-[4rem] font-semibold tracking-tight mb-16">
            About <span className="italic-serif text-[3.4rem] md:text-[4.5rem]">me</span>
          </h2>

          <div className="grid md:grid-cols-[1fr_1.1fr] gap-16 items-start">
            {/* Left */}
            <div>
              <p className="text-[1rem] font-light leading-[1.8] text-[#444] mb-6">
                I'm a Management Information Systems student at the University of Finance – Marketing, Ho Chi Minh City (2023–2027), with a passion for bridging business needs and technology solutions.
              </p>
              <p className="text-[1rem] font-light leading-[1.8] text-[#444] mb-8">
                I specialize in requirements elicitation, system documentation, and manual software testing — eager to contribute analytically and proactively to high-quality software delivery.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Email", value: "lethixuan0295@gmail.com", href: "mailto:lethixuan0295@gmail.com" },
                  { label: "Phone", value: "0348 447 315", href: "tel:0348447315" },
                  { label: "LinkedIn", value: "linkedin.com/in/lethixuan11", href: "http://linkedin.com/in/lethixuan11" },
                  { label: "DOB", value: "02 September 2005" },
                ].map((r) => (
                  <div key={r.label} className="flex gap-6 items-baseline text-sm">
                    <span className="w-16 text-[#bbb] font-medium tracking-wide shrink-0">{r.label}</span>
                    {r.href
                      ? <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                          className="text-[#444] underline underline-offset-2 hover:text-[#1f1f1f] transition-colors">{r.value}</a>
                      : <span className="text-[#444]">{r.value}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — skills */}
            <div>
              <div className="mb-8">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#aaa] mb-4">Business Analysis</p>
                <div className="flex flex-col gap-2">
                  {SKILLS_BA.map((s) => (
                    <div key={s} className="flex items-center gap-3 text-sm text-[#444]">
                      <span className="w-1 h-1 rounded-full bg-[#ccc] shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#aaa] mb-4">System & Database Design</p>
                <div className="flex flex-col gap-2">
                  {SKILLS_DESIGN.map((s) => (
                    <div key={s} className="flex items-center gap-3 text-sm text-[#444]">
                      <span className="w-1 h-1 rounded-full bg-[#ccc] shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#aaa] mb-4">Software Testing</p>
                <div className="flex flex-col gap-2">
                  {SKILLS_QA.map((s) => (
                    <div key={s} className="flex items-center gap-3 text-sm text-[#444]">
                      <span className="w-1 h-1 rounded-full bg-[#ccc] shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#aaa] mb-4">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {TOOLS.map((t) => (
                    <span key={t} className="text-xs border border-[#ddd] px-3 py-1 text-[#555]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="border-t border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-8 md:px-14 pt-24 pb-12">
          <h2 className="text-[3rem] md:text-[4rem] font-semibold tracking-tight mb-4">
            Selected <span className="italic-serif text-[3.4rem] md:text-[4.5rem]">projects</span>
          </h2>
          <p className="text-sm font-light text-[#888] mb-16">Explore my academic and course projects.</p>

          {/* Grid: first project full-width, rest 2-col */}
          <div className="space-y-6">
            {/* Project 01 — full width */}
            <ProjectCard p={PROJECTS[0]} expanded={expanded === 0} onToggle={() => setExpanded(expanded === 0 ? null : 0)} fullWidth />

            {/* Projects 02 & 03 — side by side */}
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.slice(1).map((p, i) => (
                <ProjectCard key={p.id} p={p} expanded={expanded === i + 1} onToggle={() => setExpanded(expanded === i + 1 ? null : i + 1)} />
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#e8e8e8]">
            <p className="text-sm font-light text-[#888] mb-4">Explore how I approach analysis and quality assurance.</p>
            <button
              onClick={() => scrollTo("CONTACT")}
              className="text-[11px] font-medium tracking-[0.18em] uppercase underline underline-offset-4 text-[#555] hover:text-[#1f1f1f] transition-colors"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-[#e8e8e8]">
        {/* White top */}
        <div className="max-w-6xl mx-auto px-8 md:px-14 py-28 text-center">
          <h2 className="text-[3rem] md:text-[5rem] font-semibold tracking-tight">
            Let's <span className="italic-serif text-[3.4rem] md:text-[5.5rem]">connect</span>
          </h2>
          <button
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-8 inline-block text-[11px] font-medium tracking-[0.18em] uppercase text-[#888] hover:text-[#1f1f1f] transition-colors"
          >
            ( GET IN TOUCH )
          </button>
        </div>

        {/* Black section */}
        <div className="bg-[#111] text-white">
          <div className="max-w-6xl mx-auto px-8 md:px-14 py-20 grid md:grid-cols-2 gap-16 items-start">
            {/* Left: contact info */}
            <div>
              <div className="flex flex-col gap-4 mb-12">
                <a href="mailto:lethixuan0295@gmail.com"
                  className="flex items-center gap-4 border border-dashed border-[#444] px-5 py-4 text-sm text-[#ccc] hover:border-[#888] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M1 4l7 5 7-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  lethixuan0295@gmail.com
                </a>
                <a href="tel:0348447315"
                  className="flex items-center gap-4 border border-dashed border-[#444] px-5 py-4 text-sm text-[#ccc] hover:border-[#888] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 2h3l1.5 3.5L5.5 7a8.5 8.5 0 0 0 3.5 3.5l1.5-2 3.5 1.5V13A1 1 0 0 1 13 14C6.373 14 2 9.627 2 3a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                  0348 447 315
                </a>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#555] mb-5">Find me on</p>
                <div className="flex gap-8">
                  <a href="http://linkedin.com/in/lethixuan11" target="_blank" rel="noopener noreferrer"
                    className="text-sm text-[#888] underline underline-offset-4 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div id="contact-form">
              <h3 className="text-[1.8rem] font-semibold mb-8 leading-tight">
                Let me <span className="italic-serif text-[2rem]">reach</span> you
              </h3>
              <ContactForm />
            </div>
          </div>

          {/* Footer bar */}
          <div className="border-t border-[#222]">
            <div className="max-w-6xl mx-auto px-8 md:px-14 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
              <span className="text-sm font-semibold tracking-tight text-white">
                Le Thi Xua<span style={{ color: ACCENT }}>n</span>
              </span>
              <span className="text-xs text-[#555]">© 2025 · Business Analyst & Software Tester Intern · Ho Chi Minh City</span>
              <span className="text-xs text-[#555]">MIS · UFM 2023–2027</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── PROJECT CARD ─────────────────────────────────────── */

function ProjectCard({
  p, expanded, onToggle, fullWidth,
}: {
  p: typeof PROJECTS[number];
  expanded: boolean;
  onToggle: () => void;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`group cursor-pointer bg-[#f7f7f5] hover:bg-[#f0eeff] transition-colors duration-300 overflow-hidden ${fullWidth ? "" : ""}`}
      onClick={onToggle}
    >
      {/* Image */}
      <div className={`overflow-hidden bg-[#e8e8e8] ${fullWidth ? "h-[320px] md:h-[420px]" : "h-[220px] md:h-[280px]"}`}>
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
        />
      </div>

      {/* Caption */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <span className="text-xs text-[#999] mr-3">{p.id}</span>
          <span className="text-sm font-light text-[#555]">{p.category}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-light text-[#999]">{p.year}</span>
          <span className="text-xs text-[#999] transition-transform duration-300" style={{ display: "inline-block", transform: expanded ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
        </div>
      </div>

      {/* Expanded detail */}
      <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="px-6 pb-8 border-t border-[#e0e0e0] pt-5">
          <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
          <p className="text-xs text-[#aaa] mb-5">{p.period}</p>
          <ul className="space-y-3 mb-6">
            {p.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm font-light text-[#555] leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#bbb] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 flex-wrap">
            {p.tags.map((t) => (
              <span key={t} className="text-[11px] border border-[#ddd] px-3 py-1 text-[#666]">{t}</span>
            ))}
          </div>
          <div className="flex gap-8 mt-6">
            {p.stats.map((s) => (
              <div key={s.l}>
                <div className="text-xl font-semibold" style={{ color: "#5b4fcf" }}>{s.v}</div>
                <div className="text-[11px] text-[#aaa] tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── CONTACT FORM ─────────────────────────────────────── */

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  if (sent) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-semibold mb-2">Message sent!</p>
        <p className="text-sm text-[#777]">I'll get back to you within 24–48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
      {[
        { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
        { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
      ].map((f) => (
        <div key={f.id}>
          <label className="block text-[11px] tracking-[0.15em] uppercase text-[#666] mb-1.5">
            <span className="text-red-400 mr-1">*</span>{f.label}
          </label>
          <input
            type={f.type}
            required
            placeholder={f.placeholder}
            value={form[f.id as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
            className="w-full bg-transparent border-b border-[#333] focus:border-white outline-none py-2.5 text-sm text-white placeholder:text-[#444] transition-colors"
          />
        </div>
      ))}
      <div>
        <label className="block text-[11px] tracking-[0.15em] uppercase text-[#666] mb-1.5">
          <span className="text-red-400 mr-1">*</span>Message
        </label>
        <textarea
          required
          rows={4}
          placeholder="Internship opportunity, collaboration..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-transparent border-b border-[#333] focus:border-white outline-none py-2.5 text-sm text-white placeholder:text-[#444] resize-none transition-colors"
        />
      </div>
      <button
        type="submit"
        className="mt-2 text-[11px] font-medium tracking-[0.18em] uppercase border border-white px-6 py-3 text-white hover:bg-white hover:text-[#111] transition-colors"
      >
        Send Message →
      </button>
    </form>
  );
}
