import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Mail, MapPin, GraduationCap, Sparkles, Brain, Rocket,
  ArrowUpRight, Award, ExternalLink, Code2, Cpu, Database, Layers, Zap,
  Download, Linkedin, Search, FileText, Filter, Wrench,
} from "lucide-react";
import {
  projects, certificates, skills, timeline, CERT_DRIVE,
  RESUME_URL, CONTACT_EMAIL, LINKEDIN_URL, GITHUB_URL, PROJECT_TAGS,
  type ProjectTag,
} from "@/lib/portfolio-data";
import { SiteNav } from "@/components/SiteNav";
import { ContactForm } from "@/components/ContactForm";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import parthiPhoto from "@/assets/parthi.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const categoryIcon: Record<string, React.ReactNode> = {
  "AI / ML": <Brain className="w-4 h-4" />,
  "Languages": <Code2 className="w-4 h-4" />,
  "Frontend": <Layers className="w-4 h-4" />,
  "Backend": <Cpu className="w-4 h-4" />,
  "Data & Cloud": <Database className="w-4 h-4" />,
  "Tools": <Wrench className="w-4 h-4" />,
};

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <InteractiveBackground />
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 z-10">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-orb" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-orb" style={{ animationDelay: "4s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono glass mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for AI engineering roles & collaborations
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] hover-glitch">
              Hi, I'm <span className="shimmer-text glow-text">Parthi</span>
              <br />
              <span className="text-foreground/90">I build with AI.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Future entrepreneur & AI engineer in the making. B.Tech in AI & Data Science at SAKEC,
              shipping LLM-powered products that solve real problems — from legacy code modernization
              to ER triage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects"
                 className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_var(--neon)] transition">
                <Rocket className="w-4 h-4" />
                See my work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
              <a href={RESUME_URL} download
                 className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition font-medium">
                <Download className="w-4 h-4" /> Download Résumé
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border glass hover:border-primary/50 transition">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { v: "8.64", l: "CGPA" },
                { v: "5+", l: "AI Projects" },
                { v: "18+", l: "Certificates" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-4 gradient-border">
                  <div className="text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex flex-col items-center md:items-end">
            <div className="relative animate-magnetic">
              <div className="absolute -inset-6 bg-gradient-to-tr from-primary via-accent to-primary rounded-full blur-2xl opacity-40 animate-pulse animate-hue" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden neon-border">
                <img src={parthiPhoto} alt="Parthi Gadher" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-3 animate-float">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 font-mono text-xs animate-float" style={{ animationDelay: "1.5s" }}>
                <span className="text-primary">$</span> npm run future
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="01 / About" title="The human behind the prompts">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass rounded-2xl p-8 leading-relaxed text-muted-foreground gradient-border">
            <p>
              I'm a B.Tech student in <span className="text-foreground">AI & Data Science</span> at
              Shah and Anchor Kutchhi Engineering College, currently holding a CGPA of <span className="text-primary font-semibold">8.64</span>.
              My obsession is simple: take messy real-world problems and turn them into elegant AI products.
            </p>
            <p className="mt-4">
              Outside of class I ship — pipelines, dashboards, voice assistants, hospital triage systems.
              Long term, I'm building toward founding an AI-first company that makes powerful intelligence
              accessible to everyone.
            </p>
          </div>
          <div className="space-y-3">
            <InfoRow icon={<GraduationCap className="w-4 h-4" />} label="Education" value="B.Tech AI & DS" />
            <InfoRow icon={<MapPin className="w-4 h-4" />} label="Based in" value="Mumbai, India" />
            <InfoRow icon={<Award className="w-4 h-4" />} label="CGPA / 10th / 12th" value="8.64 · 88% · 70%" />
            <InfoRow icon={<Zap className="w-4 h-4" />} label="Focus" value="LLMs · Full-stack AI" />
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="02 / Stack" title="What I build with">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div key={s.category}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition group tilt-card gradient-border relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-primary">
                  {categoryIcon[s.category]}
                  <h3 className="font-semibold text-foreground">{s.category}</h3>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-secondary/60 overflow-hidden mb-4">
                <div className="h-full bar-fill rounded-full bg-gradient-to-r from-primary to-accent"
                     style={{ width: `${s.level}%` }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary/60 border border-border group-hover:border-primary/30 transition">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <ProjectsSection />

      {/* TIMELINE */}
      <Section id="timeline" eyebrow="04 / Journey" title="The path so far">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          {timeline.map((t, i) => (
            <motion.div key={t.year}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className={`relative flex md:items-center mb-10 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary pulse-ring" />
              <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="font-mono text-xs text-primary mb-1">{t.year}</div>
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.org}</p>
                <p className="text-sm text-foreground/80 mt-1">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATES */}
      <Section id="certificates" eyebrow="05 / Credentials" title="Certificate Gallery">
        <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm text-muted-foreground">{certificates.length} verified certificates — click any card to view the PDF.</p>
          <a href={CERT_DRIVE} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            View Drive folder <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((c, i) => (
            <motion.a key={c.file}
              href={c.file} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group relative glass rounded-xl p-5 flex items-start gap-3 hover:border-primary/40 transition tilt-card gradient-border overflow-hidden">
              <div className="absolute inset-x-0 -top-1/2 h-1/2 bg-gradient-to-b from-primary/20 to-transparent scan-line opacity-0 group-hover:opacity-100" />
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shrink-0 border border-primary/30">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold leading-snug group-hover:text-primary transition line-clamp-2">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.issuer}</div>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono text-primary/80">
                  <FileText className="w-3 h-3" /> View PDF
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
            </motion.a>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="06 / Connect" title="Let's build the future">
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 glass rounded-3xl p-8 md:p-10 gradient-border">
            <h3 className="text-2xl font-bold mb-1">Send me a message</h3>
            <p className="text-sm text-muted-foreground mb-6">Composes in Gmail with your message pre-filled — I reply within 48h.</p>
            <ContactForm />
          </div>
          <div className="md:col-span-2 space-y-3">
            <QuickLink
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`}
              external
              icon={<Mail className="w-5 h-5" />}
              label="Email (Gmail)"
              value={CONTACT_EMAIL}
              accent="from-primary/30 to-primary/5"
            />
            <QuickLink
              href={LINKEDIN_URL} external
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
              value="/in/parthi-gadher-79469a362"
              accent="from-sky-500/30 to-sky-500/5"
            />
            <QuickLink
              href={GITHUB_URL} external
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
              value="@bobatea02-tech"
              accent="from-accent/30 to-accent/5"
            />
            <QuickLink
              href={RESUME_URL} download
              icon={<Download className="w-5 h-5" />}
              label="Résumé"
              value="Parthi_Gadher_Resume.pdf"
              accent="from-fuchsia-500/30 to-fuchsia-500/5"
            />
          </div>
        </div>
      </Section>

      <footer className="relative z-10 border-t border-border/40 py-8 text-center text-xs text-muted-foreground font-mono">
        <span className="text-primary">{"//"}</span> Engineered with intent · Designed for the next decade of intelligent systems · © {new Date().getFullYear()} Parthi Gadher
      </footer>
    </div>
  );
}

function ProjectsSection() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<ProjectTag | "All">("All");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return projects.filter((p) => {
      const tagOk = active === "All" || p.tags.includes(active);
      if (!tagOk) return false;
      if (!term) return true;
      const hay = (p.title + " " + p.tagline + " " + p.description + " " + p.tech.join(" ")).toLowerCase();
      return hay.includes(term);
    });
  }, [q, active]);

  return (
    <Section id="projects" eyebrow="03 / Work" title="Projects in the wild">
      <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects, tech, keywords…"
            className="w-full pl-9 pr-3 py-2.5 rounded-md glass border border-border focus:border-primary outline-none text-sm transition"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {(["All", ...PROJECT_TAGS] as const).map((t) => (
            <button key={t} onClick={() => setActive(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono border transition ${
                active === t
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_var(--neon)]"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="glass rounded-2xl p-12 text-center text-muted-foreground">
            No projects match "{q}".
          </motion.div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.slug} layout
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Link to="/projects/$slug" params={{ slug: p.slug }}
                  className="group block relative glass rounded-2xl p-6 h-full overflow-hidden tilt-card gradient-border hover:shadow-[0_20px_60px_-15px_var(--neon)]">
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-50 transition`} />
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="text-2xl">{p.icon}</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        /projects/{p.slug}
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition" />
                  </div>

                  <h3 className="text-2xl font-bold group-hover:text-gradient transition">{p.title}</h3>
                  <p className="mt-1 text-sm text-primary font-mono">{p.tagline}</p>
                  <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-primary/15 text-primary border border-primary/30">
                        {t}
                      </span>
                    ))}
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-secondary/60 border border-border/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-12">
          <div className="font-mono text-xs text-primary tracking-widest mb-2">{eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass rounded-xl p-4 flex items-center gap-3 tilt-card">
      <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-primary">{icon}</div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </div>
  );
}

function QuickLink({ href, icon, label, value, accent, external, download }:
  { href: string; icon: React.ReactNode; label: string; value: string; accent: string; external?: boolean; download?: boolean }) {
  return (
    <a href={href}
       {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
       {...(download ? { download: true } : {})}
       className="group block relative glass rounded-2xl p-5 hover:border-primary/40 transition tilt-card gradient-border overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition`} />
      <div className="relative flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-secondary/80 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
          <div className="text-sm font-medium truncate group-hover:text-primary transition">{value}</div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
      </div>
    </a>
  );
}
