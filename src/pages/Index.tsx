import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { HorizontalScrollGallery } from "@/components/shared/HorizontalScrollGallery";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

import northlightHero from "@/assets/projects/northlight-hero.jpg";
import meridianHero from "@/assets/projects/meridian-hero.jpg";
import emberHero from "@/assets/projects/ember-hero.jpg";
import stillwaterHero from "@/assets/projects/stillwater-hero.jpg";
import portraitMain from "@/assets/portrait-main.jpg";

const projectImages: Record<string, string> = {
  "northlight-studio": northlightHero,
  "meridian-architects": meridianHero,
  "ember-and-co": emberHero,
  "stillwater-journal": stillwaterHero,
};

const services = [
  {
    title: "Brand Strategy",
    description: "Positioning and narrative frameworks that create lasting differentiation.",
  },
  {
    title: "Visual Identity",
    description: "Distinctive design systems built on strategic foundations.",
  },
  {
    title: "Art Direction",
    description: "Creative guidance that brings brand visions to life with precision.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-dvh flex items-center pt-24 md:pt-32">
        <div className="container-editorial px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ScrollReveal>
                <p className="eyebrow mb-6">Design & Brand Strategy</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-ink mb-8">
                  Editorial Portfolio
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl text-ink-light max-w-xl mb-10">
                  Refined portfolio for creatives
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Link
                  to="/work"
                  className="arrow-link text-ink"
                >
                  View Selected Work
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </ScrollReveal>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <ScrollReveal delay={200}>
                <div className="aspect-[4/5] bg-cream-darker overflow-hidden">
                  <img
                    src={portraitMain}
                    alt="Elena Vance - Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Scroll Indicator */}
          <ScrollReveal delay={500} className="hidden lg:block mt-24">
            <div className="flex items-center gap-3 text-ink-muted">
              <div className="w-px h-12 bg-divider origin-top animate-line-grow" />
              <ArrowDown size={16} strokeWidth={1.5} className="animate-bounce" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Horizontal Scroll Gallery */}
      <HorizontalScrollGallery />

      {/* Selected Work Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Selected Work"
              title="Projects"
              className="mb-16 md:mb-20"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {projects.slice(0, 4).map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 100}>
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  year={project.year}
                  image={projectImages[project.slug]}
                  aspectRatio={index % 3 === 0 ? "portrait" : "landscape"}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 md:mt-20">
            <Link to="/work" className="arrow-link text-ink">
              View All Projects
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-6">
              <ScrollReveal>
                <p className="eyebrow mb-6">About</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <blockquote className="font-serif text-3xl md:text-4xl text-ink leading-snug mb-8">
                  "Good design is invisible. It solves problems without drawing attention to itself."
                </blockquote>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-ink-light mb-8">
                  With over a decade of experience working with brands across industries, 
                  I bring a strategic approach to every project. My work is rooted in the 
                  belief that the best brands are built on clarity, consistency, and restraint.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link to="/about" className="arrow-link text-ink">
                  Learn more about my approach
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </ScrollReveal>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 lg:col-start-8">
              <ScrollReveal delay={200}>
                <div className="aspect-[4/5] bg-cream-darker overflow-hidden">
                  <img
                    src={portraitMain}
                    alt="Elena Vance portrait"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Services"
              title="What I Do"
              className="mb-16 md:mb-20"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="border-t border-divider pt-8">
                  <h3 className="font-serif text-2xl text-ink mb-4">{service.title}</h3>
                  <p className="text-ink-light">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 md:mt-20">
            <Link to="/services" className="arrow-link text-ink">
              View All Services
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-ink mb-6">
                Let's create something{" "}
                <em className="font-serif italic">meaningful.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                Currently accepting new projects for Q1 2025. I'd love to hear about 
                what you're building.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Get an Estimate
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
