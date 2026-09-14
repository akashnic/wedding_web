import React from 'react';
import ScrollReveal from '../effects/ScrollReveal';
import FloralPageBorder from '../decorations/FloralPageBorder';
import FloralCardFrame from '../decorations/FloralCardFrame';
import { LotusMedallion, FloralVineDivider } from '../decorations/FloralMotifs';

export default function Families({ config }) {
  return (
    <section className="relative bg-[#EEF0E0]">
      <FloralPageBorder
        variant="sage"
        showCorners={true}
        showToran={true}
        showFooterGarland={true}
        className="min-h-screen py-24 flex flex-col items-center justify-center px-4 sm:px-6"
      >
        {/* Sage ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,187,136,0.25)_0%,transparent_70%)] pointer-events-none"></div>

        <ScrollReveal className="text-center w-full max-w-5xl mx-auto z-10">
          <div className="mb-3">
            <LotusMedallion variant="sage" size={48} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-[#651F30] mb-3 uppercase tracking-wider">
            The People Who Made Us
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-body text-[#6E6B41] font-light max-w-2xl mx-auto mb-4 italic">
            "Two families. Two traditions. One celebration."
          </p>

          <FloralVineDivider variant="sage" className="mb-12 max-w-sm mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            
            <FloralCardFrame variant="sage" className="bg-[#FFFDF8]/80 backdrop-blur-sm p-8 text-center shadow-sm">
              <span className="text-xs uppercase tracking-[0.25em] text-[#6E6B41] font-semibold block mb-1">GROOM'S SIDE</span>
              <h3 className="text-2xl font-display text-[#651F30] mb-3 pb-2 border-b border-[#B7BB88]/60 inline-block">
                {config.couple.groom.split(' ')[0]}'s Family
              </h3>
              <div className="space-y-1 mt-3">
                <p className="text-[#3E2C22] font-body font-medium text-base"> Nilesh Kumar Verma</p>
                <p className="text-[#3E2C22] font-body font-medium text-base"> Bharti Verma</p>
                <p className="text-[#3E2C22] font-body font-medium text-base"> Akhilesh Chandra Verma</p>
                <p className="text-[#3E2C22] font-body font-medium text-base"> Rakhi Verma</p>
                <p className="text-[#3E2C22] font-body font-medium text-base"> Manish Kumar Verma</p>
                <p className="text-[#3E2C22] font-body font-medium text-base"> Laxmi Verma</p>
              </div>
            </FloralCardFrame>

            <FloralCardFrame variant="sage" className="bg-[#FFFDF8]/80 backdrop-blur-sm p-8 text-center shadow-sm">
              <span className="text-xs uppercase tracking-[0.25em] text-[#6E6B41] font-semibold block mb-1">BRIDE'S SIDE</span>
              <h3 className="text-2xl font-display text-[#651F30] mb-3 pb-2 border-b border-[#B7BB88]/60 inline-block">
                {config.couple.bride.split(' ')[0]}'s Family
              </h3>
              <div className="space-y-1 mt-3">
                <p className="text-[#3E2C22] font-body font-medium text-base"> Madan Gopal</p>
                <p className="text-[#3E2C22] font-body font-medium text-base"> Sudha Rani</p>
                <p className="text-[#3E2C22] font-body font-medium text-base"> Pavan Kumar Kasera</p>
                <p className="text-[#3E2C22] font-body font-medium text-base"> Nitya Kasera</p>
              </div>
            </FloralCardFrame>

            
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#3E2C22] font-body tracking-[0.2em] mb-2 text-xs sm:text-sm font-semibold">TWO FAMILIES</span>
            <span className="text-[#6E6B41] text-2xl mb-2 font-light">❦</span>
            <span className="text-[#3E2C22] font-body tracking-[0.2em] text-xs sm:text-sm font-semibold">ONE LOVE</span>
          </div>
        </ScrollReveal>
      </FloralPageBorder>
    </section>
  );
}

