import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tuburu Sivakumar — Frontend Web Developer (React JS)" },
      { name: "description", content: "Portfolio of Tuburu Sivakumar, a fresher frontend developer building React projects and learning Python and AI/ML." },
      { property: "og:title", content: "Tuburu Sivakumar — Frontend Web Developer" },
      { property: "og:description", content: "React projects, skills, education and contact details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const GITHUB = "https://github.com/sivatuburu-bit";
const EMAIL = "sivatuburu@gmail.com";
const PHONE = "+91 6301151480";
const links = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

const skills = ["HTML5", "CSS3", "JavaScript", "React JS", "REST API", "Fetch API", "YouTube API", "JSON", "Git & GitHub", "VS Code", "DOM Manipulation", "Local Storage"];
const learning = ["Python Fundamentals", "Artificial Intelligence (AI)", "Machine Learning (ML)"];

type Project = { icon: string; title: string; tag?: string; desc: string; points: string[]; tech: string[]; live?: string; repo?: string };
const projects: Project[] = [
  { icon: "🎙️", title: "VocaTube", desc: "A voice-controlled YouTube video search platform built with React and the YouTube Data API.", points: ["Voice search & video search", "Watch history, favorites, notes", "Watch-later, saved with Local Storage"], tech: ["React", "JavaScript", "YouTube API", "CSS"], live: "https://vocatube.netlify.app" },
  { icon: "🚀", title: "DeployFlow", tag: "Concept", desc: "A DevOps dashboard concept for monitoring deployments, CI/CD pipelines, logs and alerts.", points: [], tech: ["React", "JavaScript", "CSS", "Node.js (demo backend)"] },
  { icon: "🛣️", title: "SafeRoadAI", tag: "Prototype", desc: "A software prototype concept for highway accident prevention using simulated road-risk data, hazard memory and risk-aware alerts. Not a deployed or proven system.", points: [], tech: ["Prototype", "Simulated data"] },
  { icon: "🎬", title: "Movie API Web Application", desc: "A web app that fetches movie information from a REST API and displays it dynamically on the page.", points: ["Fetch API + JSON handling", "Dynamic DOM updates"], tech: ["HTML", "CSS", "JavaScript", "REST API"] },
];

const education = [
  { title: "B.A. – History, Economics & Political Science", place: "Mrs. AVN College, Visakhapatnam", year: "2022", score: "6.9 CGPA" },
  { title: "D.El.Ed (Diploma in Elementary Education)", place: "", year: "2018", score: "77%" },
  { title: "Intermediate", place: "APTWER Junior College, Kakarapadu, Koyyuru", year: "2016", score: "732 Marks" },
  { title: "10th Class", place: "APTWER (EM) School, Marikavalasa", year: "2014", score: "7.2 CGPA" },
];
const strengths = ["Quick Learner", "Problem Solving", "Teamwork", "Self-Motivated", "Adaptability"];

const btn = "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all";
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:opacity-90 hover:shadow-card`;
const btnOutline = `${btn} border border-border bg-background text-foreground hover:border-primary hover:text-primary`;

function Section({ id, title, children, muted }: { id: string; title: string; children: ReactNode; muted?: boolean }) {
  return (
    <section id={id} className={muted ? "bg-muted" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mb-10 text-3xl font-bold">{title}<span className="text-primary">.</span></h2>
        {children}
      </div>
    </section>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-sans">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="font-display text-lg font-bold">Siva<span className="text-primary">.dev</span></a>
          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary">{l}</a>)}
            <a href="/resume.pdf" download className={btnPrimary}>Resume</a>
          </div>
          <button className="md:hidden text-2xl" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        </nav>
        {open && (
          <div className="flex flex-col gap-3 border-t border-border px-5 py-4 md:hidden">
            {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
            <a href="/resume.pdf" download className={btnPrimary}>Download Resume</a>
          </div>
        )}
      </header>

      <section id="home" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <p className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Open to entry-level roles</p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">Hi, I'm <span className="text-primary">Tuburu Sivakumar</span></h1>
        <p className="mt-4 text-xl font-medium text-muted-foreground">Frontend Web Developer (Fresher) · React JS Developer</p>
        <p className="mt-6 max-w-2xl text-muted-foreground">I build clean, API-driven web applications with React and JavaScript — and I'm currently learning Python while exploring AI/ML.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className={btnPrimary}>View Projects</a>
          <a href="#contact" className={btnOutline}>Contact Me</a>
          <a href="/resume.pdf" download className={btnOutline}>Download Resume</a>
        </div>
      </section>

      <Section id="about" title="About Me" muted>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          I'm a motivated fresher frontend developer from Andhra Pradesh, India. I enjoy building React projects that work with real APIs, such as VocaTube, a voice-controlled YouTube search platform. I use Git and GitHub for version control and like turning ideas into simple, usable interfaces. Right now I'm learning Python fundamentals and exploring the basics of AI and Machine Learning as the next step in my journey.
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s) => <div key={s} className="card !p-4 text-center font-medium">{s}</div>)}
        </div>
        <h3 className="mt-12 mb-4 text-xl font-semibold">Currently Learning</h3>
        <div className="flex flex-wrap gap-3">
          {learning.map((s) => <span key={s} className="rounded-full border border-dashed border-primary px-4 py-2 text-sm text-accent-foreground">📘 {s}</span>)}
        </div>
      </Section>

      <Section id="projects" title="Projects" muted>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="card flex flex-col">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-2xl">{p.icon}</span>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                {p.tag && <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{p.tag}</span>}
              </div>
              <p className="mt-4 text-muted-foreground">{p.desc}</p>
              {p.points.length > 0 && <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>}
              <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="rounded-md bg-accent px-2 py-1 text-xs text-accent-foreground">{t}</span>)}</div>
              <div className="mt-auto flex gap-3 pt-6">
                {p.live ? <a href={p.live} target="_blank" rel="noreferrer" className={btnPrimary}>Live Demo</a> : <span className={`${btnOutline} opacity-60`}>Demo coming soon</span>}
                {p.repo ? <a href={p.repo} target="_blank" rel="noreferrer" className={btnOutline}>GitHub</a> : <a href={GITHUB} target="_blank" rel="noreferrer" className={btnOutline}>GitHub Profile</a>}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <ol className="relative border-l-2 border-accent pl-8">
          {education.map((e) => (
            <li key={e.title} className="relative mb-8">
              <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-background bg-primary" />
              <div className="card">
                <div className="flex flex-wrap justify-between gap-2"><h3 className="font-semibold">{e.title}</h3><span className="text-sm font-semibold text-primary">{e.year}</span></div>
                {e.place && <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>}
                <p className="mt-2 text-sm">Score: <b>{e.score}</b></p>
              </div>
            </li>
          ))}
        </ol>
        <h3 className="mt-12 mb-4 text-xl font-semibold">Strengths</h3>
        <div className="flex flex-wrap gap-3">{strengths.map((s) => <span key={s} className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">✓ {s}</span>)}</div>
      </Section>

      <Section id="contact" title="Contact" muted>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-muted-foreground">I'm looking for entry-level frontend roles. Feel free to reach out!</p>
            <a href={`mailto:${EMAIL}`} className="card block">✉️ {EMAIL}</a>
            <a href="tel:+916301151480" className="card block">📞 {PHONE}</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="card block">💻 github.com/sivatuburu-bit</a>
            <a href="/resume.pdf" download className={btnPrimary}>Download Resume</a>
          </div>
          <ContactForm />
        </div>
      </Section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Tuburu Sivakumar · Built with React</footer>
    </div>
  );
}

function ContactForm() {
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const message = String(f.get("message") || "").trim();
    if (!name || !email || !message) return setError("Please fill in all fields.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Please enter a valid email.");
    setError("");
    setDone(true);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;
  };
  const input = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary";
  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-4 bg-background">
      <input name="name" placeholder="Your name" className={input} />
      <input name="email" type="email" placeholder="Your email" className={input} />
      <textarea name="message" rows={5} placeholder="Your message" className={input} />
      {error && <p className="text-sm text-destructive">{error}</p>}
      {done && <p className="text-sm text-primary">Your email app should open with the message ready to send.</p>}
      <button type="submit" className={btnPrimary}>Send Message</button>
      <p className="text-xs text-muted-foreground">This opens your own email app — no messages are stored on this site.</p>
    </form>
  );
}
