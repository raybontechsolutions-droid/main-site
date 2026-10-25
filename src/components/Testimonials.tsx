"use client";

import { Star } from "lucide-react";
import Reveal from "./Reveal";

type Testimonial = {
  initials: string;
  name: string;
  role: string;
  avatarBg: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    initials: "MA",
    name: "Marcus Adler",
    role: "COO, Lumina Clinics",
    avatarBg: "bg-primary-container text-white",
    quote:
      "Raybon Tech completely transformed our local visibility. Within 60 days of their Google Business and SEO restructuring, phone calls doubled and our web leads were qualified instantly by their WhatsApp bot.",
  },
  {
    initials: "ER",
    name: "Elena Rostova",
    role: "Head of Growth, FinScale Global",
    avatarBg: "bg-secondary text-white",
    quote:
      "Having one single partner that can handle cutting-edge Next.js frontend engineering while also executing rigorous SEO and paid funnels is extraordinarily rare. Raybon Tech delivers every single sprint.",
  },
  {
    initials: "DK",
    name: "David Kroll",
    role: "Founder, Horizon Goods Co.",
    avatarBg: "bg-tertiary-container text-white",
    quote:
      "Our e-commerce store went from loading in 4.8 seconds to sub-second load times. Organic sales spiked by 3.8x in six months. The technical depth of this squad is simply unmatched.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-[1360px] px-5 md:px-8 lg:px-12">
        <Reveal className="mb-12 max-w-2xl">
          <span className="font-tech text-label-tech uppercase text-primary">
            Verified Client Feedback
          </span>
          <h2 className="mt-2 text-headline-lg tracking-tight text-on-surface">
            Endorsed by Growth Leaders
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.12}
              className="h-full"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="mb-3 flex gap-0.5 text-primary">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mb-6 text-body-md italic text-on-surface">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-outline-variant/30 pt-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${testimonial.avatarBg}`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <span className="block text-[15px] font-semibold text-on-surface">
                      {testimonial.name}
                    </span>
                    <span className="text-caption text-on-surface-variant">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
