import { motion } from "framer-motion";

export default function FloatingCard() {
  return (
    <motion.div
      className="px-8 py-4 bg-white rounded-lg"
      animate={{ y: [10, -10, 10] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      Smooth Floating Animation{" "}
    </motion.div>
  );
}
