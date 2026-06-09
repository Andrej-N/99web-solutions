"use client";

import { useEffect, useRef } from "react";

type ColorTheme =
  | "original"
  | "blue-pink"
  | "blue-orange"
  | "sunset"
  | "purple"
  | "monochrome"
  | "pink-purple"
  | "blue-black"
  | "beige-black";

interface CosmicSpectrumProps {
  color?: ColorTheme;
  blur?: boolean;
  /** Small uppercase label above the title */
  eyebrow?: string;
  /** Big animated headline (split per character) */
  heading?: string;
  /** Bold second half of the headline wordmark, animated together with heading */
  headingBold?: string;
  /** Statement revealed as the spectrum rises */
  statement?: string;
  /** Scroll hint text at the bottom of the first screen */
  hint?: string;
}

export function CosmicSpectrum({
  color = "sunset",
  blur = false,
  eyebrow,
  heading = "Cosmos Spectrum",
  headingBold,
  statement = "Where Design Becomes Communication",
  hint = "Scroll to explore",
}: CosmicSpectrumProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const colorThemes: Record<ColorTheme, string[]> = {
    original: ["#340B05", "#0358F7", "#5092C7", "#E1ECFE", "#FFD400", "#FA3D1D", "#FD02F5", "#FFC0FD"],
    "blue-pink": ["#1E3A8A", "#3B82F6", "#A855F7", "#EC4899", "#F472B6", "#F9A8D4", "#FBCFE8", "#FDF2F8"],
    "blue-orange": ["#1E40AF", "#3B82F6", "#60A5FA", "#FFFFFF", "#FED7AA", "#FB923C", "#EA580C", "#9A3412"],
    sunset: ["#FBEFD8", "#F4C77B", "#E59B3C", "#D97B2B", "#C2562E", "#9A3D26", "#6B2D1F", "#3A1A12"],
    purple: ["#F3E8FF", "#E9D5FF", "#D8B4FE", "#C084FC", "#A855F7", "#9333EA", "#7C3AED", "#6B21B6"],
    monochrome: ["#1A1A1A", "#404040", "#666666", "#999999", "#CCCCCC", "#E5E5E5", "#F5F5F5", "#FFFFFF"],
    "pink-purple": ["#FDF2F8", "#FCE7F3", "#F9A8D4", "#F472B6", "#EC4899", "#BE185D", "#831843", "#500724"],
    "blue-black": ["#000000", "#0F172A", "#1E293B", "#334155", "#475569", "#64748B", "#94A3B8", "#CBD5E1"],
    "beige-black": ["#FEF3C7", "#F59E0B", "#D97706", "#92400E", "#451A03", "#1C1917", "#0C0A09", "#000000"],
  };

  const darkThemes = ["blue-black", "beige-black", "monochrome"];
  const isDarkTheme = darkThemes.includes(color);

  useEffect(() => {
    const loadScript = (src: string) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(true);
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });

    let onResize: (() => void) | null = null;

    const init = async () => {
      try {
        await Promise.all([
          loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"),
          loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"),
        ]);

        setTimeout(() => {
          if (window.gsap && window.ScrollTrigger) {
            window.gsap.registerPlugin(window.ScrollTrigger);
            onResize = setupAnimations();
          }
        }, 100);
      } catch (error) {
        console.error("Failed to load GSAP:", error);
      }
    };

    init();

    return () => {
      if (onResize) window.removeEventListener("resize", onResize);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((st: { kill: () => void }) => st.kill());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setupAnimations = () => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return null;

    const root = containerRef.current;
    if (!root) return null;
    const q = (sel: string) => root.querySelectorAll(sel);

    const heroTl = gsap.timeline({ delay: 0.4 });

    const eyebrowEl = root.querySelector(".hero-eyebrow");
    if (eyebrowEl) {
      gsap.set(eyebrowEl, { opacity: 0, y: 12, filter: "blur(6px)" });
      heroTl.to(eyebrowEl, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, 0);
    }

    const titleChars = q(".hero-title .char");
    if (titleChars.length > 0) {
      gsap.set(titleChars, { opacity: 0, filter: "blur(10px)", y: 24 });
      heroTl.to(
        titleChars,
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.9, stagger: 0.03, ease: "power3.out" },
        0.15,
      );
    }

    const scrollHintChars = q(".scroll-hint .char");
    if (scrollHintChars.length > 0) {
      gsap.set(scrollHintChars, { opacity: 0, filter: "blur(3px)" });
      gsap.to(scrollHintChars, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: { each: 0.08, repeat: -1, yoyo: true },
        ease: "sine.inOut",
        delay: 1.1,
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root.querySelector(".animation-section"),
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    const mainTitle = root.querySelector(".main-title");
    if (mainTitle) gsap.set(mainTitle, { opacity: 0, y: 30, filter: "blur(8px)" });

    tl.to(".svg-container", { opacity: 1, duration: 0.01 }, 0)
      .to(".svg-container", { transform: "scaleY(0.05) translateY(-30px)", duration: 0.3, ease: "power2.out" }, 0)
      .to(".svg-container", { transform: "scaleY(1) translateY(0px)", duration: 1.2, ease: "power2.out" }, 0.3);

    if (mainTitle) {
      tl.to(mainTitle, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }, 0.9);
    }

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return handleResize;
  };

  const splitText = (text: string, className = "") =>
    text.split("").map((char, index) => (
      <span key={index} className={`char ${className}`}>
        {char === " " ? " " : char}
      </span>
    ));

  const currentColors = colorThemes[color];

  return (
    <div ref={containerRef} className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex h-screen w-full flex-col items-center justify-center px-6">
        {eyebrow && (
          <p className="hero-eyebrow nums mb-6 text-[11px] uppercase tracking-[0.32em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="hero-title text-center text-6xl font-semibold tracking-tighter text-foreground sm:text-7xl md:text-8xl">
          {headingBold ? (
            <>
              <span className="font-light">{splitText(heading)}</span>
              <span className="font-bold">{splitText(headingBold)}</span>
            </>
          ) : (
            splitText(heading)
          )}
        </h1>

        {/* Scroll hint scrolls away with the hero */}
        <div className="scroll-hint nums pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          {splitText(hint)}
        </div>
      </section>

      <div className="h-[50vh]" />

      {/* Animation Section */}
      <div className="animation-section relative h-screen">
        <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-10 h-screen">
          {/* SVG spectrum */}
          <div
            className="svg-container absolute bottom-0 left-0 right-0 z-[15] h-screen opacity-0"
            style={{
              transformOrigin: "bottom",
              transform: "scaleY(0.05) translateY(100vh)",
              willChange: "transform, opacity, filter",
            }}
          >
            <svg className="h-full w-full" viewBox="0 0 1567 584" preserveAspectRatio="none" fill="none">
              <g clipPath="url(#clip)" filter={blur ? "url(#blur)" : undefined}>
                <path d="M1219 584H1393V184H1219V584Z" fill="url(#grad0)" />
                <path d="M1045 584H1219V104H1045V584Z" fill="url(#grad1)" />
                <path d="M348 584H174L174 184H348L348 584Z" fill="url(#grad2)" />
                <path d="M522 584H348L348 104H522L522 584Z" fill="url(#grad3)" />
                <path d="M697 584H522L522 54H697L697 584Z" fill="url(#grad4)" />
                <path d="M870 584H1045V54H870V584Z" fill="url(#grad5)" />
                <path d="M870 584H697L697 0H870L870 584Z" fill="url(#grad6)" />
                <path d="M174 585H0.000183105L-3.75875e-06 295H174L174 585Z" fill="url(#grad7)" />
                <path d="M1393 584H1567V294H1393V584Z" fill="url(#grad8)" />
              </g>
              <defs>
                <filter
                  id="blur"
                  x="-30"
                  y="-30"
                  width="1627"
                  height="644"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur" />
                </filter>
                {Array.from({ length: 9 }, (_, i) => (
                  <linearGradient
                    key={i}
                    id={`grad${i}`}
                    x1="50%"
                    y1="100%"
                    x2="50%"
                    y2="0%"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor={currentColors[0]} />
                    <stop offset="0.182709" stopColor={currentColors[1]} />
                    <stop offset="0.283673" stopColor={currentColors[2]} />
                    <stop offset="0.413484" stopColor={currentColors[3]} />
                    <stop offset="0.586565" stopColor={currentColors[4]} />
                    <stop offset="0.682722" stopColor={currentColors[5]} />
                    <stop offset="0.802892" stopColor={currentColors[6]} />
                    <stop offset="1" stopColor={currentColors[7]} stopOpacity="0" />
                  </linearGradient>
                ))}
                <clipPath id="clip">
                  <rect width="1567" height="584" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Revealed statement */}
          <div
            className="main-title absolute bottom-1/2 left-1/2 z-20 max-w-2xl -translate-x-1/2 translate-y-1/2 px-6 text-center font-serif text-2xl italic leading-snug opacity-0 sm:text-3xl md:text-4xl"
            style={{ color: isDarkTheme ? "#ffffff" : "var(--foreground)" }}
          >
            {statement}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-title {
            font-size: 11.5vw !important;
          }
        }
      `}</style>
    </div>
  );
}
