import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Input } from "../components/Input";

export default function AnimatedInput() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(-75);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="flex flex-col items-center w-full gap-10 pt-32 overflow-hidden border-collapse md:flex-row justify-evenly">
      <div>
        <motion.div
          className="px-6 py-4 bg-gray-200 border-2 border-black rounded-2xl"
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        >
          Use the input to move me!
        </motion.div>
      </div>
      <div className="flex flex-col gap-3 p-4 bg-white rounded-xl inputs">
        <Input value={x} set={setX}>
          X: 
        </Input>
        <Input value={y} set={setY}>
          Y:
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          Rotate:
        </Input>
      </div>
    </div>
  );
}
