import { Link } from "@tanstack/react-router";
import { Github, Mail, Download } from "lucide-react";
import { RESUME_URL, GITHUB_URL } from "@/lib/portfolio-data";
import { gmailComposeUrl } from "@/lib/contact-links";

const GMAIL_COMPOSE = gmailComposeUrl();

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-primary pulse-ring" />
          <span className="text-gradient font-bold">parthi.ai</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="/#about" className="hover:text-primary transition story-link">About</a>
          <a href="/#skills" className="hover:text-primary transition story-link">Skills</a>
          <a href="/#projects" className="hover:text-primary transition story-link">Projects</a>
          <a href="/#timeline" className="hover:text-primary transition story-link">Journey</a>
          <a href="/#certificates" className="hover:text-primary transition story-link">Certificates</a>
          <a href="/#contact" className="hover:text-primary transition story-link">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href={RESUME_URL} download
             className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary/15 border border-primary/40 text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition">
            <Download className="w-3.5 h-3.5" /> Resume
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
             className="p-2 rounded-md hover:bg-secondary transition" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer"
             className="p-2 rounded-md hover:bg-secondary transition" aria-label="Email via Gmail">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
