"use client";

import {
  CheckCircle2,
  MapPin,
  Megaphone,
  MessageCircle,
  ScanSearch,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  badges: string[];
  points: string[];
  deliverable: string;
};

const services: Service[] = [
  {
    icon: Terminal,
    title: "Full-Stack Web & App Development",
    description:
      "Tailor-engineered digital platforms built with React, Next.js, and scalable cloud microservices. Blazing-fast page loads, headless architectures, and enterprise security.",
    badges: ["Next.js 15", "Node.js", "PostgreSQL"],
    points: [
      "Custom API design & integration",
      "Server-side rendering & edge optimization",
      "Database schema & high-concurrency scaling",
    ],
    deliverable: "Deliverable: Production-ready source repo + CI/CD",
  },
  {
    icon: ScanSearch,
    title: "Technical SEO & Organic Ranking",
    description:
      "We fix crawl budgets, architect content clusters, and implement rigorous on-page structures that push high-intent keywords onto Google's coveted Page 1.",
    badges: ["Core Web Vitals", "Semantic SEO", "Schema 2.0"],
    points: [
      "Lighthouse 95+ performance compliance",
      "High-domain-authority backlink strategy",
      "Automated weekly rank movement tracking",
    ],
    deliverable: "Deliverable: Live rank tracking dashboard + monthly gains",
  },
  {
    icon: MapPin,
    title: "Google Business Profile (GBP) Domination",
    description:
      "Capture local commercial searches. We verify, optimize, and push your company into the 3-Pack with automated 5-star review acquisition funnels.",
    badges: ["Google Map Pack", "Geo Citations", "Reviews AI"],
    points: [
      "Complete profile audit & instant verification",
      "Geo-tagged photo posts & product catalog sync",
      "Automated SMS/Email review generation triggers",
    ],
    deliverable: "Deliverable: Top 3 Map Pack visibility & direct phone calls",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp AI Bots & Conversational Flows",
    description:
      "Official Meta Cloud API integrations powered by natural language agents that capture leads, qualify budgets, answer questions, and sync into CRM in real time.",
    badges: ["Meta Cloud API", "LLM Agents", "Instant Booking"],
    points: [
      "Meta Green Tick application assistance",
      "Instant appointment booking & reminder workflows",
      "Automated broadcast campaigns & segmentation",
    ],
    deliverable: "Deliverable: Custom conversational bot + HubSpot/Sheets sync",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing & Paid Funnels",
    description:
      "We design and execute data-backed paid acquisition funnels on Meta and LinkedIn that deliver measurable pipeline growth rather than vanity likes.",
    badges: ["Meta Ads", "LinkedIn B2B", "Creative Testing"],
    points: [
      "High-converting creative design & video hooks",
      "Hyper-targeted audience segmentation & lookalikes",
      "Full-funnel attribution tracking via CAPI",
    ],
    deliverable: "Deliverable: Weekly ROAS optimization & ad creative assets",
  },
  {
    icon: ShieldCheck,
    title: "Website Management & Dev Retainer",
    description:
      "Sleep soundly knowing your digital presence is monitored round-the-clock. Automated vulnerability patching, backups, content updates, and zero downtime guarantees.",
    badges: ["Daily Backups", "Multi-Uptime", "Dedicated Dev Hours"],
    points: [
      "Hourly health checks & SSL renew monitoring",
      "Emergency hotline SLA within 60 minutes",
      "Dedicated on-demand feature iterations",
    ],
    deliverable: "Deliverable: Monthly health log & guaranteed 1-hr response",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-surface-container-low py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-5 md:px-8 lg:px-12">
        <Reveal className="mb-12 max-w-3xl">
          <span className="font-tech text-label-tech uppercase text-primary">
            Comprehensive Solutions Catalog
          </span>
          <h2 className="mt-2 text-headline-lg tracking-tight text-on-surface">
            Everything You Need to Dominate Your Category Online.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={(index % 3) * 0.1}
              className="h-full"
            >
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-outline-variant/30 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-wrap justify-end gap-1.5">
                      {service.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full bg-surface-container px-2 py-0.5 font-tech text-[11px] font-medium text-on-surface-variant"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mb-2 text-headline-sm font-semibold text-on-surface">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-body-sm leading-relaxed text-on-surface-variant">
                    {service.description}
                  </p>
                  <ul className="mb-6 space-y-2 text-body-sm text-on-surface">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-outline-variant/30 pt-3">
                  <span className="font-tech text-[10px] font-bold uppercase tracking-wider text-primary">
                    {service.deliverable}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
