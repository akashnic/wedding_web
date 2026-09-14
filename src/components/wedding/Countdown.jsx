import React, { useState, useEffect } from 'react';
import ScrollReveal from '../effects/ScrollReveal';
import FloralPageBorder from '../decorations/FloralPageBorder';
import { LotusMedallion, FloralVineDivider } from '../decorations/FloralMotifs';

export default function Countdown({ config }) {
  const weddingDateStr = config?.wedding?.date || "21 November 2026";
  const targetDate = new Date(`${weddingDateStr} 11:30 AM`).getTime() || new Date("2026-11-21T11:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative bg-[#EDDFC4]">
      <FloralPageBorder
        variant="burgundy"
        showCorners={true}
        showToran={true}
        showFooterGarland={true}
        className="py-20 sm:py-24 px-4 sm:px-6"
      >
        {/* Warm Ivory glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,243,234,0.7)_0%,transparent_80%)] pointer-events-none"></div>

        <ScrollReveal className="text-center w-full max-w-4xl mx-auto z-10 relative">
          <div className="mb-3">
            <LotusMedallion variant="burgundy" size={48} />
          </div>

          <h3 className="text-xl md:text-2xl font-body tracking-[0.3em] text-[#651F30] mb-3 uppercase font-medium">
            Counting Down to Forever
          </h3>

          <FloralVineDivider variant="burgundy" className="mb-10 max-w-xs mx-auto" />
          
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 max-w-3xl mx-auto px-1">
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#FFFDF8]/90 border border-[#651F30]/20 shadow-md transition-transform hover:-translate-y-1">
              <span className="text-2xl sm:text-4xl md:text-6xl font-display text-[#651F30] font-light leading-none mb-1">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-[9px] sm:text-xs md:text-sm font-body tracking-wider sm:tracking-[0.2em] text-[#3E2C22] font-semibold uppercase">DAYS</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#FFFDF8]/90 border border-[#651F30]/20 shadow-md transition-transform hover:-translate-y-1">
              <span className="text-2xl sm:text-4xl md:text-6xl font-display text-[#651F30] font-light leading-none mb-1">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[9px] sm:text-xs md:text-sm font-body tracking-wider sm:tracking-[0.2em] text-[#3E2C22] font-semibold uppercase">HOURS</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#FFFDF8]/90 border border-[#651F30]/20 shadow-md transition-transform hover:-translate-y-1">
              <span className="text-2xl sm:text-4xl md:text-6xl font-display text-[#651F30] font-light leading-none mb-1">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[9px] sm:text-xs md:text-sm font-body tracking-wider sm:tracking-[0.2em] text-[#3E2C22] font-semibold uppercase">MINS</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#FFFDF8]/90 border border-[#651F30]/20 shadow-md transition-transform hover:-translate-y-1">
              <span className="text-2xl sm:text-4xl md:text-6xl font-display text-[#651F30] font-light leading-none mb-1">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[9px] sm:text-xs md:text-sm font-body tracking-wider sm:tracking-[0.2em] text-[#3E2C22] font-semibold uppercase">SECS</span>
            </div>
          </div>
        </ScrollReveal>
      </FloralPageBorder>
    </section>
  );
}
