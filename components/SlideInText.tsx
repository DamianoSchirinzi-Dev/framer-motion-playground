import { motion } from "framer-motion";

interface SlideInTextProps {
  text: string;
}

export default function SlideInText(props: SlideInTextProps) {
  return (
    <div className="w-full pt-20 ">
      <motion.div
        className="text-2xl text-center text-white"
        initial={{ x: -600 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          path: "M0,0 L100,100 L200,0",
          delay: 0.6,
          duration: 1.5,
        }}
      >
        {props.text}
      </motion.div>
    </div>
  );
}
