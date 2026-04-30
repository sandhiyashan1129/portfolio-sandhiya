import { motion } from "framer-motion";
import { Award } from "lucide-react";
import c1 from "@/assets/cert-1.jpg";
import c2 from "@/assets/cert-2.jpg";
import c3 from "@/assets/cert-3.jpg";
import c4 from "@/assets/cert-4.jpg";
import c5 from "@/assets/cert-5.jpg";
import c6 from "@/assets/cert-6.jpg";

const certs = [
  { title: "React — The Complete Guide", org: "Udemy", desc: "Hooks, Redux, Router, performance & testing in modern React.", image: c1 },
  { title: "Node.js Backend Development", org: "Coursera", desc: "Building scalable APIs, authentication, and middleware patterns.", image: c2 },
  { title: "MongoDB for Developers", org: "MongoDB University", desc: "Schema design, aggregation pipelines, and indexing strategies.", image: c3 },
  { title: "JavaScript (ES6+) Mastery", org: "freeCodeCamp", desc: "Advanced JS concepts: async/await, closures, prototypes & modules.", image: c4 },
  { title: "Full Stack Web Development", org: "Meta", desc: "End-to-end MERN application architecture & deployment.", image: c5 },
  { title: "Git & GitHub Essentials", org: "LinkedIn Learning", desc: "Version control workflows, branching strategies, and CI basics.", image: c6 },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-3">Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Continuous <span className="text-gradient">Learning</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-glow hover:-translate-y-2 hover:border-primary transition-smooth"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={c.image}
                  alt={c.title}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-primary mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-wider">{c.org}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
