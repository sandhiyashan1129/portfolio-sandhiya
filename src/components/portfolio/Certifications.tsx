import { motion } from "framer-motion";
import { Award, ExternalLink, Clock } from "lucide-react";
import placeholder from "@/assets/cert-1.jpg";
import certIntellipaat from "@/assets/cert-intellipaat.jpeg";
import certYukta from "@/assets/cert-yukta.jpeg";
import certLT from "@/assets/cert-lt.jpeg";
import certCyber from "@/assets/cert-cyber.jpeg";
import certMath from "@/assets/cert-math.jpeg";

type Cert = {
  title: string;
  desc: string;
  image: string;
  link?: string;
  comingSoon?: boolean;
};

const certs: Cert[] = [
  {
    title: "Coming Soon",
    desc: "Certificate will be updated soon",
    image: placeholder,
    comingSoon: true,
  },
  {
    title: "Intellipaat: Artificial Intelligence Course",
    desc: "Completed certification in Artificial Intelligence fundamentals and applications",
    image: certIntellipaat,
    link: "https://drive.google.com/file/d/1ahG47JrtPMFDrLAJ1b-wqAyrnKXHrziA/view",
  },
  {
    title: "Workshop YUKTA: From Prompts to Agents using N8N",
    desc: "Hands-on workshop on building AI agents using prompts and automation tools",
    image: certYukta,
    link: "https://drive.google.com/file/d/17SMaXf2AKjgAc8WBmdGePCNSgcxd0W07/view",
  },
  {
    title: "L&T Course: Python Programming and Web Development",
    desc: "Completed course on Python programming and web development concepts",
    image: certLT,
    link: "https://drive.google.com/file/d/1pITWzsKPgji7SgPJ7xq12lw0QiV3CUbv/view",
  },
  {
    title: "National Level Workshop: Cybersecurity Trends",
    desc: "Attended workshop on latest trends and practices in cybersecurity",
    image: certCyber,
    link: "https://drive.google.com/file/d/1qh5js585yEj3uIaJ0A7r7YPs1bswc_3-/view",
  },
  {
    title: "1st International Conference: Transcendent Mathematics",
    desc: "Participated in international conference on advanced mathematics concepts",
    image: certMath,
    link: "https://drive.google.com/file/d/1zDehh-25sWojiexuq_sLDZuC1ydPFyPR/view",
  },
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
              className="group bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-glow hover:-translate-y-2 hover:border-primary transition-smooth flex flex-col"
            >
              <div className="aspect-video overflow-hidden bg-white relative">
                {c.comingSoon ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-card text-muted-foreground gap-2">
                    <Clock className="w-10 h-10 text-primary" />
                    <span className="text-xs uppercase tracking-widest">Coming Soon</span>
                  </div>
                ) : (
                  <img
                    src={c.image}
                    alt={c.title}
                    width={1024}
                    height={640}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-smooth"
                  />
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-primary mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-wider">Certificate</span>
                </div>
                <h3 className="text-lg font-bold mb-2 leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {c.desc}
                </p>
                {c.comingSoon ? (
                  <span className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-dashed border-border text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" /> Coming Soon
                  </span>
                ) : (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground hover:scale-105 transition-smooth text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" /> View Certificate
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
