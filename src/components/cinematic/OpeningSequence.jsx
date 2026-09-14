import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ganeshjiLogo from '../../assets/ganeshji1.png';
import FloralPageBorder from '../decorations/FloralPageBorder';
import { LotusMedallion, FloralVineDivider } from '../decorations/FloralMotifs';

export default function OpeningSequence({ config }) {
  const [step, setStep] = useState(1);

  // Automatic progression for opening sequence with slower, cinematic timing
  useEffect(() => {
    if (step >= 2 && step <= 5) {
      const duration = step === 5 ? 4000 : 2500;
      const timer = setTimeout(() => {
        if (step < 5) {
          setStep((prev) => prev + 1);
        } else if (step === 5) {
          // Directly move to MeetCouple section after the sequence finishes
          const meetCoupleSection = document.getElementById('meet-couple');
          if (meetCoupleSection) {
            meetCoupleSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleStart = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  return (
    <FloralPageBorder 
      variant="gold" 
      showCorners={true} 
      showToran={true} 
      showFooterGarland={true}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#3E2C22] via-[#651F30] to-[#3E2C22] px-4 text-[#FFF8EC]"
      innerClassName="flex flex-col items-center justify-center h-full"
    >
      <div 
        className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
        onClick={handleStart}
      >
      {/* Subtle warm rose lighting overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,105,122,0.25)_0%,transparent_70%)] pointer-events-none"></div>
      
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="scene1" 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.6 } }} 
            transition={{ duration: 1 }} 
            className="z-10 text-center flex flex-col items-center max-w-2xl mx-auto cursor-pointer select-none"
          >
            {/* Ganeshji Logo - Large, luminous & light */}
            <div className="mb-6 flex justify-center">
              <img 
                src={ganeshjiLogo} 
                alt="Lord Ganesha" 
                className="w-48 sm:w-56 md:w-64 h-auto object-contain mx-auto filter brightness-0 invert drop-shadow-[0_0_25px_rgba(201,164,92,0.65)]" 
              />
            </div>

            {/* Sacred Ganesh Mantra - Light & Radiant */}
            <div className="mb-6 space-y-1.5 text-center px-4">
              <p className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-[#FFF8EC] tracking-wide leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
              </p>
              <p className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-[#FFF8EC] tracking-wide leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
              </p>
              <FloralVineDivider variant="gold" className="my-3 opacity-80" />
            </div>

            {/* Diya & Tap to continue */}
            <div className="flex flex-col items-center group pt-2">
              <span className="text-5xl sm:text-6xl animate-pulse filter drop-shadow-[0_0_20px_rgba(255,200,100,0.8)] transition-transform duration-300 group-hover:scale-110">
                🪔
              </span>
              <p className="mt-4 text-xs sm:text-sm text-[#FFF8EC] font-body tracking-[0.3em] text-center font-semibold group-hover:text-white transition-colors drop-shadow-md">
                TAP DIYA TO CONTINUE
              </p>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="scene2" 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.02 }} 
            transition={{ duration: 0.8 }} 
            className="z-10 text-center px-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display text-[#FFF8EC] tracking-widest text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              OUR FOREVER BEGINS
            </h1>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="scene3" 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -15 }} 
            transition={{ duration: 0.8 }} 
            className="text-center z-10 px-4"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display text-[#FFF8EC] tracking-widest drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              WITH
            </h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display text-[#FFF8EC] tracking-widest mt-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              TWO PEOPLE
            </h2>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div 
            key="scene4" 
            initial={{ opacity: 0, scale: 1.05 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center z-10 px-4"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display text-[#FFF8EC] tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              {config.couple.groom.split(' ')[0].toUpperCase()}
            </h1>
            <span className="block my-4 sm:my-6 text-2xl sm:text-3xl text-[#C9A45C]">&amp;</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display text-[#FFF8EC] tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              {config.couple.bride.split(' ')[0].toUpperCase()}
            </h1>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div 
            key="scene5" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, y: -15 }} 
            transition={{ duration: 0.5 }} 
            className="z-10 text-center px-4 flex flex-col items-center justify-center"
          >
            {(() => {
              const dateStr = config?.wedding?.date || "21 November 2026";
              const dateParts = dateStr.trim().split(/\s+/);
              const [day = "21", month = "NOVEMBER", year = "2026"] = dateParts;

              return (
                <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-6 md:space-y-8">
                  {/* Day (21) - using font-body / sans-serif so digit '1' is distinctly rendered as a numeral and not 'I' */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="block font-body font-bold text-7xl sm:text-8xl md:text-9xl tracking-normal text-[#FFF8EC] drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
                      {day}
                    </span>
                  </motion.div>

                  {/* Month (e.g. NOVEMBER) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="block font-display font-medium text-3xl sm:text-5xl md:text-6xl tracking-[0.25em] text-[#EDDFC4] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                      {month.toUpperCase()}
                    </span>
                  </motion.div>

                  {/* Year (e.g. 2026) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="block font-body font-light text-3xl sm:text-5xl md:text-6xl tracking-[0.25em] text-[#FFF8EC] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                      {year}
                    </span>
                  </motion.div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </FloralPageBorder>
  );
}
