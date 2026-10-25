"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeftRight, BadgeCheck, MoreVertical, RotateCcw, Send } from "lucide-react";
import Reveal from "./Reveal";

const BOT_MESSAGE_1 =
  "Hello! 👋 Welcome to Raybon Tech. Are you looking to build a new web application, scale SEO, or automate client chat pipelines?";
const USER_MESSAGE =
  "We need a custom React portal with automated booking for 2,000 monthly patients.";
const BOT_MESSAGE_2 =
  "Excellent. That aligns with our HIPAA-ready stack. Would Thursday at 2:00 PM EST work for a 20-min technical architecture scoping call?";

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

type ActiveTyping = "bot1" | "user" | "bot2" | null;

type ChatState = {
  typingBot: boolean;
  showBot1: boolean;
  textBot1: string;
  typingUser: boolean;
  showUser: boolean;
  textUser: string;
  typingBot2: boolean;
  showBot2: boolean;
  textBot2: string;
  showButtons: boolean;
  active: ActiveTyping;
};

const initialChat: ChatState = {
  typingBot: false,
  showBot1: false,
  textBot1: "",
  typingUser: false,
  showUser: false,
  textUser: "",
  typingBot2: false,
  showBot2: false,
  textBot2: "",
  showButtons: false,
  active: null,
};

