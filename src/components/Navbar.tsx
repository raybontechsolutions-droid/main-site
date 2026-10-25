"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const compact = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3">
      <div
        className={`mx-auto w-full transition-all duration-300 ${
          compact ? "max-w-5xl" : "max-w-[1360px]"
        }`}
      >
        <div
          className={`flex h-16 items-center justify-between gap-6 rounded-xl px-6 transition-all duration-300 md:px-8 ${
            compact
              ? "border border-outline-variant/40 bg-white/90 shadow-md backdrop-blur-md"
              : ""
          }`}
        >
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#estimator"
              className="hidden items-center justify-center rounded-xl bg-primary px-6 py-2.5 text-label-button text-on-primary shadow-[0_4px_16px_rgba(81,98,55,0.18)] transition-all hover:bg-primary-container hover:text-on-primary-container active:scale-95 sm:inline-flex"
            >
              Book a Strategy Call
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-on-surface transition-colors hover:bg-surface-container lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex flex-col gap-1 rounded-xl border border-outline-variant/40 bg-white/95 p-3 shadow-lg backdrop-blur-md lg:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-body-md text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#estimator"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-primary px-4 py-2.5 text-center text-label-button text-on-primary transition-colors hover:bg-primary-container hover:text-on-primary-container"
              >
                Book a Strategy Call
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
