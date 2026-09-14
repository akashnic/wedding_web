import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import ScrollReveal from '../effects/ScrollReveal';
import FloralPageBorder from '../decorations/FloralPageBorder';
import FloralCardFrame from '../decorations/FloralCardFrame';
import { LotusMedallion, FloralVineDivider } from '../decorations/FloralMotifs';
import groomDefaultPhoto from '../../assets/pics/akash.jpeg';
import brideDefaultPhoto from '../../assets/pics/vaishnavi.jpeg';

export default function MeetCouple({ config }) {
  const couple = config?.couple || {};
  const groomPhoto = couple.groomImage || groomDefaultPhoto;
  const bridePhoto = couple.brideImage || brideDefaultPhoto;
  const groomName = couple.groom || "Akash Verma";
  const brideName = couple.bride || "Vaishnavi Kasera";
  const groomParents = couple.groomParents || "S/o Mr. Nilesh Kumar Verma & Mrs. Bharti Verma";
  const brideParents = couple.brideParents || "D/o Mr. Madan Gopal & Mrs. Sudha Rani";
  const groomBio = couple.groomBio || "Steadfast, warm, and devoted — embarking on the most beautiful chapter with the love of his life.";
  const brideBio = couple.brideBio || "Graceful, vibrant, and kind-hearted — stepping into forever with pure joy, elegance, and love.";

  return (
    <section id="meet-couple" className="relative bg-[#F8F3EA] overflow-hidden">
      <FloralPageBorder
        variant="light"
        showCorners={true}
        showToran={true}
        showFooterGarland={true}
        className="min-h-screen py-20 sm:py-28 flex flex-col items-center justify-center px-4 sm:px-6"
      >
        {/* Soft Warm Dusty Rose Ambient Light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,105,122,0.14)_0%,rgba(201,164,92,0.08)_50%,transparent_75%)] pointer-events-none"></div>

        <div className="w-full max-w-6xl mx-auto z-10">
          
          {/* ========================================================================= */}
          {/* SECTION HEADER */}
          {/* ========================================================================= */}
          <ScrollReveal className="text-center w-full max-w-3xl mx-auto mb-12 sm:mb-16">
            {/* Sacred Lotus Crest */}
            <div className="mb-3 flex justify-center">
              <LotusMedallion variant="light" size={54} />
            </div>

            {/* Tagline / Eyebrow */}
            {/* <div className="inline-flex items-center justify-center gap-2 text-[#A8697A] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-2">
              <Sparkles className="w-4 h-4 text-[#C9A45C]" />
              Shubh Vivah &bull; Meet The Couple
              <Sparkles className="w-4 h-4 text-[#C9A45C]" />
            </div> */}

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-[#651F30] mb-3 uppercase tracking-wider">
              Two Hearts, One Journey
            </h2>
            
            {/* Romantic Quote */}
            <p className="text-base sm:text-lg md:text-xl font-body text-[#A8697A] font-light max-w-2xl mx-auto mb-4 italic leading-relaxed">
              "Two souls with but a single thought, two hearts that beat as one."
            </p>

            <FloralVineDivider variant="light" className="my-4 max-w-sm mx-auto" />
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* COUPLE SHOWCASE CARDS */}
          {/* ========================================================================= */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* Desktop Center Union Knot & Medallion */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-[#FFFDF8] border-2 border-[#C9A45C] shadow-[0_8px_30px_rgba(101,31,48,0.25)] flex items-center justify-center text-[#651F30] transform transition-transform hover:scale-110">
                <span className="font-accent text-3xl text-[#C9A45C] -mt-1 select-none">&amp;</span>
              </div>
              <span className="text-[10px] uppercase font-display tracking-[0.3em] text-[#651F30] bg-[#FFF8EC] px-3 py-0.5 rounded-full border border-[#C9A45C]/40 shadow-sm mt-2 font-semibold">
                Together
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
              
              {/* ----------------------------------------------------------------------- */}
              {/* GROOM CARD */}
              {/* ----------------------------------------------------------------------- */}
              <ScrollReveal direction="left" className="h-full">
                <FloralCardFrame
                  variant="light"
                  className="bg-[#FFFDF8]/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 h-full flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-[#A8697A]/30 hover:border-[#651F30]/50 group"
                >
                  {/* Indian Royal Arch Photo Container */}
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto mb-6">
                    {/* Layered Decorative Gold & Crimson Border Frame */}
                    <div className="p-2 sm:p-2.5 rounded-t-[140px] rounded-b-2xl bg-gradient-to-b from-[#C9A45C] via-[#EDDFC4] to-[#A8697A]/60 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="relative rounded-t-[132px] rounded-b-[10px] overflow-hidden aspect-[4/5] bg-[#3E2C22] shadow-inner">
                        <img
                          src={groomPhoto}
                          alt={groomName}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="eager"
                        />
                        
                        {/* Soft Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"></div>

                        {/* Top Auspicious Arch Motif */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-85">
                          <LotusMedallion variant="gold" size={32} />
                        </div>
                      </div>
                    </div>

                    {/* Role Pill Badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                      <div className="inline-flex items-center gap-1.5 bg-[#651F30] text-[#FFF8EC] px-5 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase border-2 border-[#C9A45C] shadow-md">
                        <Sparkles className="w-3 h-3 text-[#C9A45C]" />
                        <span>THE GROOM</span>
                      </div>
                    </div>
                  </div>

                  {/* Groom Information */}
                  <div className="mt-4 flex flex-col items-center flex-grow">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display text-[#651F30] font-medium tracking-wide mb-1.5">
                      {groomName}
                    </h3>
                    
                    {/* <p className="text-xs sm:text-sm font-body text-[#A8697A] font-semibold tracking-wider uppercase mb-3">
                      {groomParents}
                    </p> */}

                    {/* <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent my-2"></div>

                    <p className="text-sm sm:text-base font-body text-[#3E2C22] font-light leading-relaxed max-w-sm mx-auto italic mt-1">
                      "{groomBio}"
                    </p> */}
                  </div>

                  {/* Bottom Auspicious Motif */}
                  <div className="mt-6 pt-3 border-t border-[#A8697A]/20 w-full flex justify-center items-center gap-2 text-[#C9A45C]">
                    <span className="text-xs tracking-[0.2em] font-body text-[#A8697A] font-medium uppercase">
                      Devotion &bull; Strength &bull; Love
                    </span>
                  </div>
                </FloralCardFrame>
              </ScrollReveal>

              {/* Mobile Connector Badge */}
              <div className="lg:hidden flex items-center justify-center my-2">
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#C9A45C]"></div>
                  <div className="w-12 h-12 rounded-full bg-[#651F30] border-2 border-[#C9A45C] shadow-lg flex items-center justify-center text-[#FFF8EC]">
                    <span className="font-accent text-2xl text-[#C9A45C] -mt-1">&amp;</span>
                  </div>
                  <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#C9A45C]"></div>
                </div>
              </div>

              {/* ----------------------------------------------------------------------- */}
              {/* BRIDE CARD */}
              {/* ----------------------------------------------------------------------- */}
              <ScrollReveal direction="right" className="h-full">
                <FloralCardFrame
                  variant="light"
                  className="bg-[#FFFDF8]/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 h-full flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-[#A8697A]/30 hover:border-[#651F30]/50 group"
                >
                  {/* Indian Royal Arch Photo Container */}
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto mb-6">
                    {/* Layered Decorative Gold & Crimson Border Frame */}
                    <div className="p-2 sm:p-2.5 rounded-t-[140px] rounded-b-2xl bg-gradient-to-b from-[#C9A45C] via-[#EDDFC4] to-[#A8697A]/60 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="relative rounded-t-[132px] rounded-b-[10px] overflow-hidden aspect-[4/5] bg-[#3E2C22] shadow-inner">
                        <img
                          src={bridePhoto}
                          alt={brideName}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="eager"
                        />
                        
                        {/* Soft Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"></div>

                        {/* Top Auspicious Arch Motif */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-85">
                          <LotusMedallion variant="gold" size={32} />
                        </div>
                      </div>
                    </div>

                    {/* Role Pill Badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                      <div className="inline-flex items-center gap-1.5 bg-[#651F30] text-[#FFF8EC] px-5 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase border-2 border-[#C9A45C] shadow-md">
                        <Sparkles className="w-3 h-3 text-[#C9A45C]" />
                        <span>THE BRIDE</span>
                      </div>
                    </div>
                  </div>

                  {/* Bride Information */}
                  <div className="mt-4 flex flex-col items-center flex-grow">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display text-[#651F30] font-medium tracking-wide mb-1.5">
                      {brideName}
                    </h3>
                    
                    {/* <p className="text-xs sm:text-sm font-body text-[#A8697A] font-semibold tracking-wider uppercase mb-3">
                      {brideParents}
                    </p>

                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent my-2"></div>

                    <p className="text-sm sm:text-base font-body text-[#3E2C22] font-light leading-relaxed max-w-sm mx-auto italic mt-1">
                      "{brideBio}"
                    </p> */}
                  </div>

                  {/* Bottom Auspicious Motif */}
                  <div className="mt-6 pt-3 border-t border-[#A8697A]/20 w-full flex justify-center items-center gap-2 text-[#C9A45C]">
                    <span className="text-xs tracking-[0.2em] font-body text-[#A8697A] font-medium uppercase">
                      Grace &bull; Radiance &bull; Joy
                    </span>
                  </div>
                </FloralCardFrame>
              </ScrollReveal>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* BOTTOM SACRED UNION BANNER */}
          {/* ========================================================================= */}
          {/* <ScrollReveal className="mt-14 sm:mt-18 text-center max-w-2xl mx-auto">
            <div className="bg-[#FFFDF8]/70 backdrop-blur-sm px-6 py-4 rounded-2xl border border-[#C9A45C]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[#651F30]">
                <Heart className="w-4 h-4 fill-current text-[#A8697A]" />
                <span className="text-xs sm:text-sm font-display tracking-widest uppercase font-semibold">
                  Akash &amp; Vaishnavi
                </span>
              </div>
              <div className="text-xs font-body tracking-[0.2em] text-[#A8697A] uppercase font-medium">
                {config?.wedding?.date || "21 November 2026"} &bull; {config?.venue?.city || "Kanpur"}
              </div>
            </div>
          </ScrollReveal> */}

        </div>
      </FloralPageBorder>
    </section>
  );
}


