import React, { useState, useEffect, useCallback } from 'react';
import ScrollReveal from '../effects/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  ExternalLink, 
  Heart, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Users, 
  Plus, 
  Minus,
  Navigation,
  UserCheck
} from 'lucide-react';
import FloralPageBorder from '../decorations/FloralPageBorder';
import FloralCardFrame from '../decorations/FloralCardFrame';
import { LotusMedallion, FloralVineDivider } from '../decorations/FloralMotifs';

// Curated default heartfelt blessings for Akash & Vaishnavi
const DEFAULT_BLESSINGS = [
  {
    id: 'def-1',
    name: 'The Verma Family',
    date: 'Kanpur',
    message: 'Wishing dearest Akash & Vaishnavi a lifetime filled with boundless love, shared laughter, good health, and eternal prosperity!'
  },
  {
    id: 'def-2',
    name: 'The Kasera Family',
    date: 'Kanpur',
    message: 'May your sacred bond be blessed with pure happiness, deep understanding, and cherished memories. Congratulations!'
  },
  {
    id: 'def-3',
    name: 'Priya & Ankit Verma',
    date: 'Lucknow',
    message: 'Heartiest congratulations to our dearest brother & bhabhi! Wishing you endless adventures, joy, and eternal love.'
  },
  {
    id: 'def-4',
    name: 'Dr. Rajesh & Sunita Gupta',
    date: 'Delhi',
    message: 'Heartiest congratulations to Akash & Vaishnavi. May God shower His choicest blessings upon you both on this auspicious journey.'
  },
  {
    id: 'def-5',
    name: 'Neha & Rohan Sharma',
    date: 'Noida',
    message: 'Two beautiful hearts uniting in love and tradition. Wishing Akash and Vaishnavi endless smiles and a blissful married life!'
  },
  {
    id: 'def-6',
    name: 'Vikram & Meera Chawla',
    date: 'Mumbai',
    message: 'May the love and harmony you share today deepen with each passing year. Heartfelt prayers and warmest blessings!'
  }
];

