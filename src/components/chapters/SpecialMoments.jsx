import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';
import ScrollReveal from '../effects/ScrollReveal';
import FloralPageBorder from '../decorations/FloralPageBorder';
import FloralCardFrame from '../decorations/FloralCardFrame';
import { LotusMedallion, FloralVineDivider } from '../decorations/FloralMotifs';
import moment1 from '../../assets/pics/moment1.jpeg';
import moment2 from '../../assets/pics/moment2.jpeg';
import moment3 from '../../assets/pics/moment3.jpeg';
import moment4 from '../../assets/pics/moment4.jpeg';
import moment5 from '../../assets/pics/moment5.jpeg';
import moment6 from '../../assets/pics/moment6.jpeg';

export default function SpecialMoments({ config }) {
  const defaultMoments = [
    {
      id: 1,
      title: "The First Chapter",
      subtitle: "Where it all began",
      image: moment1
    },
    {
      id: 2,
      title: "Quiet Conversations",
      subtitle: "Countless shared smiles",
      image: moment2
    },
    {
      id: 3,
      title: "Rings & Promises",
      subtitle: "A step closer to forever",
      image: moment3
    },
    {
      id: 4,
      title: "Celebrations & Joy",
      subtitle: "Surrounded by laughter",
      image: moment4
    },
    {
      id: 5,
      title: "Stolen Glances",
      subtitle: "Cherished little moments",
      image: moment5
    },
    {
      id: 6,
      title: "Towards Eternity",
      subtitle: "Ready for the big day",
      image: moment6
    }
  ];

  const moments = config?.moments || defaultMoments;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const autoPlayRef = useRef(null);

  // Preload all moment images for instant switching without lag
  useEffect(() => {
    if (moments && moments.length > 0) {
      moments.forEach((item, index) => {
        if (item.image) {
          const img = new Image();
          img.src = item.image;
          img.onload = () => {
            setLoadedImages((prev) => ({ ...prev, [index]: true }));
          };
        }
      });
    }
  }, [moments]);

  const restartAutoplay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % moments.length);
      }, 4500);
    }
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % moments.length);
    restartAutoplay();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + moments.length) % moments.length);
    restartAutoplay();
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    restartAutoplay();
  };

  // Autoplay functionality (every 4.5s)
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % moments.length);
      }, 4500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, moments.length]);

  // Framer Motion slide variants for smooth, elegant transitions
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 140 : -140,
      opacity: 0,
      scale: 0.96,
      filter: 'blur(4px)'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        x: { type: "spring", stiffness: 280, damping: 28 },
        opacity: { duration: 0.35, ease: "easeOut" },
        scale: { duration: 0.35, ease: "easeOut" },
        filter: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 140 : -140,
      opacity: 0,
      scale: 0.96,
      filter: 'blur(4px)',
      transition: {
        x: { type: "spring", stiffness: 280, damping: 28 },
        opacity: { duration: 0.28, ease: "easeIn" },
        scale: { duration: 0.28 },
        filter: { duration: 0.25 }
      }
    })
  };

  const currentMoment = moments[currentIndex];

  return (
    <section id="special-moments" className="relative bg-[#F8F3EA] overflow-hidden">
      <FloralPageBorder
        variant="light"
        showCorners={true}
        showToran={true}
        showFooterGarland={true}
        className="min-h-screen py-20 sm:py-24 flex flex-col items-center justify-center px-3 sm:px-6"
      >
        {/* Dusty rose ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,105,122,0.12)_0%,transparent_70%)] pointer-events-none"></div>

        <ScrollReveal className="text-center w-full max-w-5xl mx-auto z-10">
          <div className="mb-3">
            <LotusMedallion variant="light" size={48} />
          </div>

          <div className="inline-flex items-center gap-2 text-[#A8697A] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-[#C9A45C]" />
            Cherished Memories
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-[#651F30] mb-3 uppercase tracking-wider">
            Moments We'll Treasure
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg font-body text-[#A8697A] font-light max-w-2xl mx-auto mb-4 italic">
            "A collection of beautiful memories on our journey to forever."
          </p>

          <FloralVineDivider variant="light" className="mb-8 sm:mb-12 max-w-sm mx-auto" />

          {/* ========================================================================= */}
          {/* MOBILE & TABLET / DESKTOP CAROUSEL CONTAINER */}
          {/* ========================================================================= */}
          <div 
            className="relative w-full max-w-xl md:max-w-2xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={() => setIsAutoPlaying(false)}
          >
            {/* Slide Box */}
            <div className="relative overflow-hidden rounded-3xl min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center p-2">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;
                    if (swipe < -50 || velocity.x < -400) {
                      nextSlide();
                    } else if (swipe > 50 || velocity.x > 400) {
                      prevSlide();
                    }
                  }}
                  className="w-full h-full cursor-grab active:cursor-grabbing select-none"
                >
                  <FloralCardFrame
                    variant="light"
                    className="w-full bg-[#FFFDF8] rounded-2xl overflow-hidden shadow-xl border-2 border-[#A8697A]/30 p-3 sm:p-4"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-xl overflow-hidden bg-[#EDDFC4] shadow-inner">
                      {/* Subtle loading skeleton shimmer */}
                      {!loadedImages[currentIndex] && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#EDDFC4] via-[#F8F3EA] to-[#EDDFC4] animate-pulse"></div>
                      )}

                      <img
                        src={currentMoment.image}
                        alt={currentMoment.title}
                        className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${
                          loadedImages[currentIndex] ? 'opacity-100' : 'opacity-90'
                        }`}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        onLoad={() => setLoadedImages((prev) => ({ ...prev, [currentIndex]: true }))}
                      />
                      
                      {/* Dark gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none"></div>

                      {/* Heart Icon Badge */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FFFDF8]/85 backdrop-blur-md flex items-center justify-center text-[#651F30] shadow-sm">
                        <Heart className="w-4 h-4 fill-current text-[#651F30]" />
                      </div>

                      {/* Text content overlaid on bottom of image for mobile polish */}
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <h3 className="text-lg sm:text-2xl font-display text-[#FFFDF8] font-medium drop-shadow-md">
                          {currentMoment.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-body text-[#EDDFC4] font-light drop-shadow">
                          {currentMoment.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Caption Card */}
                    <div className="pt-4 pb-2 px-3 text-center">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#A8697A] font-semibold">
                        Akash &amp; Vaishnavi's Precious Memory
                      </p>
                    </div>
                  </FloralCardFrame>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows (Prev / Next) */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Photo"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FFFDF8] text-[#651F30] border-2 border-[#651F30]/40 shadow-lg flex items-center justify-center hover:bg-[#651F30] hover:text-[#FFFDF8] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Photo"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FFFDF8] text-[#651F30] border-2 border-[#651F30]/40 shadow-lg flex items-center justify-center hover:bg-[#651F30] hover:text-[#FFFDF8] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6">
              {moments.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === index
                      ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-[#651F30] shadow-sm'
                      : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#A8697A]/40 hover:bg-[#A8697A]'
                  }`}
                />
              ))}
            </div>

            {/* Mobile swipe helper hint */}
            <p className="mt-3 text-[11px] sm:text-xs text-[#A8697A] font-body tracking-wider uppercase">
              &larr; Swipe left or right to explore &rarr;
            </p>
          </div>
        </ScrollReveal>
      </FloralPageBorder>
    </section>
  );
}


