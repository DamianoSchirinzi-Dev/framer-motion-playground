import { motion } from "framer-motion";

export default function AnimatedCard() {
  return (
    <motion.div
      whileTap={{ rotateY: 180 }}
      className="w-full text-center bg-white"
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "visible",
        width: "260px", // Set an appropriate width for the card
        height: "150px", // Set an appropriate height for the card
        border: "1px solid #ccc", // Optional: Add a border for better visibility
        borderRadius: "8px", // Optional: Rounded corners for better aesthetics
      }}
    >
      {/* Front of the card */}
      <div
        className="px-8 py-12"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
        }}
      >
        Front of the card Click to flip!
      </div>

      {/* Back of the card */}
      <div
        className="py-10 px-11"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        Back of the card Let go to reset!
      </div>
    </motion.div>
  );
}
