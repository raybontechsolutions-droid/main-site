"use client";

import { Check, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

type Tier = {
  name: string;
  chip: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Growth Starter",
    chip: "Local Domination",
    price: "₹1,45,000",
    description:
      "Ideal for local businesses seeking to capture high-intent geographic search and automate simple customer inquiries.",
    features: [
      "Complete Google Business Profile Optimization",
      "Core Local SEO & Citation Management",
      "Basic WhatsApp Auto-Reply Setup",
      "Monthly Health & Keyword Movement Report",
    ],
    cta: "Select Starter Plan",
  },
  {
    name: "Business Accelerator",
    chip: "Complete Suite",
    price: "₹3,25,000",
    description:
      "Full-cycle digital engine: modern custom web development, aggressive organic SEO rankings, and Meta AI chat automation.",
    features: [
      "Custom React/Next.js Web Build or Revamp",
      "Full Technical & On-Page SEO Campaign",
      "Official Meta Cloud API WhatsApp Bot & Booking",
      "24/7 Site Monitoring & 10 Dedicated Dev Hours",
      "Bi-weekly Sprint Review & Strategy Calls",
    ],
    cta: "Deploy Business Accelerator",
    featured: true,
  },
  {
    name: "Enterprise Scale",
    chip: "Dedicated Squad",
    price: "₹6,80,000",
    description:
      "Bespoke full-stack engineering squad, omnichannel multi-platform ad management, high-volume AI bots, and strict 99.99% SLAs.",
    features: [
      "Dedicated Full-Stack Engineering Team",
      "Omnichannel Paid Advertising (Meta + LinkedIn)",
      "Custom LLM AI Agents & Internal Tools",
      "1-Hour Emergency SLA & Real-time Slack Channel",
    ],
    cta: "Consult Enterprise Team",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full bg-surface-container-low py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-5 md:px-8 lg:px-12">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="font-tech text-label-tech uppercase text-primary">
            Transparent Engagements
          </span>
          <h2 className="mt-2 text-headline-lg tracking-tight text-on-surface">
            Structured for Sustainable Growth
          </h2>
          <p className="mt-2 text-body-md text-on-surface-variant">
            No hidden fees or bloated retainers. Direct access to principal
            developers and certified growth tacticians.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.12} className="h-full">
              <div
                className={`relative flex h-full flex-col justify-between rounded-2xl bg-white p-6 ${
                  tier.featured
                    ? "border-2 border-primary pt-8 shadow-xl"
                    : "border border-outline-variant/30 shadow-sm"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 font-tech text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                    Most Popular & High Impact
                  </div>
                )}
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-tech text-label-tech font-bold uppercase text-primary">
                      {tier.name}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-caption ${
                        tier.featured
                          ? "bg-secondary-container text-on-secondary-container"
                          : "bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      {tier.chip}
                    </span>
                  </div>
                  <div className="mb-4 flex items-baseline gap-1">
                    <span className="text-headline-lg font-extrabold text-on-surface">
                      {tier.price}
                    </span>
                    <span className="text-body-sm text-on-surface-variant">
                      / month
                    </span>
                  </div>
                  <p className="mb-6 text-body-sm text-on-surface-variant">
                    {tier.description}
                  </p>
                  <ul className="mb-8 space-y-3 text-body-sm text-on-surface">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        {tier.featured ? (
                          <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-primary" />
                        ) : (
                          <Check className="h-[18px] w-[18px] shrink-0 text-primary" />
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#estimator"
                  className={`w-full rounded-xl py-3 text-center text-label-button transition-all ${
                    tier.featured
                      ? "bg-primary py-3.5 text-on-primary shadow-lg shadow-primary/20 hover:bg-primary-container hover:text-on-primary-container"
                      : "bg-surface-container text-on-surface hover:bg-secondary-container hover:text-on-secondary-container"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
