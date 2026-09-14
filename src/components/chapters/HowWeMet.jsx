import React, { useState, useEffect } from 'react';
import ScrollReveal from '../effects/ScrollReveal';
import FloralPageBorder from '../decorations/FloralPageBorder';
import { LotusMedallion, FloralVineDivider } from '../decorations/FloralMotifs';

export default function HowWeMet({ config }) {
  const data = config.story.firstMet;

  // Countdown timer logic
  const weddingDateStr = config?.wedding?.date || "21 November 2026";
  const targetDate = new Date(`${weddingDateStr} 11:30 AM`).getTime() || new Date("2026-11-21T11:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="how-we-met" className="relative bg-[#F5E9EB]">
      <FloralPageBorder
        variant="light"
        showCorners={true}
        showToran={true}
        showFooterGarland={true}
        className="min-h-screen py-20 sm:py-24 flex flex-col items-center justify-center px-3 sm:px-6"
      >
        {/* Dusty Rose ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,105,122,0.15)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="w-full max-w-4xl mx-auto z-10 space-y-12 sm:space-y-16">
          {/* ========================================================================= */}
          {/* JOURNEY STORY */}
          {/* ========================================================================= */}
          <ScrollReveal className="text-center w-full">
            <div className="mb-3">
              <LotusMedallion variant="light" size={46} />
            </div>

            {/* <p className="text-[#A8697A] font-body tracking-[0.2em] mb-2 text-xs sm:text-sm font-medium">
              {data.date.toUpperCase()}
            </p> */}

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-[#651F30] mb-4 uppercase tracking-wider">
              {data.title}
            </h2>

            <FloralVineDivider variant="light" className="mb-8 max-w-sm mx-auto" />

            <div className="text-base sm:text-lg font-body text-[#3E2C22] font-light max-w-3xl mx-auto space-y-5 leading-relaxed bg-[#FFF8EC]/75 backdrop-blur-sm p-6 sm:p-10 rounded-2xl border border-[#A8697A]/25 shadow-sm">
              {data.description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* COUNTDOWN TO FOREVER (Merged in one page, 1 row on mobile) */}
          {/* ========================================================================= */}
          <ScrollReveal className="text-center w-full">
            <div className="pt-2">
              <h3 className="text-lg sm:text-2xl font-body tracking-[0.25em] text-[#651F30] mb-2 uppercase font-medium">
                Counting Down to Forever
              </h3>

              <p className="text-xs sm:text-sm font-body text-[#A8697A] tracking-wider mb-6 italic">
                Until we say "I do" &bull; {weddingDateStr}
              </p>

              <FloralVineDivider variant="light" className="mb-8 max-w-xs mx-auto" />

              {/* 1 ROW ON MOBILE (grid-cols-4 across all screens) */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 max-w-3xl mx-auto px-1">
                {/* DAYS */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#FFFDF8]/90 border border-[#651F30]/20 shadow-md transition-all duration-300 hover:-translate-y-1">
                  <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-[#651F30] font-light leading-none mb-1">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-xs md:text-sm font-body tracking-wider sm:tracking-[0.2em] text-[#3E2C22] font-semibold uppercase">
                    Days
                  </span>
                </div>

                {/* HOURS */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#FFFDF8]/90 border border-[#651F30]/20 shadow-md transition-all duration-300 hover:-translate-y-1">
                  <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-[#651F30] font-light leading-none mb-1">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-xs md:text-sm font-body tracking-wider sm:tracking-[0.2em] text-[#3E2C22] font-semibold uppercase">
                    Hours
                  </span>
                </div>

                {/* MINUTES */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#FFFDF8]/90 border border-[#651F30]/20 shadow-md transition-all duration-300 hover:-translate-y-1">
                  <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-[#651F30] font-light leading-none mb-1">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-xs md:text-sm font-body tracking-wider sm:tracking-[0.2em] text-[#3E2C22] font-semibold uppercase">
                    Mins
                  </span>
                </div>

                {/* SECONDS */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#FFFDF8]/90 border border-[#651F30]/20 shadow-md transition-all duration-300 hover:-translate-y-1">
                  <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-[#651F30] font-light leading-none mb-1">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-xs md:text-sm font-body tracking-wider sm:tracking-[0.2em] text-[#3E2C22] font-semibold uppercase">
                    Secs
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </FloralPageBorder>
    </section>
  );
}

