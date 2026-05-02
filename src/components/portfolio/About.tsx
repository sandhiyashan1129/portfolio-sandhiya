import { GraduationCap, Code, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedHeading } from "./AnimatedHeading";

const stats = [
  { icon: Code, label: "Projects Built", value: "10+" },
  { icon: Rocket, label: "Internships", value: "3" },
  { icon: GraduationCap, label: "Certifications", value: "6+" },
  { icon: Users, label: "Tech Communities", value: "4+" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-3">About Me</p>
          <AnimatedHeading
            as="h2"
            className="text-4xl md:text-5xl font-bold"
            segments={[
              { text: "Crafting " },
              { text: "Digital Experiences", className: "text-gradient" },
            ]}
          />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              I'm a Computer Science student specializing in the{" "}
              <span className="text-foreground font-medium">MERN stack</span> — MongoDB,
              Express, React, and Node.js. My journey into web development started with a
              simple curiosity to understand how websites work, and it has grown into a
              genuine passion for building full-stack applications.
            </p>
            <p>
              Through my coursework and self-driven exploration, I've built multiple{" "}
              <span className="text-foreground font-medium">academic and personal projects</span>{" "}
              — from REST APIs and dashboards to polished front-end interfaces — focusing on
              clean architecture, intuitive design, and writing code I'm proud of.
            </p>
            <p>
              I'm passionate about learning new technologies and applying them to{" "}
              <span className="text-foreground font-medium">real-world problems</span>. When
              I'm not coding, you'll find me exploring new frameworks, reading developer
              blogs, or collaborating with peers on side projects.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary hover:-translate-y-1 transition-smooth shadow-card"
              >
                <s.icon className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-gradient">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
