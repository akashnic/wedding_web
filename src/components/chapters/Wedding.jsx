import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import ScrollReveal from '../effects/ScrollReveal';
import FloralPageBorder from '../decorations/FloralPageBorder';
import { LotusMedallion, FloralVineDivider } from '../decorations/FloralMotifs';

export default function Wedding({ config }) {
  const events = config.wedding.events || [];

  return (
    <section id="wedding-events" className="relative bg-[#F8F3EA] text-[#3E2C22] overflow-hidden">
      <FloralPageBorder
        variant="light"
        showCorners={true}
        showToran={true}
        showFooterGarland={true}
        className="min-h-screen py-16 sm:py-24 flex flex-col items-center justify-center px-4 sm:px-6"
      >
        {/* Soft Dusty Rose ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,105,122,0.12)_0%,transparent_75%)] pointer-events-none"></div>

        {/* Section Heading */}
        <ScrollReveal className="text-center w-full max-w-4xl mx-auto z-10 mb-12 sm:mb-16">
          <div className="mb-3">
            <LotusMedallion variant="light" size={48} />
          </div>

          <div className="inline-flex items-center gap-2 text-[#A8697A] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-[#C9A45C]" />
            Sacred Celebrations
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-[#651F30] mb-3 uppercase tracking-wider">
            Wedding Events
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg font-body text-[#A8697A] font-light max-w-2xl mx-auto italic">
            "Four sacred moments of love, joy, and eternal traditions."
          </p>

          <FloralVineDivider variant="light" className="my-5 max-w-xs mx-auto" />
        </ScrollReveal>

        {/* Floral Timeline Container */}
        <div className="relative w-full max-w-4xl mx-auto z-10">
          {/* Vertical Floral Vine Line (Spine) */}
          <div className="absolute top-6 bottom-6 left-6 md:left-1/2 -ml-[1px] w-[2px] bg-gradient-to-b from-[#A8697A]/20 via-[#651F30]/40 to-[#A8697A]/20 pointer-events-none"></div>

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id || index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Desktop Layout (md and above): Split across floral node */}
                  <div className="hidden md:flex items-center justify-between gap-6">
                    {/* Left Column */}
                    <div className="w-[44%] flex justify-end text-right">
                      {isEven ? (
                        /* Event Name Card */
                        <div className="w-full bg-[#FFFDF8]/90 backdrop-blur-sm border border-[#A8697A]/30 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-[#651F30]/40 transition-all duration-300">
                          <h3 className="text-xl sm:text-2xl font-display text-[#651F30] font-semibold tracking-wide">
                            {event.title}
                          </h3>
                        </div>
                      ) : (
                        /* Date & Time Card */
                        <div className="w-full bg-[#FFFDF8]/90 backdrop-blur-sm border border-[#A8697A]/30 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-[#651F30]/40 transition-all duration-300 flex flex-col items-end gap-1.5">
                          <div className="inline-flex items-center gap-1.5 text-[#651F30] font-body text-sm font-semibold">
                            <span>{event.date}</span>
                            <Calendar className="w-4 h-4 text-[#A8697A]" />
                          </div>
                          <div className="inline-flex items-center gap-1.5 text-[#A8697A] font-body text-xs font-medium">
                            <span>{event.time}</span>
                            <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Central Floral Node */}
                    <div className="w-[12%] flex justify-center z-10">
                      <div className="w-11 h-11 rounded-full bg-[#FFFDF8] border-2 border-[#A8697A]/50 shadow-sm flex items-center justify-center transition-transform hover:scale-110">
                        <LotusMedallion variant="light" size={26} />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-[44%] flex justify-start text-left">
                      {isEven ? (
                        /* Date & Time Card */
                        <div className="w-full bg-[#FFFDF8]/90 backdrop-blur-sm border border-[#A8697A]/30 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-[#651F30]/40 transition-all duration-300 flex flex-col items-start gap-1.5">
                          <div className="inline-flex items-center gap-1.5 text-[#651F30] font-body text-sm font-semibold">
                            <Calendar className="w-4 h-4 text-[#A8697A]" />
                            <span>{event.date}</span>
                          </div>
                          <div className="inline-flex items-center gap-1.5 text-[#A8697A] font-body text-xs font-medium">
                            <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      ) : (
                        /* Event Name Card */
                        <div className="w-full bg-[#FFFDF8]/90 backdrop-blur-sm border border-[#A8697A]/30 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-[#651F30]/40 transition-all duration-300">
                          <h3 className="text-xl sm:text-2xl font-display text-[#651F30] font-semibold tracking-wide">
                            {event.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout (< md): Floral Node on left, unified card on right */}
                  <div className="md:hidden flex items-center">
                    {/* Floral Node on line */}
                    <div className="absolute left-6 -translate-x-1/2 z-10">
                      <div className="w-9 h-9 rounded-full bg-[#FFFDF8] border-2 border-[#A8697A]/50 shadow-xs flex items-center justify-center">
                        <LotusMedallion variant="light" size={22} />
                      </div>
                    </div>

                    {/* Event Content Card */}
                    <div className="ml-14 w-full">
                      <div className="bg-[#FFFDF8]/95 border border-[#A8697A]/30 rounded-2xl p-4 shadow-xs">
                        <h3 className="text-xl font-display text-[#651F30] font-semibold mb-2">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-body">
                          <span className="inline-flex items-center gap-1 text-[#651F30] font-medium">
                            <Calendar className="w-3.5 h-3.5 text-[#A8697A]" />
                            {event.date}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[#A8697A]">
                            <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                            {event.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </FloralPageBorder>
    </section>
  );
}


