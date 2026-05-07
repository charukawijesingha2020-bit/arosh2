import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onCanPlay = () => setReady(true);
    audio.addEventListener("canplaythrough", onCanPlay);
    return () => audio.removeEventListener("canplaythrough", onCanPlay);
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (err) {
      console.error("Music error:", err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/dixt9vlv3/video/upload/v1778120868/Edd_Sheeran_-_Perfect__mp3.pm_is3iax.mp3"
        loop
        preload="auto"
        crossOrigin="anonymous"
      />

      {/* Tooltip */}
      <AnimatePresence>
        {!playing && ready && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="glass px-3 py-1 text-xs text-white/70 rounded-full"
          >
            play our song 🎵
          </motion.div>
        )}
      </AnimatePresence>

      {/* Player button */}
      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
          boxShadow: playing
            ? "0 0 24px rgba(236,72,153,0.7), 0 0 48px rgba(139,92,246,0.4)"
            : "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* Pulsing ring when playing */}
        {playing && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-pink-400"
              animate={{ scale: [1, 1.5, 1.8], opacity: [0.8, 0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-purple-400"
              animate={{ scale: [1, 1.4, 1.7], opacity: [0.6, 0.3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
            />
          </>
        )}

        <span className="text-2xl select-none">
          {playing ? "⏸" : "▶"}
        </span>
      </motion.button>

      {/* Music bars animation */}
      {playing && (
        <div className="flex items-end gap-[3px] h-5 px-1">
          {[0.3, 0.6, 1, 0.7, 0.4].map((delay, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full bg-pink-400"
              animate={{ height: ["6px", "18px", "6px"] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: delay * 0.3, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
