'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const greenStripRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);
  
  // Cards
  const cardsParentTopRef = useRef<HTMLDivElement>(null);
  const cardsParentBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=3000', // Scroll length
          scrub: 1,
          pin: true,
        },
      });

      // Car moves from off-screen left (-20vw) to off-screen right (120vw)
      // The green strip grows synchronously to stay right behind the car
      tl.fromTo(
        greenStripRef.current,
        { width: '0vw' },
        { width: '120vw', ease: 'none' },
        0
      );

      tl.fromTo(
        carRef.current,
        { left: '0vw' },
        { left: '120vw', ease: 'none' },
        0
      );

      // Fade & slide in cards asynchronously as we scrub
      // Top cards sliding from right/fade in
      tl.fromTo(
        cardsParentTopRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out' },
        0.2
      );

      // Bottom cards sliding from left/fade in
      tl.fromTo(
        cardsParentBottomRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out' },
        0.4
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full bg-[#363636] font-sans">
      <div 
        ref={containerRef} 
        className="h-screen w-full relative overflow-hidden flex flex-col justify-center"
      >
        {/* The Dark Road Strip */}
        <div className="absolute top-1/2 left-0 w-full h-[35vh] bg-[#1d1d1d] -translate-y-1/2 flex items-center overflow-hidden z-0">
          
          {/* The Expanding Green Strip inside the road */}
          <div 
            ref={greenStripRef} 
            className="absolute left-0 top-0 h-full bg-[#48ea77] overflow-hidden z-10"
          >
            {/* The Text must act like it's completely fixed relative to the screen so the green strip acts as a mask revealing it */}
            <h1 className="text-[14vw] font-bold text-white whitespace-nowrap leading-none absolute left-10 top-1/2 -translate-y-1/2 select-none tracking-widest min-w-max pr-10">
              WELCOME ITZFIZZ
            </h1>
          </div>

        </div>

        {/* Top Cards */}
        <div 
          ref={cardsParentTopRef} 
          className="absolute top-[10%] right-[10%] flex gap-6 z-20"
        >
          {/* Green Card */}
          <div className="bg-[#213009] p-8 rounded-xl w-[260px] shadow-2xl border border-white/5">
            <h2 className="text-6xl font-extrabold mb-3 text-white">58%</h2>
            <p className="text-gray-200 text-lg leading-tight">Increase in pick up point use</p>
          </div>
          {/* Grey Card */}
          <div className="bg-[#2c2c2c] p-8 rounded-xl w-[260px] shadow-2xl border border-white/5">
            <h2 className="text-6xl font-extrabold mb-3 text-white">27%</h2>
            <p className="text-gray-200 text-lg leading-tight">Increase in pick up point use</p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div 
          ref={cardsParentBottomRef} 
          className="absolute bottom-[10%] left-[45%] flex gap-6 z-20 -translate-x-[50%]"
        >
          {/* Blue Card */}
          <div className="bg-[#65bfff] p-8 rounded-xl w-[260px] shadow-2xl border border-white/5">
            <h2 className="text-6xl font-extrabold mb-3 text-white">23%</h2>
            <p className="text-white/90 text-lg leading-tight">Decreased in customer phone calls</p>
          </div>
          {/* Brown Card */}
          <div className="bg-[#a45e34] p-8 rounded-xl w-[260px] shadow-2xl border border-white/5">
            <h2 className="text-6xl font-extrabold mb-3 text-[#ce8b64]">40%</h2>
            <p className="text-gray-200 text-lg leading-tight">Decreased in customer phone calls</p>
          </div>
        </div>

        {/* The Car positioned directly on the edge of the green strip */}
        <img 
          ref={carRef}
          src="https://paraschaturvedi.github.io/car-scroll-animation/McLaren%20720S%202022%20top%20view.png" 
          alt="McLaren Top View"
          className="absolute top-1/2 -translate-y-1/2 w-[30vh] sm:w-[35vh] min-w-[250px] object-contain z-30 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] -translate-x-[60%]"
        />

        {/* Helper prompt to scroll */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce flex flex-col items-center select-none text-sm tracking-wide">
          <span>SCROLL DOWN</span>
          <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>

      </div>
    </main>
  );
}
