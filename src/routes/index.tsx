import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Internships } from "@/components/portfolio/Internships";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sandhiya — MERN Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Sandhiya, a MERN stack developer specializing in React, Node.js, Express, and MongoDB. Explore projects, internships, and certifications.",
      },
      { property: "og:title", content: "Sandhiya — MERN Stack Developer" },
      {
        property: "og:description",
        content: "Modern full-stack web experiences crafted with the MERN stack.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
