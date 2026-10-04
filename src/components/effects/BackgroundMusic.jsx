import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mantraAudioFile from '../../assets/audio/Vakratunda Mahakaya.mp3';
import bgMusicAudioFile from '../../assets/audio/wedding-theme.mp3';

export default function BackgroundMusic({ config }) {
  const audioConfig = config?.audio || {};
  const isEnabled = audioConfig.enabled !== false;
  const mantraVol = audioConfig.mantraVolume ?? 0.35;
  const bgMusicVol = audioConfig.bgMusicVolume ?? 0.25;

  const [currentTrack, setCurrentTrack] = useState('mantra'); // 'mantra' | 'bgMusic'
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');

  const audioRef = useRef(null);
  const userInteractedRef = useRef(false);
  const tooltipTimeoutRef = useRef(null);

  // Helper to trigger temporary track banner/tooltip
  const triggerTooltip = (text) => {
    setTooltipText(text);
    setShowTooltip(true);
    if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 3800);
  };

  // Initialize and handle track transitions
  useEffect(() => {
    if (!isEnabled) return;

    // Create audio instance
    const audio = new Audio();
    audioRef.current = audio;

    const setupTrack = (trackType) => {
      if (trackType === 'mantra') {
        audio.src = mantraAudioFile;
        audio.loop = false;
        audio.volume = mantraVol;
      } else {
        audio.src = bgMusicAudioFile;
        audio.loop = true;
        audio.volume = bgMusicVol;
      }
    };

    // Initial setup with Mantra
    setupTrack('mantra');

    // When mantra finishes, transition to soothing wedding theme
    const handleTrackEnded = () => {
      if (currentTrack === 'mantra') {
        setCurrentTrack('bgMusic');
        setupTrack('bgMusic');
        audio.play().then(() => {
          setIsPlaying(true);
          triggerTooltip(audioConfig.bgMusicTitle || 'Soothing Wedding Theme');
        }).catch((err) => {
          console.warn('Playback error transitioning to background music:', err);
        });
      }
    };

    audio.addEventListener('ended', handleTrackEnded);

    // Attempt autoplay
    const attemptPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        triggerTooltip(audioConfig.mantraTitle || 'Sacred Ganesh Mantra');
      }).catch(() => {
        // Autoplay policy prevented playback without interaction
        setIsPlaying(false);
      });
    };

    attemptPlay();

    // Unlock audio on first user interaction anywhere if blocked by browser policy
    const handleFirstInteraction = () => {
      if (!userInteractedRef.current && audioRef.current) {
        userInteractedRef.current = true;
        if (audioRef.current.paused && !isMuted) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            triggerTooltip(
              currentTrack === 'mantra' 
                ? (audioConfig.mantraTitle || 'Sacred Ganesh Mantra') 
                : (audioConfig.bgMusicTitle || 'Soothing Wedding Theme')
            );
          }).catch((err) => console.log('Audio start error:', err));
        }
      }
    };

    window.addEventListener('click', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { passive: true });

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleTrackEnded);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    };
  }, [isEnabled]);

  // Update volume if config changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : (currentTrack === 'mantra' ? mantraVol : bgMusicVol);
    }
  }, [isMuted, currentTrack, mantraVol, bgMusicVol]);

  const togglePlayPause = (e) => {
    e.stopPropagation();
    userInteractedRef.current = true;
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      triggerTooltip('Music Paused');
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        triggerTooltip(
          currentTrack === 'mantra' 
            ? (audioConfig.mantraTitle || 'Sacred Ganesh Mantra') 
            : (audioConfig.bgMusicTitle || 'Soothing Wedding Theme')
        );
      }).catch((err) => {
        console.warn('Playback resume failed:', err);
      });
    }
  };

  if (!isEnabled) return null;

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2 select-none">
      {/* Floating Track Name / Status Badge */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3E2C22]/90 backdrop-blur-md border border-[#C9A45C]/50 shadow-[0_4px_16px_rgba(0,0,0,0.3)] text-[#FFF8EC] text-xs font-display tracking-wider"
          >
            <span className="text-[#C9A45C]">
              {isPlaying ? (currentTrack === 'mantra' ? '🪔' : '✨') : '⏸️'}
            </span>
            <span>{tooltipText}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Music Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlayPause}
        onMouseEnter={() => {
          setTooltipText(
            isPlaying 
              ? (currentTrack === 'mantra' ? (audioConfig.mantraTitle || 'Sacred Ganesh Mantra') : (audioConfig.bgMusicTitle || 'Soothing Wedding Theme')) 
              : 'Play Music'
          );
          setShowTooltip(true);
        }}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={isPlaying ? "Mute / Pause Music" : "Play Music"}
        className={`relative group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] border ${
          isPlaying
            ? 'bg-gradient-to-br from-[#651F30]/90 to-[#3E2C22]/90 border-[#C9A45C] text-[#FFF8EC] ring-2 ring-[#C9A45C]/30'
            : 'bg-[#3E2C22]/80 border-[#C9A45C]/40 text-[#EDDFC4]/70 hover:border-[#C9A45C]'
        }`}
      >
        {/* Subtle Ambient Pulse Ring when active */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-[#C9A45C]/40 animate-ping pointer-events-none opacity-60"></span>
        )}

        {/* Dynamic Animated Equalizer Bars / Muted Icon */}
        {isPlaying ? (
          <div className="flex items-end justify-center gap-[3px] h-4.5 w-5">
            <motion.span
              animate={{ height: ['30%', '100%', '40%', '80%', '30%'] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
              className="w-[3px] bg-[#C9A45C] rounded-full"
            />
            <motion.span
              animate={{ height: ['70%', '30%', '100%', '50%', '70%'] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut', delay: 0.15 }}
              className="w-[3px] bg-[#FFF8EC] rounded-full"
            />
            <motion.span
              animate={{ height: ['40%', '90%', '20%', '100%', '40%'] }}
              transition={{ repeat: Infinity, duration: 1.3, ease: 'easeInOut', delay: 0.3 }}
              className="w-[3px] bg-[#C9A45C] rounded-full"
            />
          </div>
        ) : (
          <div className="relative flex items-center justify-center">
            {/* Music note / muted speaker icon */}
            <svg 
              className="w-5 h-5 fill-current text-[#EDDFC4]/80 group-hover:text-[#FFF8EC] transition-colors" 
              viewBox="0 0 24 24"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
            {/* Diagonal Slash for muted/paused */}
            <span className="absolute w-6 h-[2px] bg-[#C9A45C] rotate-45 rounded-full shadow-sm"></span>
          </div>
        )}
      </motion.button>
    </div>
  );
}
