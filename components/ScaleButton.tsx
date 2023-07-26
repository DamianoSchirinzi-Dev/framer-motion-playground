import { motion} from "framer-motion";

export default function ScaleButton() {
    return(
        <div className="flex items-center justify-center w-full py-10 mx-4">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="p-10 mx-8 bg-white rounded-2xl w-80"
        >
          Hover & Click animations
        </motion.button>
      </div>
    )
}