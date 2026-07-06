import { motion } from "framer-motion";

// ── Change this to the day you two met / got together ──
const START_DATE = new Date("2025-05-20");

function getDays() {
  const diff = Date.now() - START_DATE.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function DaysCounter() {
  const days = getDays();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="glass px-10 py-6 text-center rounded-3xl"
    >
      <p className="text-white/50 text-sm tracking-[0.3em] uppercase mb-2">
        together for
      </p>
      <div className="flex items-end justify-center gap-2">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.9 }}
          className="text-6xl font-bold text-pink-300"
        >
          {days}
        </motion.span>
        <span className="text-2xl text-white/60 mb-2">days</span>
      </div>
      
      <p className="text-white/40 text-xs mt-2 tracking-widest">
        and every single one matters 💕
      </p>
    </motion.div>
  );
}
