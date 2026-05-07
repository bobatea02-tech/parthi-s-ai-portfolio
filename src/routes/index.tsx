import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Github, Mail, MapPin, GraduationCap, Sparkles, Brain, Rocket,
  ArrowUpRight, Award, ExternalLink, Code2, Cpu, Database, Layers, Zap,
} from "lucide-react";
import { projects, certificates, skills, timeline, CERT_DRIVE } from "@/lib/portfolio-data";
import { SiteNav } from "@/components/SiteNav";
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
};

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono glass mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for AI engineering roles & collaborations
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient glow-text">Parthi</span>
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
              <a href="https://github.com/bobatea02-tech" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border glass hover:border-primary/50 transition">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { v: "8.64", l: "CGPA" },
                { v: "5+", l: "AI Projects" },
                { v: "15+", l: "Certificates" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-4">
                  <div className="text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-primary via-accent to-primary rounded-full blur-2xl opacity-40 animate-pulse" />
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
          <div className="md:col-span-2 glass rounded-2xl p-8 leading-relaxed text-muted-foreground">
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
              className="glass rounded-2xl p-6 hover:border-primary/40 transition group">
              <div className="flex items-center gap-2 text-primary mb-4">
                {categoryIcon[s.category]}
                <h3 className="font-semibold text-foreground">{s.category}</h3>
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
      <Section id="projects" eyebrow="03 / Work" title="Projects in the wild">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.slug}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}>
              <Link to="/projects/$slug" params={{ slug: p.slug }}
                className="group block relative glass rounded-2xl p-6 h-full overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_var(--neon)]">
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-40 transition`} />

                {/* folder tab */}
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
                  {p.tech.slice(0, 5).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-secondary/60 border border-border/60">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

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
      <Section id="certificates" eyebrow="05 / Credentials" title="Certificates & Achievements">
        <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm text-muted-foreground">15+ certifications across AI, ML, security, and dev.</p>
          <a href={CERT_DRIVE} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            View full Drive folder <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certificates.map((c, i) => (
            <motion.a key={c.name + i}
              href={CERT_DRIVE} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group glass rounded-xl p-4 flex items-start gap-3 hover:border-primary/40 transition">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium truncate group-hover:text-primary transition">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{c.issuer}</div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
            </motion.a>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="06 / Connect" title="Let's build the future">
        <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative">
            <h3 className="text-3xl md:text-5xl font-bold">
              Have an <span className="text-gradient">idea</span> worth building?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              I'm open to internships, AI engineering roles, hackathons, and serious side projects.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://github.com/bobatea02-tech" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_var(--neon)] transition">
                <Github className="w-4 h-4" /> @bobatea02-tech
              </a>
              <a href="mailto:parthi.gadher@example.com"
                 className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border glass hover:border-primary/50 transition">
                <Mail className="w-4 h-4" /> Email me
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border/40 py-8 text-center text-xs text-muted-foreground font-mono">
        <span className="text-primary">{"//"}</span> built with React, TanStack & a lot of caffeine · © {new Date().getFullYear()} Parthi Gadher
      </footer>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-6">
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
    <div className="glass rounded-xl p-4 flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-primary">{icon}</div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </div>
  );
}
