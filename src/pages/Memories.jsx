import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import GallerySlider from "../components/GallerySlider";
import LoveLetter from "../components/LoveLetter";

export default function Memories() {
  return (
    <div className="min-h-screen pt-28 pb-20 flex flex-col items-center gap-16">
      <Navbar />

      {/* Page title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-pink-300 tracking-wide">
          Our Memories
        </h1>
        <p className="mt-3 text-white/50 text-lg tracking-widest">
          every photo, a lifetime
        </p>
      </motion.div>

      {/* Love letter card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-5xl px-4"
      >
        <LoveLetter />
      </motion.div>

      {/* Divider */}
      <div className="flex items-center gap-4 w-full max-w-3xl px-4">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-pink-300 text-2xl">📷</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full flex flex-col items-center"
      >
        <GallerySlider />
      </motion.div>
    </div>
  );
}
