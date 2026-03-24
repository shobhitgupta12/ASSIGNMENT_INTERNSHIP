'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContentSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });
    }

    if (textRef.current) {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          end: 'top 55%',
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        duration: 1,
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-dark py-20 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-8 text-white"
        >
          Experience Smooth Scrolling
        </h2>

        <p
          ref={textRef}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12"
        >
          This scroll-driven hero section animation demonstrates the power of
          combining GSAP with scroll-triggered animations. As you scroll, watch
          how the visual elements respond smoothly to your scroll position,
          creating an immersive and engaging user experience. The car element
          moves and transforms based on scroll progress, while the opacity
          changes create a sense of depth and movement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              title: 'Performance',
              description:
                'Optimized animations using transform properties for 60fps performance',
            },
            {
              title: 'Smooth Motion',
              description:
                'Natural easing and interpolation for fluid, premium feel',
            },
            {
              title: 'Responsive',
              description:
                'Animations scale beautifully across all device sizes',
            },
            {
              title: 'Interactive',
              description:
                'Scroll-triggered animations that respond to user input',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-3 text-accent">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 to-transparent rounded-lg border border-accent/20">
          <h3 className="text-2xl font-bold mb-4 text-accent">
            Technical Implementation
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>✓ Built with Next.js and React</li>
            <li>✓ Styled with Tailwind CSS</li>
            <li>✓ Animations powered by GSAP and ScrollTrigger</li>
            <li>✓ Optimized for performance and accessibility</li>
            <li>✓ Fully responsive design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
