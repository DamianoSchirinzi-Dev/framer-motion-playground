import { motion } from "framer-motion";

export default function ScrollReveal () {
  return (
    <motion.div
      className="px-6 py-2 bg-white rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 100,
        transition: {
          duration: 1.5,
        },
      }}
      viewport={{once:true}}
    >
      Fade in on first time in view
    </motion.div>
  );
};
