import { motion } from "framer-motion";
import { AnimatedHeading } from "./AnimatedHeading";

const skills = [
  { name: "React", level: 92, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", level: 88, color: "from-green-400 to-emerald-500" },
  { name: "Express", level: 85, color: "from-yellow-400 to-orange-500" },
  { name: "MongoDB", level: 86, color: "from-emerald-400 to-green-600" },
  { name: "JavaScript / TypeScript", level: 90, color: "from-yellow-400 to-amber-500" },
  { name: "Tailwind CSS", level: 94, color: "from-sky-400 to-cyan-500" },
  { name: "Git & GitHub", level: 88, color: "from-orange-400 to-red-500" },
  { name: "REST APIs", level: 87, color: "from-violet-400 to-purple-500" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-3">Skills</p>
          <AnimatedHeading
            as="h2"
            className="text-4xl md:text-5xl font-bold"
            segments={[
              { text: "My " },
              { text: "Tech Stack", className: "text-gradient" },
            ]}
          />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${s.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
