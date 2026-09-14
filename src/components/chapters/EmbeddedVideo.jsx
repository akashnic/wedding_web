import React from 'react';
import ScrollReveal from '../effects/ScrollReveal';
import FloralPageBorder from '../decorations/FloralPageBorder';
import FloralCardFrame from '../decorations/FloralCardFrame';
import { LotusMedallion, FloralVineDivider } from '../decorations/FloralMotifs';

export default function EmbeddedVideo({ config }) {
  return (
    <section className="relative bg-[#F8F3EA]">
      <FloralPageBorder
        variant="light"
        showCorners={true}
        showToran={true}
        showFooterGarland={true}
        className="min-h-screen py-24 flex flex-col items-center justify-center px-4 sm:px-6"
      >
        <ScrollReveal className="text-center w-full max-w-4xl mx-auto z-10">
          <div className="mb-3">
            <LotusMedallion variant="light" size={48} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-[#651F30] mb-3 uppercase tracking-wider">
            A Glimpse Into Our Journey
          </h2>

          <FloralVineDivider variant="light" className="mb-10 max-w-xs mx-auto" />
          
          <FloralCardFrame
            variant="burgundy"
            className="w-full aspect-video bg-[#3E2C22] shadow-2xl"
          >
            <div className="w-full h-full flex items-center justify-center relative rounded-xl overflow-hidden">
              {/* Subtle warm vignette overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(101,31,48,0.2)_0%,rgba(62,44,34,0.6)_100%)] flex items-center justify-center">
                <button className="w-20 h-20 rounded-full border-2 border-[#C9A45C] flex items-center justify-center bg-[#651F30]/90 hover:bg-[#651F30] text-[#EDDFC4] hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer">
                  <span className="ml-1 text-2xl">▶</span>
                </button>
              </div>
              <p className="text-[#EDDFC4]/60 font-body text-xs sm:text-sm tracking-widest uppercase mt-28">VIDEO HIGHLIGHT</p>
            </div>
          </FloralCardFrame>
        </ScrollReveal>
      </FloralPageBorder>
    </section>
  );
}

