import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
//  ADD YOUR PHOTOS HERE
//  1. Copy your image files into:  frontend/public/gallery/
//  2. Add each filename + a caption to the list below
// ============================================================
const photos = [
  { src: "https://res.cloudinary.com/dixt9vlv3/image/upload/v1778122261/WhatsApp_Image_2026-05-07_at_08.09.18_2_uzzvza.jpg", caption: "Our first chapter 💕" },
  { src: "https://res.cloudinary.com/dixt9vlv3/image/upload/v1778121978/WhatsApp_Image_2026-05-07_at_08.09.19_wz3nif.jpg", caption: "The smile I live for 😊" },
  { src: "https://res.cloudinary.com/dixt9vlv3/image/upload/v1778121977/WhatsApp_Image_2026-05-07_at_08.09.18_p1rce6.jpg", caption: "Together always ❤️" },
  { src: "https://res.cloudinary.com/dixt9vlv3/image/upload/v1778121978/WhatsApp_Image_2026-05-07_at_08.09.29_lehlxv.jpg", caption: "My favourite moment ✨" },
 ];

const slideVariants = {
  enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0, scale: 0.95 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0, scale: 0.95 }),
};

export default function GallerySlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightbox, setLightbox] = useState(false);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + photos.length) % photos.length);
  };

  const jumpTo = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  return (
    <>
      <div className="w-full max-w-5xl px-4">

        {/* ── Featured image ── */}
        <div
          className="relative h-[520px] rounded-3xl overflow-hidden cursor-zoom-in shadow-2xl"
          onClick={() => setLightbox(true)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              src={photos[current].src}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`cap-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute bottom-8 left-0 right-0 text-center text-white text-2xl font-light tracking-widest drop-shadow-lg"
            >
              {photos[current].caption}
            </motion.p>
          </AnimatePresence>

          {/* Counter badge */}
          <div className="absolute top-4 right-4 glass px-3 py-1 text-sm text-white/90 font-mono">
            {current + 1} / {photos.length}
          </div>

          {/* Expand hint */}
          <div className="absolute top-4 left-4 glass px-3 py-1 text-sm text-white/70">
            🔍 Tap to expand
          </div>

          {/* Prev / Next hit areas */}
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            className="absolute left-0 top-0 h-full w-16 flex items-center justify-start pl-4 group"
          >
            <span className="glass text-white text-2xl px-3 py-3 opacity-0 group-hover:opacity-100 transition-opacity">‹</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            className="absolute right-0 top-0 h-full w-16 flex items-center justify-end pr-4 group"
          >
            <span className="glass text-white text-2xl px-3 py-3 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
          </button>
        </div>

        {/* ── Dot nav + arrow buttons ── */}
        <div className="flex justify-center items-center gap-5 mt-6">
          <button
            onClick={() => go(-1)}
            className="glass w-12 h-12 flex items-center justify-center text-xl text-white hover:scale-110 transition-transform"
          >
            ◀
          </button>

          <div className="flex gap-2 items-center">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => jumpTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-3 bg-pink-400"
                    : "w-3 h-3 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="glass w-12 h-12 flex items-center justify-center text-xl text-white hover:scale-110 transition-transform"
          >
            ▶
          </button>
        </div>

        {/* ── Thumbnail strip ── */}
        <div className="flex gap-3 mt-6 overflow-x-auto pb-2 justify-center flex-wrap">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => jumpTo(i)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                i === current
                  ? "border-pink-400 shadow-[0_0_16px_rgba(236,72,153,0.6)]"
                  : "border-white/10 opacity-50 hover:opacity-80"
              }`}
            >
              <img src={photo.src} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(false)}
          >
            <motion.img
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              src={photos[current].src}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption in lightbox */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-8 left-0 right-0 text-center text-white/80 text-xl tracking-widest"
            >
              {photos[current].caption}
            </motion.p>

            {/* Close */}
            <button
              className="absolute top-5 right-6 text-white/70 hover:text-white text-4xl transition-colors"
              onClick={() => setLightbox(false)}
            >
              ✕
            </button>

            {/* Lightbox prev/next */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 glass text-white text-3xl px-4 py-4 hover:scale-110 transition-transform"
              onClick={(e) => { e.stopPropagation(); go(-1); }}
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 glass text-white text-3xl px-4 py-4 hover:scale-110 transition-transform"
              onClick={(e) => { e.stopPropagation(); go(1); }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
