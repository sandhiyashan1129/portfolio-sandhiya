import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import { AnimatedHeading } from "./AnimatedHeading";
import i1 from "@/assets/internship-1.jpg";
import i2 from "@/assets/internship-2.jpg";
import i3 from "@/assets/internship-3.jpg";

const internships = [
  {
    company: "Crescent Infotech",
    role: "Data Analyst Intern",
    duration: "15/12/2023 – 30/01/2024",
    description:
      "Worked on data analysis tasks and gained practical experience in handling datasets. Learned basic data processing and analytical techniques.",
    image: i1,
  },
  {
    company: "Ideal Plantek",
    role: "Web Development Intern",
    duration: "23/06/2025 – 07/07/2025",
    description:
      "Developed web-based applications and improved frontend skills. Gained experience in building responsive web interfaces.",
    image: i2,
  },
  {
    company: "Maxpro Experts",
    role: "Java Intern",
    duration: "23/12/2024 – 31/12/2024",
    description:
      "Learned Java programming concepts and basic application development. Worked on simple Java-based tasks and problem solving.",
    image: i3,
  },
];

export function Internships() {
  return (
    <section id="internships" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-3">Internships</p>
          <AnimatedHeading
            as="h2"
            className="text-4xl md:text-5xl font-bold"
            segments={[
              { text: "Professional " },
              { text: "Experience", className: "text-gradient" },
            ]}
          />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((it, i) => (
            <motion.article
              key={it.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-glow-cyan hover:-translate-y-2 hover:border-accent transition-smooth"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={it.image}
                  alt={`${it.company} workspace`}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-accent mb-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-wider">{it.company}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{it.role}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" /> {it.duration}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
