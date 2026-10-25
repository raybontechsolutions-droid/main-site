"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Calendar } from "lucide-react";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const metrics = [
  { target: 99.9, decimals: 1, suffix: "%", label: "Uptime SLA Guaranteed" },
  { target: 3.8, decimals: 1, suffix: "x", label: "Avg Organic Traffic Lift" },
  { target: 24, decimals: 0, suffix: "/7", label: "Automated AI Lead Capture" },
  { target: 100, decimals: 0, suffix: "+", label: "Custom Digital Apps Built" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-14 lg:py-28">
      {/* Ambient gradient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-secondary-container/30 blur-[130px]"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 h-[550px] w-[550px] rounded-full bg-surface-container-high/40 blur-[140px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 md:px-8 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center space-y-6 text-center"
        >
          <motion.h1
            variants={item}
            className="text-display-hero-sm leading-tight tracking-tight text-on-surface md:text-display-hero"
          >
            We Build, Rank, Automate & Scale Your{" "}
            <span className="italic text-primary">Digital Presence</span>.
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto max-w-2xl text-body-lg leading-relaxed text-on-surface-variant"
          >
            From robust full-stack web applications to AI-powered WhatsApp
            chatbots and organic SEO domination — we provide the full-cycle
            technical backbone for modern high-growth companies.
          </motion.p>
          <motion.div
            variants={item}
            className="flex w-full flex-wrap items-center justify-center gap-4 pt-2 sm:w-auto"
          >
            <a
              href="#estimator"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-10 py-3.5 text-label-button text-on-primary shadow-lg shadow-primary/20 transition-all hover:bg-primary-container hover:text-on-primary-container active:scale-95 sm:w-auto"
            >
              Schedule Consultation
              <Calendar className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-outline-variant/40 bg-white px-10 py-3.5 text-label-button text-on-surface shadow-sm transition-all hover:bg-secondary-container hover:text-on-secondary-container sm:w-auto"
            >
              Explore Services
              <ArrowDown className="h-[18px] w-[18px]" />
            </a>
          </motion.div>
        </motion.div>

        {/* Trust proof animated metrics bar */}
        <Reveal delay={0.25} className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-outline-variant/30 bg-surface-container-low/80 p-6 text-center shadow-sm md:grid-cols-4 md:divide-x md:divide-outline-variant/30">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center justify-center p-2"
              >
                <span className="text-headline-lg font-bold tracking-tight text-on-surface">
                  <CountUp
                    target={metric.target}
                    decimals={metric.decimals}
                    suffix={metric.suffix}
                  />
                </span>
                <span className="mt-1 font-tech text-label-tech uppercase text-primary">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
