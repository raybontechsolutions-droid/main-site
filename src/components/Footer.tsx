"use client";

import Image from "next/image";
import { useState } from "react";
import logoFull from "@/assets/logo-full.png";

const serviceLinks = [
  { label: "Full-Stack Dev", href: "#services" },
  { label: "SEO & Google Business", href: "#services" },
  { label: "WhatsApp AI Bots", href: "#services" },
  { label: "SMM & Web DevOps", href: "#services" },
];

const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#process" },
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Carbon Disclosures"];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-low text-on-surface">
      <div className="mx-auto max-w-[1360px] px-5 pb-8 pt-16 md:px-8 lg:px-12">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Image
              src={logoFull}
              alt="Raybon Tech Solutions"
              className="h-20 w-auto object-contain"
            />
            <p className="max-w-sm text-body-sm text-on-surface-variant">
              High-performance digital engineering rooted in technical
              precision and clean architectures. We build scalable digital
              products, AI automation pipelines, and sustainable revenue
              engines.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2 lg:col-span-3">
            <h3 className="mb-1 text-headline-sm text-on-surface">Services</h3>
            <ul className="flex flex-col gap-2 text-body-sm text-on-surface-variant">
              {serviceLinks.map((link) => (
                <li key={link.label} className="transition-colors hover:text-primary">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2 lg:col-span-2">
            <h3 className="mb-1 text-headline-sm text-on-surface">Navigation</h3>
            <ul className="flex flex-col gap-2 text-body-sm text-on-surface-variant">
              {navigationLinks.map((link) => (
                <li key={link.label} className="transition-colors hover:text-primary">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-headline-sm text-on-surface">
              Intelligence Dispatch
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              Receive fortnightly architectural briefings, AI implementation
              blueprints, and tech growth heuristics.
            </p>
            <form
              className="flex flex-col gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                setSubscribed(true);
              }}
            >
              <div className="flex items-center gap-1 rounded-lg border border-outline-variant/30 bg-white p-1 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                <input
                  type="email"
                  required
                  placeholder="director@enterprise.com"
                  className="w-full bg-transparent px-2 py-2 text-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-md bg-primary px-4 py-2 text-label-button text-white transition-colors hover:bg-primary-container hover:text-on-primary-container"
                >
                  Join
                </button>
              </div>
              <span className="text-caption text-outline">
                {subscribed
                  ? "You're on the dispatch list. Welcome aboard!"
                  : "Zero spam. Deep-dive technical analyses only."}
              </span>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/20 pt-8 text-caption text-on-surface-variant md:flex-row">
          <p>© 2025 Raybon Tech Solutions Inc. Architectural clarity, sustainable performance.</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((label) => (
              <a key={label} href="#" className="transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