export default function MapAndRSVPBlessings({ config }) {
  // RSVP Form State
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpArrivalDate, setRsvpArrivalDate] = useState('2026-11-21');
  const [rsvpTravelBy, setRsvpTravelBy] = useState('');
  const [rsvpPersonCount, setRsvpPersonCount] = useState(1);
  const [isRsvpSubmitting, setIsRsvpSubmitting] = useState(false);
  const [isRsvpSubmitted, setIsRsvpSubmitted] = useState(false);

  // Blessings Form State
  const [blessingName, setBlessingName] = useState('');
  const [blessingMessage, setBlessingMessage] = useState('');
  const [isBlessingSubmitting, setIsBlessingSubmitting] = useState(false);
  const [isBlessingSubmitted, setIsBlessingSubmitted] = useState(false);

  // Blessings List initialized with clean state (clears old local test data)
  const [blessingsList, setBlessingsList] = useState(DEFAULT_BLESSINGS);

  // Fetch live blessings from Google Sheet tab
  const fetchLiveBlessings = useCallback(async () => {
    const scriptUrl = config?.integrations?.googleSheets?.rsvpScriptUrl;
    if (!scriptUrl) return;

    try {
      const response = await fetch(scriptUrl);
      if (response.ok) {
        const data = await response.json();
        if (data && Array.isArray(data.blessings) && data.blessings.length > 0) {
          setBlessingsList(data.blessings);
        }
      }
    } catch (err) {
      console.warn("Could not fetch live blessings from Google Sheet:", err);
    }
  }, [config?.integrations?.googleSheets?.rsvpScriptUrl]);

  useEffect(() => {
    // Clear any stale legacy localStorage blessings
    try {
      localStorage.removeItem('wedding_blessings');
    } catch (e) {
      // Ignore storage errors
    }
    fetchLiveBlessings();
  }, [fetchLiveBlessings]);

  // Prepare smoothly looping items for the horizontal carousel marquee
  const marqueeList = blessingsList.length < 8
    ? [...blessingsList, ...blessingsList, ...blessingsList, ...blessingsList]
    : [...blessingsList, ...blessingsList];

  // Handle RSVP Submit
  const handleRsvpSubmit = async (e) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;

    setIsRsvpSubmitting(true);

    const rsvpData = {
      type: 'rsvp',
      name: rsvpName.trim(),
      arrivalDate: rsvpArrivalDate,
      travelBy: rsvpTravelBy.trim() || 'Not specified',
      personCount: rsvpPersonCount,
      submittedAt: new Date().toISOString(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const scriptUrl = config?.integrations?.googleSheets?.rsvpScriptUrl;

    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(rsvpData)
        });
      } catch (err) {
        console.error("Error submitting RSVP to Google Sheets:", err);
      }
    }

    try {
      const newRsvp = {
        id: Date.now(),
        ...rsvpData
      };
      const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      localStorage.setItem('wedding_rsvps', JSON.stringify([newRsvp, ...existing]));
    } catch (err) {
      console.error("Could not save RSVP locally", err);
    }

    setIsRsvpSubmitting(false);
    setIsRsvpSubmitted(true);
  };

  const handleRsvpReset = () => {
    setRsvpName('');
    setRsvpArrivalDate('2026-11-21');
    setRsvpTravelBy('');
    setRsvpPersonCount(1);
    setIsRsvpSubmitted(false);
  };

  // Handle Blessings Submit
  const handleBlessingSubmit = async (e) => {
    e.preventDefault();
    if (!blessingName.trim() || !blessingMessage.trim()) return;

    setIsBlessingSubmitting(true);

    const blessingData = {
      type: 'blessing',
      name: blessingName.trim(),
      message: blessingMessage.trim(),
      submittedAt: new Date().toISOString(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const scriptUrl = config?.integrations?.googleSheets?.rsvpScriptUrl;

    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(blessingData)
        });
      } catch (err) {
        console.error("Error submitting blessing to Google Sheets:", err);
      }
    }

    const newBlessing = {
      id: Date.now(),
      ...blessingData
    };

    const updated = [newBlessing, ...blessingsList];
    setBlessingsList(updated);

    setIsBlessingSubmitting(false);
    setIsBlessingSubmitted(true);

    // Sync live blessings after sheet processes insertion
    setTimeout(() => {
      fetchLiveBlessings();
    }, 3000);
  };

  const handleBlessingReset = () => {
    setBlessingName('');
    setBlessingMessage('');
    setIsBlessingSubmitted(false);
  };

  return (
    <section id="venue-and-blessings" className="relative bg-[#EDDFC4]">
      <FloralPageBorder
        variant="burgundy"
        showCorners={true}
        showToran={true}
        showFooterGarland={true}
        className="min-h-screen py-16 sm:py-24 flex flex-col items-center justify-center px-3 sm:px-6"
      >
        {/* Warm Ivory ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,243,234,0.7)_0%,transparent_80%)] pointer-events-none"></div>

        <div className="w-full max-w-5xl mx-auto z-10 space-y-12 sm:space-y-16">
          
          {/* ========================================================================= */}
          {/* MAP & VENUE SECTION */}
          {/* ========================================================================= */}
          <ScrollReveal>
            <FloralCardFrame variant="light" className="w-full bg-[#F8F3EA]/95 p-6 sm:p-10 md:p-12 shadow-xl backdrop-blur-md">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="mb-3">
                  <LotusMedallion variant="light" size={48} />
                </div>

                <div className="inline-flex items-center gap-2 text-[#A8697A] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-2">
                  <MapPin className="w-4 h-4 text-[#651F30]" />
                  The Wedding Destination
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-[#651F30] mb-3 uppercase tracking-wider">
                  Where We Begin Our Forever
                </h2>

                <FloralVineDivider variant="light" className="mb-4 max-w-xs mx-auto" />
                
                <p className="text-xl md:text-2xl font-body text-[#A8697A] font-medium mb-1 italic">
                  {config.venue.name}
                </p>
                <p className="text-[#3E2C22]/80 font-body text-sm md:text-base leading-relaxed">
                  {config.venue.address}
                </p>
              </div>

              {/* Live Google Map Container */}
              <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#A8697A]/30 shadow-inner bg-[#EDDFC4] aspect-[16/9] md:aspect-[21/9] min-h-[280px] sm:min-h-[340px] mb-8">
                <iframe
                  title="Gulab Greens Location Map"
                  src={config.venue.mapEmbedUrl || "https://maps.google.com/maps?q=Gulab+Greens+Kanpur&t=&z=15&ie=UTF8&iwloc=&output=embed"}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover filter contrast-[1.02]"
                ></iframe>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <a 
                  href={config.venue.googleMapsUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-3 bg-[#651F30] text-[#F8F3EA] hover:bg-[#3E2C22] px-8 sm:px-10 py-3.5 rounded-full font-body tracking-widest text-xs sm:text-sm font-semibold uppercase transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </FloralCardFrame>
          </ScrollReveal>


          {/* ========================================================================= */}
          {/* RSVP SECTION */}
          {/* ========================================================================= */}
          <ScrollReveal>
            <FloralCardFrame variant="light" className="w-full bg-[#F8F3EA]/95 p-5 sm:p-8 md:p-10 shadow-xl backdrop-blur-md">
              <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
                <div className="mb-2">
                  <LotusMedallion variant="light" size={42} />
                </div>

                <div className="inline-flex items-center gap-2 text-[#A8697A] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-1.5">
                  <UserCheck className="w-4 h-4 text-[#C9A45C]" />
                  Auspicious Attendance
                </div>

                <h2 className="text-3xl sm:text-4xl font-display text-[#651F30] mb-2 uppercase tracking-wider">
                  RSVP
                </h2>

                <FloralVineDivider variant="light" className="mb-3 max-w-xs mx-auto" />
                
                <p className="text-sm sm:text-base font-body text-[#A8697A] italic">
                  "Please grace us with your presence and let us know your travel plans."
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <AnimatePresence mode="wait">
                  {!isRsvpSubmitted ? (
                    <motion.form
                      key="rsvp-form"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleRsvpSubmit}
                      className="space-y-4 sm:space-y-5 text-left"
                    >
                      {/* Row 1: Name & Date of Arrival (Desktop: side by side, Mobile: stacked) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-start">
                        {/* Guest Name */}
                        <div>
                          <label 
                            htmlFor="rsvp-name" 
                            className="block text-xs md:text-sm font-body font-semibold tracking-wider text-[#651F30] uppercase mb-1.5"
                          >
                            Name of Guest / Family <span className="text-[#A8697A]">*</span>
                          </label>
                          <input
                            id="rsvp-name"
                            name="rsvpName"
                            type="text"
                            required
                            value={rsvpName}
                            onChange={(e) => setRsvpName(e.target.value)}
                            placeholder="e.g. Rahul &amp; Sneha Sharma"
                            className="w-full h-[46px] px-4 py-2.5 rounded-xl bg-[#FFFDF8] border border-[#A8697A]/40 text-[#3E2C22] placeholder-[#3E2C22]/40 font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#651F30]/40 focus:border-[#651F30] transition shadow-xs"
                          />
                        </div>

                        {/* Date of Arrival */}
                        <div>
                          <label 
                            htmlFor="rsvp-arrival-date" 
                            className="flex items-center gap-1.5 text-xs md:text-sm font-body font-semibold tracking-wider text-[#651F30] uppercase mb-1.5"
                          >
                            <Calendar className="w-3.5 h-3.5 text-[#A8697A]" />
                            <span>Date of Arrival</span>
                          </label>
                          <input
                            id="rsvp-arrival-date"
                            name="rsvpArrivalDate"
                            type="date"
                            value={rsvpArrivalDate}
                            onChange={(e) => setRsvpArrivalDate(e.target.value)}
                            className="w-full h-[46px] px-4 py-2.5 rounded-xl bg-[#FFFDF8] border border-[#A8697A]/40 text-[#3E2C22] font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#651F30]/40 focus:border-[#651F30] transition shadow-xs cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Row 2: Travelling By & Count of Person (Desktop: side by side, Mobile: stacked) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-start">
                        {/* Travelling By with Hint */}
                        <div>
                          <label 
                            htmlFor="rsvp-travel-by" 
                            className="flex items-center gap-1.5 text-xs md:text-sm font-body font-semibold tracking-wider text-[#651F30] uppercase mb-1.5"
                          >
                            <Navigation className="w-3.5 h-3.5 text-[#A8697A]" />
                            <span>Travelling By</span>
                          </label>
                          <input
                            id="rsvp-travel-by"
                            name="rsvpTravelBy"
                            type="text"
                            value={rsvpTravelBy}
                            onChange={(e) => setRsvpTravelBy(e.target.value)}
                            placeholder="(Train/Car/Air)"
                            className="w-full h-[46px] px-4 py-2.5 rounded-xl bg-[#FFFDF8] border border-[#A8697A]/40 text-[#3E2C22] placeholder-[#3E2C22]/50 font-body text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#651F30]/40 focus:border-[#651F30] transition shadow-xs"
                          />
                        </div>

                        {/* Count of Person */}
                        <div>
                          <label 
                            htmlFor="rsvp-person-count" 
                            className="flex items-center gap-1.5 text-xs md:text-sm font-body font-semibold tracking-wider text-[#651F30] uppercase mb-1.5"
                          >
                            <Users className="w-3.5 h-3.5 text-[#A8697A]" />
                            <span>Count of Person</span>
                          </label>
                          <div className="w-full h-[46px] flex items-center justify-between bg-[#FFFDF8] border border-[#A8697A]/40 rounded-xl px-2.5 shadow-xs transition focus-within:ring-2 focus-within:ring-[#651F30]/40 focus-within:border-[#651F30]">
                            <button
                              type="button"
                              onClick={() => setRsvpPersonCount((prev) => Math.max(1, prev - 1))}
                              aria-label="Decrease Person Count"
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#F8F3EA] border border-[#651F30]/20 text-[#651F30] flex items-center justify-center hover:bg-[#651F30] hover:text-white transition cursor-pointer shrink-0"
                            >
                              <Minus className="w-4 h-4" />
                            </button>

                            <input
                              id="rsvp-person-count"
                              name="rsvpPersonCount"
                              type="number"
                              min="1"
                              max="99"
                              value={rsvpPersonCount}
                              onChange={(e) => {
                                const val = parseInt(e.target.value, 10);
                                setRsvpPersonCount(isNaN(val) ? 1 : Math.max(1, Math.min(99, val)));
                              }}
                              className="w-full text-center font-display font-bold text-base sm:text-lg text-[#651F30] bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />

                            <button
                              type="button"
                              onClick={() => setRsvpPersonCount((prev) => Math.min(99, prev + 1))}
                              aria-label="Increase Person Count"
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#F8F3EA] border border-[#651F30]/20 text-[#651F30] flex items-center justify-center hover:bg-[#651F30] hover:text-white transition cursor-pointer shrink-0"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* RSVP Submit Button */}
                      <div className="pt-2 text-center">
                        <button
                          type="submit"
                          disabled={isRsvpSubmitting || !rsvpName.trim()}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#651F30] text-[#F8F3EA] hover:bg-[#3E2C22] disabled:opacity-50 disabled:cursor-not-allowed px-8 sm:px-12 py-3 rounded-full font-body tracking-[0.18em] text-xs sm:text-sm font-semibold uppercase transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                          <span>{isRsvpSubmitting ? 'CONFIRMING...' : 'CONFIRM RSVP'}</span>
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="rsvp-success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-6 px-4 bg-[#FFFDF8] border border-[#A8697A]/30 rounded-2xl shadow-sm space-y-3"
                    >
                      <div className="w-12 h-12 bg-[#651F30]/10 rounded-full flex items-center justify-center mx-auto text-[#651F30]">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-display text-[#651F30]">
                        RSVP Received with Gratitude!
                      </h3>

                      <p className="text-[#3E2C22]/80 font-body text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                        Dearest <span className="font-semibold text-[#651F30]">{rsvpName}</span>, we eagerly await celebrating our special day with you.
                      </p>

                      <div className="bg-[#F8F3EA] border border-[#A8697A]/25 rounded-xl p-2.5 max-w-md mx-auto text-xs text-[#3E2C22] font-body flex flex-wrap items-center justify-center gap-2">
                        {rsvpTravelBy && (
                          <span className="px-2.5 py-0.5 bg-[#651F30]/10 rounded-full font-medium text-[#651F30]">
                            Travel: {rsvpTravelBy}
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 bg-[#651F30]/10 rounded-full font-medium text-[#651F30]">
                          Arrival: {rsvpArrivalDate}
                        </span>
                        <span className="px-2.5 py-0.5 bg-[#651F30]/10 rounded-full font-medium text-[#651F30]">
                          {rsvpPersonCount} {rsvpPersonCount === 1 ? 'Guest' : 'Guests'}
                        </span>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={handleRsvpReset}
                          className="inline-flex items-center gap-1.5 border border-[#651F30] text-[#651F30] hover:bg-[#651F30] hover:text-[#F8F3EA] px-6 py-2 rounded-full font-body tracking-wider text-xs font-semibold uppercase transition-all duration-300 shadow-xs cursor-pointer"
                        >
                          <span>Submit Another RSVP</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FloralCardFrame>
          </ScrollReveal>


          {/* ========================================================================= */}
          {/* SEND YOUR BLESSINGS SECTION (Compact & Dedicated) */}
          {/* ========================================================================= */}
          <ScrollReveal>
            <FloralCardFrame variant="light" className="w-full bg-[#F8F3EA]/95 p-5 sm:p-8 md:p-10 shadow-xl backdrop-blur-md">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <div className="mb-2">
                  <LotusMedallion variant="light" size={42} />
                </div>

                <div className="inline-flex items-center gap-2 text-[#A8697A] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#C9A45C]" />
                  Heartfelt Wishes
                </div>

                <h2 className="text-3xl sm:text-4xl font-display text-[#651F30] mb-2 uppercase tracking-wider">
                  Send Your Blessings
                </h2>

                <FloralVineDivider variant="light" className="mb-3 max-w-xs mx-auto" />
                
                <p className="text-xs sm:text-sm font-body text-[#A8697A] italic">
                  "Your heartfelt blessings and prayers are the greatest gift for our new beginnings."
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <AnimatePresence mode="wait">
                  {!isBlessingSubmitted ? (
                    <motion.form
                      key="blessing-form"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleBlessingSubmit}
                      className="space-y-4 text-left"
                    >
                      {/* Name Input */}
                      <div>
                        <label 
                          htmlFor="blessing-name" 
                          className="block text-xs font-body font-semibold tracking-wider text-[#651F30] uppercase mb-1.5"
                        >
                          Your Name <span className="text-[#A8697A]">*</span>
                        </label>
                        <input
                          id="blessing-name"
                          name="blessingName"
                          type="text"
                          required
                          value={blessingName}
                          onChange={(e) => setBlessingName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFDF8] border border-[#A8697A]/40 text-[#3E2C22] placeholder-[#3E2C22]/40 font-body text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#651F30]/40 focus:border-[#651F30] transition shadow-xs"
                        />
                      </div>

                      {/* Blessings Textarea */}
                      <div>
                        <label 
                          htmlFor="blessing-message" 
                          className="block text-xs font-body font-semibold tracking-wider text-[#651F30] uppercase mb-1.5"
                        >
                          Blessings &amp; Wishes <span className="text-[#A8697A]">*</span>
                        </label>
                        <textarea
                          id="blessing-message"
                          name="blessingMessage"
                          required
                          rows={3}
                          value={blessingMessage}
                          onChange={(e) => setBlessingMessage(e.target.value)}
                          placeholder="Write your heartfelt blessings and wishes for Akash &amp; Vaishnavi..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFDF8] border border-[#A8697A]/40 text-[#3E2C22] placeholder-[#3E2C22]/40 font-body text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#651F30]/40 focus:border-[#651F30] transition shadow-xs resize-y"
                        ></textarea>
                      </div>

                      {/* Send Button */}
                      <div className="pt-1 text-center">
                        <button
                          type="submit"
                          disabled={isBlessingSubmitting || !blessingName.trim() || !blessingMessage.trim()}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#651F30] text-[#F8F3EA] hover:bg-[#3E2C22] disabled:opacity-50 disabled:cursor-not-allowed px-8 sm:px-12 py-3 rounded-full font-body tracking-[0.18em] text-xs sm:text-sm font-semibold uppercase transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                          <span>{isBlessingSubmitting ? 'SENDING...' : 'SEND BLESSINGS'}</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="blessing-success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-6 px-4 bg-[#FFFDF8] border border-[#A8697A]/30 rounded-2xl shadow-sm space-y-3"
                    >
                      <div className="w-12 h-12 bg-[#651F30]/10 rounded-full flex items-center justify-center mx-auto text-[#651F30]">
                        <Heart className="w-7 h-7 fill-current" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-display text-[#651F30]">
                        Thank You for Your Blessings!
                      </h3>

                      <p className="text-[#3E2C22]/80 font-body text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                        Dearest <span className="font-semibold text-[#651F30]">{blessingName}</span>, your prayers and warm wishes mean the world to Akash &amp; Vaishnavi.
                      </p>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={handleBlessingReset}
                          className="inline-flex items-center gap-1.5 border border-[#651F30] text-[#651F30] hover:bg-[#651F30] hover:text-[#F8F3EA] px-6 py-2 rounded-full font-body tracking-wider text-xs font-semibold uppercase transition-all duration-300 shadow-xs cursor-pointer"
                        >
                          <Heart className="w-3.5 h-3.5 fill-current" />
                          <span>Send Another Blessing</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Horizontal Slow Moving Carousel of Blessings */}
                {blessingsList.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-[#A8697A]/25 w-full">
                    <div className="text-center mb-5">
                      <div className="inline-flex items-center justify-center gap-2 text-xs md:text-sm uppercase tracking-[0.25em] font-body text-[#A8697A] font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                        <span>Recent Blessings &amp; Wishes</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                      </div>
                      <p className="text-[11px] sm:text-xs font-body text-[#3E2C22]/60 mt-1 italic">
                        
                      </p>
                    </div>

                    {/* Horizontal Marquee Wrapper with soft edge fades */}
                    <div className="relative overflow-hidden w-full py-2 blessings-marquee-wrapper group">
                      {/* Left & Right gradient masks for smooth fade in/out */}
                      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-20 bg-gradient-to-r from-[#F8F3EA] via-[#F8F3EA]/90 to-transparent z-10" />
                      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-20 bg-gradient-to-l from-[#F8F3EA] via-[#F8F3EA]/90 to-transparent z-10" />

                      {/* Infinite Slow Moving Track */}
                      <div className="animate-blessings-marquee flex gap-4 sm:gap-5 py-2">
                        {marqueeList.map((item, index) => (
                          <div
                            key={`${item.id}-${index}`}
                            className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 bg-[#FFFDF8] border border-[#A8697A]/30 hover:border-[#651F30]/50 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left select-none"
                          >
                            <div>
                              <div className="flex justify-between items-start gap-2 mb-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-7 h-7 rounded-full bg-[#651F30]/10 flex items-center justify-center text-[#651F30] shrink-0">
                                    <Heart className="w-3.5 h-3.5 fill-current" />
                                  </div>
                                  <span className="font-display font-bold text-[#651F30] text-sm sm:text-base leading-snug truncate max-w-[170px] sm:max-w-[200px]">
                                    {item.name}
                                  </span>
                                </div>
                                <span className="text-[10px] sm:text-[11px] font-body text-[#A8697A] font-medium bg-[#A8697A]/10 px-2 py-0.5 rounded-full shrink-0">
                                  {item.date || 'Blessed'}
                                </span>
                              </div>

                              <p className="text-[#3E2C22]/85 font-body text-xs sm:text-sm italic leading-relaxed line-clamp-4 mt-2">
                                "{item.message}"
                              </p>
                            </div>

                            <div className="pt-3 mt-3 border-t border-[#A8697A]/15 flex items-center justify-between text-[10px] text-[#A8697A] font-body tracking-wider uppercase">
                              <span>Akash &amp; Vaishnavi</span>
                              <span className="text-[#C9A45C]">✦</span>
                              <span>Wedding Blessing</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </FloralCardFrame>
          </ScrollReveal>

        </div>
      </FloralPageBorder>
    </section>
  );
}