function TypingDots({
  dark = false,
  label,
}: {
  dark?: boolean;
  label: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-2xl px-3 py-2 shadow-sm ${
        dark
          ? "rounded-tr-none bg-primary/80 text-white"
          : "rounded-tl-none bg-surface-container text-on-surface"
      }`}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`dot-bounce-${i + 1} h-2 w-2 rounded-full ${
            dark ? "bg-white" : "bg-primary"
          }`}
        />
      ))}
      <span className="ml-1 font-tech text-[11px]">{label}</span>
    </div>
  );
}

function ScoreBar({
  label,
  value,
  pct,
}: {
  label: string;
  value: string;
  pct: number;
}) {
  return (
    <div>
      <div className="mb-1 flex justify-between font-tech text-label-tech text-on-surface">
        <span>{label}</span>
        <span className="font-bold text-primary">{value}</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Synergy() {
  const sectionRef = useRef<HTMLElement>(null);
  const streamRef = useRef<HTMLDivElement>(null);
  const runIdRef = useRef(0);
  const [chat, setChat] = useState<ChatState>(initialChat);

  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  const scrollBottom = useCallback(() => {
    const el = streamRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  const runChat = useCallback(async () => {
    const run = ++runIdRef.current;
    const alive = () => runIdRef.current === run;
    setChat(initialChat);

    const type = async (
      key: "textBot1" | "textUser" | "textBot2",
      full: string,
      speed: number,
      active: Exclude<ActiveTyping, null>,
    ) => {
      for (let i = 1; i <= full.length; i++) {
        if (!alive()) return false;
        setChat((prev) => ({ ...prev, [key]: full.slice(0, i) }));
        scrollBottom();
        await sleep(speed);
      }
      return alive();
    };

    await sleep(400);
    if (!alive()) return;
    setChat((p) => ({ ...p, typingBot: true }));
    scrollBottom();
    await sleep(1100);
    if (!alive()) return;
    setChat((p) => ({ ...p, typingBot: false, showBot1: true, active: "bot1" }));
    if (!(await type("textBot1", BOT_MESSAGE_1, 16, "bot1"))) return;
    setChat((p) => ({ ...p, active: null }));
    await sleep(600);
    if (!alive()) return;
    setChat((p) => ({ ...p, typingUser: true }));
    scrollBottom();
    await sleep(1000);
    if (!alive()) return;
    setChat((p) => ({ ...p, typingUser: false, showUser: true, active: "user" }));
    if (!(await type("textUser", USER_MESSAGE, 18, "user"))) return;
    setChat((p) => ({ ...p, active: null }));
    await sleep(600);
    if (!alive()) return;
    setChat((p) => ({ ...p, typingBot2: true }));
    scrollBottom();
    await sleep(1100);
    if (!alive()) return;
    setChat((p) => ({ ...p, typingBot2: false, showBot2: true, active: "bot2" }));
    if (!(await type("textBot2", BOT_MESSAGE_2, 16, "bot2"))) return;
    setChat((p) => ({ ...p, active: null, showButtons: true }));
    scrollBottom();
  }, [scrollBottom]);

  useEffect(() => {
    if (inView) void runChat();
  }, [inView, runChat]);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-surface py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-5 md:px-8 lg:px-12">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="font-tech text-label-tech uppercase text-primary">
            Interactive Tech Deep Dive
          </span>
          <h2 className="mt-2 text-headline-lg tracking-tight text-on-surface">
            Real-Time Synergy in Action
          </h2>
          <p className="mt-2 text-body-md text-on-surface-variant">
            Observe how our automated WhatsApp conversational agents convert
            casual web traffic into booked client meetings within seconds.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
          {/* Interactive WhatsApp chat simulator */}
          <Reveal className="flex flex-col items-center justify-center lg:col-span-6">
            <div className="w-full max-w-md rounded-3xl border border-outline-variant/20 bg-inverse-surface p-4 text-inverse-on-surface shadow-2xl">
              {/* Phone header */}
              <div className="flex items-center justify-between border-b border-outline/30 px-2 pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-inner">
                    RT
                  </div>
                  <div>
                    <h4 className="flex items-center gap-1 text-[16px] font-semibold text-inverse-on-surface">
                      Raybon AI Assistant
                      <BadgeCheck className="h-4 w-4 text-tertiary-fixed" />
                    </h4>
                    <span className="flex items-center gap-1 text-[11px] text-tertiary-fixed">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary-fixed" />
                      Official Meta Verified Cloud API
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => void runChat()}
                    aria-label="Replay chat demonstration"
                    title="Replay Chat"
                    className="flex h-8 w-8 items-center justify-center rounded-full text-outline-variant transition-colors hover:bg-surface-variant/20 hover:text-white"
                  >
                    <RotateCcw className="h-[18px] w-[18px]" />
                  </button>
                  <MoreVertical className="h-[18px] w-[18px] text-outline-variant" />
                </div>
              </div>

              {/* Animated chat stream */}
              <div
                ref={streamRef}
                className="no-scrollbar flex h-[340px] max-h-[340px] flex-col space-y-3 overflow-y-auto py-4 text-[13px]"
              >
                {chat.typingBot && (
                  <div className="self-start">
                    <TypingDots label="Raybon AI is typing..." />
                  </div>
                )}
                {chat.showBot1 && (
                  <div className="max-w-[85%] self-start rounded-2xl rounded-tl-none bg-surface-container p-3 text-on-surface shadow-sm">
                    <p className="leading-relaxed">
                      {chat.textBot1}
                      {chat.active === "bot1" && (
                        <span className="cursor-blink" />
                      )}
                    </p>
                    <span className="mt-1 block text-right text-[10px] text-on-surface-variant">
                      09:41 AM
                    </span>
                  </div>
                )}
                {chat.typingUser && (
                  <div className="self-end">
                    <TypingDots dark label="You are typing..." />
                  </div>
                )}
                {chat.showUser && (
                  <div className="max-w-[80%] self-end rounded-2xl rounded-tr-none bg-primary p-3 text-white shadow-sm">
                    <p className="leading-relaxed">
                      {chat.textUser}
                      {chat.active === "user" && (
                        <span className="cursor-blink" />
                      )}
                    </p>
                    <span className="mt-1 block text-right text-[10px] text-white/70">
                      09:42 AM
                    </span>
                  </div>
                )}
                {chat.typingBot2 && (
                  <div className="self-start">
                    <TypingDots label="Raybon AI is typing..." />
                  </div>
                )}
                {chat.showBot2 && (
                  <div className="max-w-[85%] self-start rounded-2xl rounded-tl-none bg-surface-container p-3 text-on-surface shadow-sm">
                    <p className="leading-relaxed">
                      {chat.textBot2}
                      {chat.active === "bot2" && (
                        <span className="cursor-blink" />
                      )}
                    </p>
                    {chat.showButtons && (
                      <div className="mt-2.5 flex gap-2 border-t border-outline-variant/30 pt-2">
                        <span className="cursor-pointer rounded-md bg-secondary-container px-2.5 py-1 font-tech text-[11px] font-semibold text-on-secondary-container transition-all hover:opacity-90 active:scale-95">
                          Confirm Slot
                        </span>
                        <span className="cursor-pointer rounded-md bg-surface-container-high px-2.5 py-1 font-tech text-[11px] text-on-surface transition-all hover:opacity-90 active:scale-95">
                          Change Time
                        </span>
                      </div>
                    )}
                    <span className="mt-1 block text-right text-[10px] text-on-surface-variant">
                      09:42 AM
                    </span>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-2 border-t border-outline/20 px-2 pt-2">
                <div className="flex-1 rounded-full bg-surface-variant/20 px-4 py-2 text-[12px] text-inverse-on-surface/50">
                  Type a message or select an option...
                </div>
                <button
                  type="button"
                  aria-label="Send message"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow transition-colors hover:bg-primary-container"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Lighthouse & speed synergy metrics */}
          <div className="mt-6 flex flex-col gap-4 lg:col-span-6 lg:mt-0">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-3 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-tech text-label-tech font-bold uppercase text-primary">
                    Lighthouse Core Vitals
                  </span>
                  <span className="rounded-full bg-secondary-container px-2.5 py-1 font-tech text-[12px] text-on-secondary-container">
                    Audited Live
                  </span>
                </div>
                <h3 className="text-headline-md text-on-surface">
                  100/100 Benchmark Performance
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  Every single application built by Raybon Tech passes strict
                  edge runtime tests. Search engines prioritize sites that load
                  in under a single second, reducing bounce rates significantly.
                </p>
                <div className="space-y-4 pt-2">
                  <ScoreBar label="Performance" value="100 / 100" pct={100} />
                  <ScoreBar
                    label="SEO Architecture Score"
                    value="100 / 100"
                    pct={100}
                  />
                  <ScoreBar
                    label="Largest Contentful Paint (LCP)"
                    value="0.42s (Grade A)"
                    pct={96}
                  />
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-3">
              <Reveal delay={0.15}>
                <div className="flex items-center gap-3 rounded-xl border border-outline-variant/30 bg-white p-4">
                  <ArrowLeftRight className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <span className="block text-[15px] font-semibold text-on-surface">
                      CRM Auto-Sync
                    </span>
                    <span className="text-caption text-on-surface-variant">
                      Hubspot, Salesforce, Sheets
                    </span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex items-center gap-3 rounded-xl border border-outline-variant/30 bg-white p-4">
                  <BadgeCheck className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <span className="block text-[15px] font-semibold text-on-surface">
                      Official Cloud API
                    </span>
                    <span className="text-caption text-on-surface-variant">
                      Zero ban risk SLA
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
