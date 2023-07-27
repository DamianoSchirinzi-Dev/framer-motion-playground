import { motion, Variants } from "framer-motion";

const list: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 0.8 },
  },
  hidden: { opacity: 0, scale: 0 },
};

export default function FadeInCard() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-2xl text-white">Animated using Variants</h1>
      <motion.ul initial="hidden" whileInView="visible" variants={list}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </motion.ul>
    </div>
  );
}
