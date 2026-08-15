import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

import northlightHero from "@/assets/projects/northlight-hero.jpg";
import meridianHero from "@/assets/projects/meridian-hero.jpg";
import emberHero from "@/assets/projects/ember-hero.jpg";
import stillwaterHero from "@/assets/projects/stillwater-hero.jpg";

const projectImages: Record<string, string> = {
  "northlight-studio": northlightHero,
  "meridian-architects": meridianHero,
  "ember-and-co": emberHero,
  "stillwater-journal": stillwaterHero,
};

export default function Work() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-6">Portfolio</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-ink max-w-4xl">Selected Projects</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24 lg:gap-x-16">
            {projects.map((project, index) => (
              <ScrollReveal 
                key={project.slug} 
                delay={index * 100}
                className={index % 3 === 1 ? "md:mt-24" : ""}
              >
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  year={project.year}
                  image={projectImages[project.slug]}
                  aspectRatio={index % 2 === 0 ? "landscape" : "portrait"}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="eyebrow mb-4">Have something in mind?</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-ink mb-6">
                Let's discuss your project.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-ink-light">
                I'm always open to exploring new collaborations. 
                Reach out to discuss how we might work together.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
