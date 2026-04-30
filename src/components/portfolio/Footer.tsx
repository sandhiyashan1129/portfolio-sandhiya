import { Github, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          © {new Date().getFullYear()} Sandhiya. Crafted with
          <Heart className="w-4 h-4 text-primary fill-primary" /> and lots of coffee.
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="p-2.5 rounded-lg glass hover:text-primary hover:scale-110 transition-smooth"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="p-2.5 rounded-lg glass hover:text-primary hover:scale-110 transition-smooth"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
