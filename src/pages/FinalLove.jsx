import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FloatingHearts from "../components/FloatingHearts";

const lines = [
  "In every version of my life,",
  "I would still find you.",
  "",
  "And I'd choose you",
  "every single time.",
];

export default function FinalLove() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <Navbar />
      <FloatingHearts />

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-7xl mb-10 select-none"
      >
        ❤️
      </motion.div>

      <div className="flex flex-col gap-3 mb-12">
        {lines.map((line, i) =>
          line === "" ? (
            <div key={i} className="h-3" />
          ) : (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 + 0.2, duration: 0.6 }}
              className="text-2xl md:text-3xl text-white/80 font-light tracking-wide"
            >
              {line}
            </motion.p>
          )
        )}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="text-white/30 text-sm tracking-[0.3em]"
      >
        — Arosh
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        onClick={() => navigate("/")}
        className="mt-16 text-white/25 hover:text-white/50 text-sm tracking-widest transition-colors"
      >
        ← back to the start
      </motion.button>
    </div>
  );
}
