import { motion } from "framer-motion";

export default function LoveLetter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass p-10 md:p-14 max-w-2xl w-full relative overflow-hidden"
    >
      <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-6">
        a letter
      </p>

      <h2 className="text-3xl text-pink-300 font-semibold mb-8">
        Dear Lehara,
      </h2>

      <div className="text-base md:text-lg leading-[2] text-white/70 space-y-5">
        <p>
          I don't know exactly when it happened, but at some point you just
          became my favourite part of everything....
        </p>
        <p>
          The small things — the way you laugh, the way you talk about things
          you care about — I notice all of it. And I wouldn't trade any of it.
        </p>
        <p>
          I made this for you because some feelings are too big to just say out
          loud. So here's all of it, in one place....
        </p>
      </div>

      <div className="mt-10 text-right text-white/40 text-sm">
        — Arosh Dewmina
      </div>
    </motion.div>
  );
}
