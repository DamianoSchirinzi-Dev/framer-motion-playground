import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedCounter() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, 100, { duration: 10 });

    return animation.stop;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 pt-10">
      <h1 className="text-2xl text-white">Animated Counter</h1>
      <motion.h1 className="p-4 text-2xl bg-white rounded-xl">
        {rounded}
      </motion.h1>
    </div>
  );
}
