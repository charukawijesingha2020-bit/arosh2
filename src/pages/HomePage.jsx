import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FloatingHearts from "../components/FloatingHearts";
import DaysCounter from "../components/DaysCounter";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 gap-10">
      <Navbar />
      <FloatingHearts />

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-3 mt-10"
      >
        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
          Our Story
        </h1>
        <p className="text-pink-300/70 text-lg tracking-[0.25em]">
          Arosh &amp; Lehara
        </p>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg md:text-xl text-white/50 max-w-md leading-relaxed"
      >
        Some things just feel right from the start.
      </motion.p>

      {/* Days counter */}
      <DaysCounter />

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(236,72,153,0.45)" }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate("/memories")}
        className="px-12 py-5 rounded-full text-xl font-semibold text-white"
        style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
      >
        Open Our Memories 💖
      </motion.button>
    </div>
  );
}
