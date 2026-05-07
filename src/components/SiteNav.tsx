import { Link } from "@tanstack/react-router";
import { Github, Mail } from "lucide-react";

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-primary pulse-ring" />
          <span className="text-gradient font-bold">parthi.ai</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="/#about" className="hover:text-primary transition">About</a>
          <a href="/#skills" className="hover:text-primary transition">Skills</a>
          <a href="/#projects" className="hover:text-primary transition">Projects</a>
          <a href="/#timeline" className="hover:text-primary transition">Journey</a>
          <a href="/#certificates" className="hover:text-primary transition">Certificates</a>
          <a href="/#contact" className="hover:text-primary transition">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/bobatea02-tech" target="_blank" rel="noopener noreferrer"
             className="p-2 rounded-md hover:bg-secondary transition" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href="#contact" className="p-2 rounded-md hover:bg-secondary transition" aria-label="Email">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
