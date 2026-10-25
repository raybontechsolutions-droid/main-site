"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CheckSquare,
  ChevronDown,
  Code2,
  MapPin,
  Megaphone,
  MessageCircle,
  ShieldCheck,
  Square,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type ServiceOption = {
  id: string;
  label: string;
  sub: string;
  icon: LucideIcon;
  defaultChecked: boolean;
};

const serviceOptions: ServiceOption[] = [
  {
    id: "fullstack",
    label: "Full-Stack Dev",
    sub: "Custom Web/App",
    icon: Code2,
    defaultChecked: true,
  },
  {
    id: "seo",
    label: "SEO Optimization",
    sub: "Rank #1 on Google",
    icon: TrendingUp,
    defaultChecked: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp AI Bot",
    sub: "Meta Official API",
    icon: MessageCircle,
    defaultChecked: true,
  },
  {
    id: "gbp",
    label: "Google Business",
    sub: "Local Map Pack",
    icon: MapPin,
    defaultChecked: false,
  },
  {
    id: "smm",
    label: "Social Paid Ads",
    sub: "Meta & LinkedIn Funnels",
    icon: Megaphone,
    defaultChecked: false,
  },
  {
    id: "maint",
    label: "Web Maintenance",
    sub: "24/7 SLA & Backups",
    icon: ShieldCheck,
    defaultChecked: true,
  },
];

function timelineFor(count: number) {
  if (count <= 1) return "1 – 2 Weeks to Deployment";
  if (count <= 3) return "3 – 4 Weeks to Deployment";
  return "4 – 6 Weeks (Complete Architecture Sprint)";
}

const inputClasses =
  "w-full rounded-xl bg-surface-container-low px-4 py-3 text-body-sm text-on-surface transition-all placeholder:text-outline/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary";

export default function Estimator() {
  const [selected, setSelected] = useState<Set<string>>(
    () =>
      new Set(
        serviceOptions
          .filter((option) => option.defaultChecked)
          .map((option) => option.id),
      ),
  );
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section
      id="estimator"
      className="w-full bg-surface-container py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-5 md:px-8 lg:px-12">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <span className="font-tech text-label-tech uppercase text-primary">
            Interactive Scope Calculator
          </span>
          <h2 className="mt-2 text-headline-lg tracking-tight text-on-surface">
            Configure Your Solution & Get an Instant Plan
          </h2>
          <p className="mt-2 text-body-md text-on-surface-variant">
            Select the capabilities your business requires below to receive an
            estimated timeline and book a dedicated engineering review.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-outline-variant/30 bg-white p-6 shadow-lg md:p-10">
            <form
              className="flex flex-col gap-8"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              {/* 1. Multi-select services */}
              <div>
                <label className="mb-3 block text-headline-sm text-on-surface">
                  1. Select Required Services (Multi-select)
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {serviceOptions.map((option) => {
                    const checked = selected.has(option.id);
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => toggle(option.id)}
                        aria-pressed={checked}
                        className={`flex cursor-pointer select-none flex-col justify-between rounded-xl p-4 text-left transition-all hover:bg-surface-container ${
                          checked
                            ? "bg-secondary-container/40"
                            : "bg-surface-container-low"
                        }`}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <option.icon className="h-[22px] w-[22px] text-primary" />
                          {checked ? (
                            <CheckSquare className="h-[18px] w-[18px] text-primary" />
                          ) : (
                            <Square className="h-[18px] w-[18px] text-outline" />
                          )}
                        </div>
                        <div>
                          <span className="block text-[15px] font-semibold text-on-surface">
                            {option.label}
                          </span>
                          <span className="text-caption text-on-surface-variant">
                            {option.sub}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic estimates */}
              <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-surface-container p-4 sm:flex-row">
                <div>
                  <span className="font-tech text-label-tech font-bold uppercase text-primary">
                    Estimated Delivery Velocity
                  </span>
                  <p className="text-headline-sm text-on-surface">
                    {timelineFor(selected.size)}
                  </p>
                </div>
                <div className="sm:border-l sm:border-outline-variant/40 sm:pl-6 sm:text-right">
                  <span className="font-tech text-label-tech uppercase text-on-surface-variant">
                    Architecture Fit
                  </span>
                  <p className="text-headline-sm text-primary">
                    High Synergy (Recommended)
                  </p>
                </div>
              </div>

              {/* 2. Lead capture fields */}
              <div>
                <label className="mb-3 block text-headline-sm text-on-surface">
                  2. Your Contact & Business Information
                </label>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <span className="font-tech text-label-tech text-on-surface-variant">
                      Full Name *
                    </span>
                    <input
                      required
                      type="text"
                      placeholder="Sarah Jenkins"
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-tech text-label-tech text-on-surface-variant">
                      Work Email *
                    </span>
                    <input
                      required
                      type="email"
                      placeholder="sarah@company.com"
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-tech text-label-tech text-on-surface-variant">
                      Company Website or Brand Name
                    </span>
                    <input
                      type="text"
                      placeholder="https://example.com"
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-tech text-label-tech text-on-surface-variant">
                      Monthly Tech / Marketing Budget
                    </span>
                    <div className="relative">
                      <select
                        defaultValue="₹3,50,000 – ₹7,50,000 / mo"
                        className={`${inputClasses} appearance-none pr-10`}
                      >
                        <option>₹1,50,000 – ₹3,50,000 / mo</option>
                        <option>₹3,50,000 – ₹7,50,000 / mo</option>
                        <option>₹7,50,000 – ₹15,00,000+ / mo</option>
                        <option>Bespoke Enterprise Quote</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-outline" />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-label-button text-on-primary shadow-lg shadow-primary/25 transition-all hover:bg-primary-container hover:text-on-primary-container"
              >
                Generate Custom Strategy Proposal
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* Success alert */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 rounded-xl bg-secondary-container p-4 text-body-sm text-on-secondary-container"
                  >
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                    <span>
                      Thank you! Your custom architecture roadmap is being
                      generated. A Raybon Tech engineer will reach out in under
                      2 hours.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
