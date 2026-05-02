import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";
import { AnimatedHeading } from "./AnimatedHeading";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>
          <AnimatedHeading
            as="h1"
            className="text-5xl md:text-7xl font-bold leading-[1.05]"
            letterDelay={0.05}
            segments={[
              { text: "Hi, I'm " },
              { text: "Sandhiya", className: "text-gradient" },
            ]}
            trailing={
              <>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                  className="text-3xl md:text-5xl text-muted-foreground font-display inline-block"
                >
                  MERN Stack Developer
                </motion.span>
              </>
            }
          />
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            A passionate full-stack developer crafting modern, performant web experiences with
            MongoDB, Express, React, and Node.js. Turning ideas into elegant code.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-smooth"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-smooth" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:border-primary transition-smooth"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer noopener"
              className="p-3 rounded-lg glass hover:text-primary hover:scale-110 transition-smooth" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"
              className="p-3 rounded-lg glass hover:text-primary hover:scale-110 transition-smooth" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-56 sm:w-64 md:w-72 lg:w-80">
            <div className="absolute -inset-4 bg-gradient-primary blur-2xl opacity-25 rounded-2xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-glow">
              <img
                src={heroImg}
                alt="Sandhiya — MERN Stack Developer"
                width={640}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
