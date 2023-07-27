import { motion } from "framer-motion";

export default function DraggableCard() {
  return (
    <motion.div
      className="p-4 bg-white rounded-lg"
      drag
      dragConstraints={{ left: 0, right: 30, top: 5, bottom: 5 }}
      dragElastic={0.2}
    >
      Drag me!
    </motion.div>
  );
}
