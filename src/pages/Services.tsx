import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    number: "01",
    title: "Brand Strategy & Identity",
    description: "Comprehensive brand development from positioning to visual identity. I work with you to uncover what makes your organization unique and translate that into a distinctive brand platform.",
    includes: [
      "Brand positioning and narrative",
      "Visual identity system",
      "Logo and mark design",
      "Typography and color palette",
      "Brand guidelines documentation",
    ],
    idealFor: "Organizations ready for a complete brand transformation or launch.",
  },
  {
    number: "02",
    title: "Visual Design Systems",
    description: "Scalable design systems that maintain consistency across touchpoints. Built on modular principles, these systems grow with your organization while preserving brand integrity.",
    includes: [
      "Component-based design system",
      "Digital and print templates",
      "Icon and illustration systems",
      "Motion and animation guidelines",
      "Implementation documentation",
    ],
    idealFor: "Established brands seeking to systematize their visual language.",
  },
  {
    number: "03",
    title: "Art Direction",
    description: "Creative guidance that brings brand visions to life with precision. From campaigns to content, I ensure every visual touchpoint tells a cohesive story.",
    includes: [
      "Campaign concepting",
      "Photography direction",
      "Content strategy",
      "Production oversight",
      "Quality assurance",
    ],
    idealFor: "Brands launching campaigns or creating significant content.",
  },
  {
    number: "04",
    title: "Brand Guidelines",
    description: "Comprehensive documentation that empowers teams to implement brands consistently. Clear, actionable guidelines that scale with your organization.",
    includes: [
      "Voice and tone guidelines",
      "Visual usage rules",
      "Digital asset library",
      "Training and onboarding",
      "Living documentation",
    ],
    idealFor: "Growing organizations needing brand governance tools.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We begin with deep listening. Through interviews, research, and analysis, I uncover the insights that will inform strategic decisions.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Insights become direction. I develop positioning frameworks and creative strategies that guide all design decisions.",
  },
  {
    step: "03",
    title: "Design",
    description: "Strategy takes form. Through iterative exploration, we arrive at design solutions that are both beautiful and purposeful.",
  },
  {
    step: "04",
    title: "Refinement",
    description: "Details matter. Every element is refined until the system works seamlessly across all applications.",
  },
  {
    step: "05",
    title: "Delivery",
    description: "The work comes to life. I provide comprehensive assets, guidelines, and support to ensure successful implementation.",
  },
];

const faqs = [
  {
    question: "What is your typical timeline for projects?",
    answer: "Timelines vary based on scope. A focused brand identity typically takes 8-12 weeks. Comprehensive brand systems can extend to 16-20 weeks. I'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "How do revisions work?",
    answer: "Each phase includes dedicated revision rounds built into the timeline. I believe in iterative refinement—most projects include 2-3 rounds of revisions per major deliverable.",
  },
  {
    question: "What should I prepare before we start?",
    answer: "I'll send you a comprehensive questionnaire to gather background information. Having clarity on your goals, timeline, and key stakeholders helps us start strong.",
  },
  {
    question: "Do you work with clients remotely?",
    answer: "Absolutely. While I'm based in New York, I work with clients globally. Video calls, shared workspaces, and regular check-ins ensure seamless collaboration regardless of location.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="eyebrow mb-6">Services</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-ink mb-8">How I can help.</h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-ink-light">
                I offer focused services designed to create lasting impact. Each engagement 
                is tailored to your specific needs and goals.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <ScrollReveal key={service.number} delay={index * 50}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <div className="lg:col-span-4">
                    <span className="text-sm text-ink-muted tracking-wide">{service.number}</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4">{service.title}</h2>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="text-ink-light mb-8">{service.description}</p>
                    
                    <div className="mb-8">
                      <p className="eyebrow mb-4">What's Included</p>
                      <ul className="space-y-2">
                        {service.includes.map((item, i) => (
                          <li key={i} className="text-ink-light flex items-start gap-3">
                            <span className="text-ink-muted">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-ink-muted mb-6">
                      <strong className="text-ink">Ideal for:</strong> {service.idealFor}
                    </p>

                    <Link 
                      to="/contact" 
                      className="arrow-link text-ink"
                    >
                      Get an Estimate for {service.title.toLowerCase()}
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-4">The Process</p>
            <h2 className="text-ink mb-16 md:mb-20">How we work together.</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 100}>
                <div className="relative">
                  <span className="text-sm text-ink-muted tracking-wide">{step.step}</span>
                  <h3 className="font-serif text-xl text-ink mt-4 mb-4">{step.title}</h3>
                  <p className="text-sm text-ink-light">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-3 left-full w-full h-px bg-divider -translate-x-4" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="eyebrow mb-4">FAQ</p>
                <h2 className="text-ink">Common questions.</h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ScrollReveal delay={100}>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-divider">
                      <AccordionTrigger className="text-left font-serif text-lg text-ink hover:no-underline py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-ink-light pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-ink mb-6">Ready to start?</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                I work best with clients who value collaboration and are ready 
                to invest in meaningful work.
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
