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
        animate={{
          x: 0,
          transition: { type: "spring", delay: 0.2, duration: 1.2 },
        }}
      >
        {props.text}
      </motion.div>
    </div>
  );
}
