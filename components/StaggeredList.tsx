import { motion } from "framer-motion";

export default function StaggeredList() {
  const items = ["This is a", "Staggered", "List"];

  return (
    <div>
      {items.map((item, index) => (
        <motion.div
          className="w-40 px-6 py-1 bg-white border-b-2 border-black rounded-md"
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: index * 0.4 } }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
