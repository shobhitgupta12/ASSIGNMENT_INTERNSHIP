'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Statistic {
  value: string;
  label: string;
}

const statistics: Statistic[] = [
  { value: '98%', label: 'Smooth Performance' },
  { value: '60fps', label: 'Animation Quality' },
  { value: '0.2s', label: 'Load Time' },
];

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const carContainerRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Headline animation - staggered letter reveal
    const headline = headlineRef.current;
    if (headline) {
      const letters = headline.querySelectorAll('span');

      gsap.from(letters, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.out',
      });
    }

    // Statistics animation - staggered fade in
    const stats = statsRef.current?.querySelectorAll('.stat-item');
    if (stats) {
      gsap.from(stats, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.3,
        ease: 'power2.out',
      });
    }

    // Scroll-based car animation
    if (carRef.current && heroRef.current) {
      gsap.to(carRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom center',
          scrub: 1.5,
          onUpdate: (self) => {
            // Additional parallax effect
            gsap.set(carContainerRef.current, {
              y: self.getVelocity() * 0.1,
            });
          },
        },
        x: 150,
        rotationZ: 8,
        duration: 1,
      });

      // Fade out as user scrolls
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom center',
          scrub: 1,
        },
        opacity: 0.3,
        duration: 1,
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-dark via-dark to-dark"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Main headline with letter spacing */}
        <h1
          ref={headlineRef}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-8 leading-tight"
        >
          {'WELCOME ITZFIZZ'.split('').map((letter, idx) => (
            <span key={idx} className="inline-block">
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>

        {/* Statistics section */}
        <div
          ref={statsRef}
          className="flex gap-8 md:gap-12 mt-12 justify-center flex-wrap max-w-4xl"
        >
          {statistics.map((stat, idx) => (
            <div key={idx} className="stat-item text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Car/Visual element */}
        <div
          ref={carContainerRef}
          className="absolute bottom-10 md:bottom-20 left-0 right-0 flex justify-center"
        >
          <div
            ref={carRef}
            className="relative w-64 h-40 md:w-80 md:h-48 flex items-center justify-center"
          >
            {/* SVG Car Illustration */}
            <svg
              className="w-full h-full drop-shadow-2xl"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Car body */}
              <rect
                x="80"
                y="140"
                width="240"
                height="80"
                fill="#ff6b35"
                rx="8"
              />

              {/* Car top section */}
              <path
                d="M 130 140 L 160 80 L 240 80 L 270 140"
                fill="#ff6b35"
                stroke="#ff6b35"
                strokeWidth="2"
              />

              {/* Windows */}
              <rect
                x="170"
                y="95"
                width="50"
                height="35"
                fill="rgba(0, 0, 0, 0.3)"
                rx="4"
              />
              <rect
                x="230"
                y="95"
                width="40"
                height="35"
                fill="rgba(0, 0, 0, 0.2)"
                rx="4"
              />

              {/* Wheels */}
              <circle cx="130" cy="220" r="20" fill="#1a1a1a" />
              <circle cx="130" cy="220" r="16" fill="none" stroke="#ff6b35" strokeWidth="2" />
              <circle cx="270" cy="220" r="20" fill="#1a1a1a" />
              <circle cx="270" cy="220" r="16" fill="none" stroke="#ff6b35" strokeWidth="2" />

              {/* Wheel centers */}
              <circle cx="130" cy="220" r="4" fill="#ff6b35" />
              <circle cx="270" cy="220" r="4" fill="#ff6b35" />

              {/* Light accent lines */}
              <line
                x1="100"
                y1="150"
                x2="300"
                y2="150"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
