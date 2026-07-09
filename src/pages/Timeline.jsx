import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const timeline = [
  {
    emoji: "👀",
    title: "The First Look",
    date: "2024",
    desc: "Something felt different the first time I saw her. I couldn't explain it — I just didn't want to look away.",
  },
  {
    emoji: "💬",
    title: "First Conversation",
    date: "2024",
    desc: "We talked for hours and I forgot the time completely. She had a way of making everything feel easy.",
  },
  {
    emoji: "🌹",
    title: "First Date",
    date: "2025",
    desc: "Nervous, excited, completely myself. That day I realised — I wanted many more days exactly like this one.",
  },
  {
    emoji: "🤝",
    title: "We Became Official",
    date: "2025",
    desc: "Officially us. Still the best thing that's ever happened to me.",
  },
  {
    emoji: "✨",
    title: "Our Best Memory",
    date: "2025",
    desc: "A moment so perfect it felt like the world paused just for us. I will carry it with me always.",
  },
  {
    emoji: "♾️",
    title: "Forever Starts Now",
    date: "2026 →",
    desc: "Every day with her is a new favourite. This is only the beginning of our story.",
  },
];

export default function Timeline() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <Navbar />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl text-center text-pink-300 font-bold mb-4"
      >
        Our Story
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-white/40 tracking-widest mb-16 text-sm"
      >
        how it all began
      </motion.p>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto flex flex-col relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/60 via-purple-500/60 to-transparent" />

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="relative flex gap-6 mb-10"
          >
            {/* Dot */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl z-10"
              style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
            >
              {item.emoji}
            </div>

            {/* Card */}
            <div className="glass p-6 flex-1 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-pink-200">{item.title}</h2>
                <span className="text-xs text-white/40 font-mono">{item.date}</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
