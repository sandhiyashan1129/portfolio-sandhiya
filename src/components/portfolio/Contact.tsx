import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { AnimatedHeading } from "./AnimatedHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon. ✨");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-3">Contact</p>
          <AnimatedHeading
            as="h2"
            className="text-4xl md:text-5xl font-bold"
            segments={[
              { text: "Let's " },
              { text: "Build Together", className: "text-gradient" },
            ]}
          />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Got a project in mind or just want to say hi? Drop me a message — I'd love to hear from you.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "ssandhiya5542@gmail.com", href: "mailto:ssandhiya5542@gmail.com" },
              { icon: Phone, label: "Phone", value: "7708875542", href: "tel:+917708875542" },
              { icon: MapPin, label: "Address", value: "Salem, Tamil Nadu, India" },
            ].map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 p-5 rounded-xl bg-gradient-card border border-border hover:border-primary transition-smooth"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <info.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</div>
                  {info.href ? (
                    <a href={info.href} className="font-medium mt-1 block break-words hover:text-primary transition-smooth">
                      {info.value}
                    </a>
                  ) : (
                    <div className="font-medium mt-1 break-words">{info.value}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-gradient-card border border-border rounded-2xl p-8 space-y-5 shadow-card"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-muted-foreground">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-smooth"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-muted-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-smooth"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-muted-foreground">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-smooth resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
