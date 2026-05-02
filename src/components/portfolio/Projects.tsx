import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { AnimatedHeading } from "./AnimatedHeading";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "ShopSphere — E-Commerce Platform",
    description:
      "A full-stack e-commerce app with product catalog, cart, Stripe payments, and an admin dashboard for inventory management.",
    image: p1,
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "ConnectU — Social Media App",
    description:
      "A real-time social platform with posts, likes, comments, follow system, and live chat powered by Socket.io.",
    image: p2,
    tech: ["MERN", "Socket.io", "JWT", "Cloudinary"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "TaskFlow — Kanban Manager",
    description:
      "Drag-and-drop Kanban board with team collaboration, deadlines, and analytics. Built for productivity-focused teams.",
    image: p3,
    tech: ["React", "Redux", "Express", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
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
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-smooth text-sm"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground hover:scale-105 transition-smooth text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
