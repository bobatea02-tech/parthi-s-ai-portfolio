import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: p ? `${p.title} — Parthi Gadher` : "Project — Parthi Gadher" },
        { name: "description", content: p?.description ?? "Project detail" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <Link to="/" className="text-primary underline">← Back home</Link>
    </div>
  ),
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw notFound();

  return (
    <div className="min-h-screen">
      <SiteNav />
      <div className="grid-bg absolute inset-0 opacity-30 pointer-events-none" />
      <main className="relative max-w-5xl mx-auto px-6 pt-32 pb-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-gradient-to-r ${project.accent} text-background`}>
            <Sparkles className="w-3 h-3" /> Project
          </div>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold">
            <span className="text-gradient">{project.title}</span>
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={project.repo} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90">
              <Github className="w-4 h-4" /> View Repository
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm hover:bg-secondary">
              <ExternalLink className="w-4 h-4" /> README
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>

            <h3 className="text-lg font-semibold mt-8 mb-3">Highlights</h3>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6 h-fit">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary border border-border">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
