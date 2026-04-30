import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code, label: "Projects", value: "10+" },
  { icon: Rocket, label: "Internships", value: "3" },
  { icon: GraduationCap, label: "Certifications", value: "6+" },
  { icon: Users, label: "Happy Clients", value: "5+" },
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
          <h2 className="text-4xl md:text-5xl font-bold">
            Crafting <span className="text-gradient">Digital Experiences</span>
          </h2>
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
              I'm a final-year Computer Science student specializing in the{" "}
              <span className="text-foreground font-medium">MERN stack</span>. My journey
              into web development started with a curiosity to understand how the web works —
              today, that curiosity drives me to build full-stack applications that solve real problems.
            </p>
            <p>
              I love crafting clean, scalable architectures, designing intuitive interfaces, and
              shipping features that delight users. Whether it's a REST API, a real-time dashboard,
              or a polished UI, I focus on quality and performance at every layer.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open-source, exploring new
              frameworks, or mentoring fellow students.
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
