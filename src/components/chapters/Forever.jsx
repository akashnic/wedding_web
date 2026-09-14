import React from 'react';
import ScrollReveal from '../effects/ScrollReveal';
import { Sparkles, Heart } from 'lucide-react';
import FloralPageBorder from '../decorations/FloralPageBorder';
import { LotusMedallion, FloralVineDivider } from '../decorations/FloralMotifs';

export default function Forever({ config }) {
  const groomFirst = config.couple.groom.split(' ')[0].toUpperCase();
  const brideFirst = config.couple.bride.split(' ')[0].toUpperCase();

  return (
    <section className="relative bg-gradient-to-b from-[#24080F] via-[#3D0F1B] to-[#1B050B] text-[#FFFDF8] overflow-hidden">
      <FloralPageBorder
        variant="gold"
        showCorners={true}
        showToran={true}
        showFooterGarland={true}
        className="py-20 sm:py-28 flex flex-col items-center justify-center px-4 sm:px-6 text-center"
      >
        {/* Luxury ambient radial light & gold particle glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.18)_0%,rgba(101,31,48,0.3)_50%,transparent_80%)] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none"></div>

        <ScrollReveal className="w-full max-w-2xl mx-auto z-10 flex flex-col items-center">
          {/* Lotus Crest */}
          <div className="mb-3">
            <LotusMedallion variant="gold" size={54} />
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display !text-[#FFFDF8] uppercase tracking-wider mb-2 leading-tight">
            And So, Our Forever Begins
          </h3>

          {/* Heartfelt Quote */}
          <p className="text-sm sm:text-base md:text-lg font-body text-[#EDDFC4] font-light italic max-w-lg mx-auto mb-4 leading-relaxed">
            "Thank you for being a part of our story."
          </p>

          <FloralVineDivider variant="gold" className="my-2 max-w-xs mx-auto" />

          {/* Couple Names & Date */}
          <div className="my-6 space-y-2">
            <p className="text-2xl sm:text-3xl md:text-4xl font-display !text-[#FFFDF8] tracking-widest uppercase">
              {groomFirst} <span className="text-[#C9A45C] font-light">&amp;</span> {brideFirst}
            </p>
            <p className="font-body text-xs sm:text-sm tracking-[0.3em] text-[#EDDFC4] font-medium uppercase">
              {config.wedding.date.toUpperCase()}
            </p>
          </div>

          {/* Footer Credit */}
          <div className="pt-6 border-t border-[#C9A45C]/25 w-full max-w-xs mx-auto mt-4">
            <p className="font-body text-[11px] sm:text-xs tracking-[0.2em] text-[#EDDFC4]/80 uppercase">
              With Love &amp; Gratitude
            </p>
          </div>
        </ScrollReveal>
      </FloralPageBorder>
    </section>
  );
}

