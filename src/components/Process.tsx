"use client";

import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Discovery & Tech Audit",
    description:
      "We evaluate your existing code repositories, SEO footprint, local GBP status, and lead funnel leakages to uncover high-impact growth levers.",
    timeline: "Timeline: Days 1 – 3",
    offset: "lg:mt-0",
  },
  {
    num: "02",
    title: "Architecture Blueprint",
    description:
      "Full technical specifications, UI wireframes, WhatsApp chatbot conversational trees, and a prioritized keyword ranking hierarchy are locked in.",
    timeline: "Timeline: Days 4 – 7",
    offset: "lg:mt-4",
  },
  {
    num: "03",
    title: "Agile Sprints & Build",
    description:
      "Modern full-stack coding, API setups, Meta webhook configurations, schema integrations, and on-page optimization executed in high-velocity sprints.",
    timeline: "Timeline: Weeks 2 – 4",
    offset: "lg:mt-8",
  },
  {
    num: "04",
    title: "Launch & Scaling",
    description:
      "Zero-downtime production deployment, real-time rank tracking, automated review collection, and continuous 99.9% SLA maintenance.",
    timeline: "Timeline: Ongoing Growth",
    offset: "lg:mt-12",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="w-full bg-surface-container-low py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-5 md:px-8 lg:px-12">
        <Reveal className="mb-12 max-w-2xl">
          <span className="font-tech text-label-tech uppercase text-primary">
            Predictable Execution
          </span>
          <h2 className="mt-2 text-headline-lg tracking-tight text-on-surface">
            Our 4-Stage Scaling Framework
          </h2>
          <p className="mt-2 text-body-md text-on-surface-variant">
            From first audit to long-term market dominance, every phase is
            engineered with strict milestones, transparent roadmaps, and
            measurable KPIs.
          </p>
        </Reveal>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 z-0 hidden h-0.5 -translate-y-8 bg-gradient-to-r from-primary/20 via-primary to-primary/20 lg:block"
          />
          <div className="relative z-10 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal
                key={step.num}
                delay={index * 0.12}
                className={step.offset}
              >
                <div className="flex flex-col rounded-2xl border border-outline-variant/30 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-container font-tech text-headline-sm font-bold text-on-secondary-container shadow-inner">
                    {step.num}
                  </div>
                  <h3 className="mb-2 text-headline-sm text-on-surface">
                    {step.title}
                  </h3>
                  <p className="text-body-sm leading-relaxed text-on-surface-variant">
                    {step.description}
                  </p>
                  <div className="mt-6 border-t border-surface-container pt-3">
                    <span className="font-tech text-[11px] font-semibold text-primary">
                      {step.timeline}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
