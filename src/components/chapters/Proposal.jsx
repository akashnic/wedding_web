import React from 'react';
import ScrollReveal from '../effects/ScrollReveal';

export default function Proposal({ config }) {
  const data = config.story.engagement;
  
  return (
    <section className="min-h-screen py-24 flex flex-col items-center justify-center relative bg-deep-maroon/20 px-6">
      <ScrollReveal className="text-center w-full max-w-4xl mx-auto z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-antique-gold mb-4 uppercase tracking-wider">
          {data.title}
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl font-body text-warm-white/80 font-light max-w-2xl mx-auto mb-10 italic">
          "And then, forever became a little more real."
        </p>

        <div className="border border-antique-gold/30 p-12 rounded-2xl bg-cinematic-black/50 backdrop-blur-sm inline-block">
          <p className="font-body tracking-[0.3em] text-antique-gold mb-8 text-sm">A NEW CHAPTER BEGINS</p>
          <div className="text-3xl md:text-5xl font-display text-warm-white tracking-widest space-y-4">
            <p>19</p>
            <p className="text-antique-gold">&bull;</p>
            <p>04</p>
            <p className="text-antique-gold">&bull;</p>
            <p>2026</p>
          </div>
          <p className="font-body tracking-[0.3em] text-antique-gold mt-8 text-sm">ENGAGED</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
