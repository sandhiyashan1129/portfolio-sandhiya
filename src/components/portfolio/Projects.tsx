import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { AnimatedHeading } from "./AnimatedHeading";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and achievements with a modern and responsive design.",
    image: p1,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sandhiyashan1129/sandhiya-s-digital-showcase.git",
    demo: "",
  },
  {
    title: "Museum of Candy",
    description:
      "A visually appealing website built using Bootstrap, featuring responsive design and interactive UI elements.",
    image: p2,
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/sandhiyashan1129/BOOTSTRAP.git",
    demo: "https://museum-of-candyyy.netlify.app/",
  },
  {
    title: "Pizza Website",
    description:
      "A responsive pizza ordering website with attractive UI design and smooth navigation experience.",
    image: p3,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sandhiyashan1129/webpage-projects.git",
    demo: "https://pizza-website-project.netlify.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-3">Projects</p>
          <AnimatedHeading
            as="h2"
            className="text-4xl md:text-5xl font-bold"
            segments={[
              { text: "Featured " },
              { text: "Work", className: "text-gradient" },
            ]}
          />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-glow hover:-translate-y-2 hover:border-primary transition-smooth flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-smooth">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-smooth text-sm"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground hover:scale-105 transition-smooth text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
