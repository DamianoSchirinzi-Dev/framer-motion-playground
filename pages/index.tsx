import { motion, useScroll } from "framer-motion"

import DropDownMenu from "@/components/DropDownMenu";
import ScaleButton from "@/components/ScaleButton";
import AnimatedInput from "@/components/AnimatedInput";
import SlideInText from "@/components/SlideInText";
import AnimatedCard from "@/components/AnimatedCard";
import FloatingCard from "@/components/FloatingCard";
import ScrollReveal from "@/components/ScrollReveal";
import StaggeredList from "@/components/StaggeredList";
import FadeInCard from "@/components/FadeInCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import DraggableCard from "@/components/DraggableCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-24 py-20 mx-0 font-mono divide-y-2 text-custom_lilac bg-custom_lilac">
      <SlideInText text="Welcome to the page!" />

      <div className="flex flex-col items-center w-full gap-20 pt-16 justify-evenly md:flex-row md:gap-10 lg:gap-32">
        <DropDownMenu />
        <FadeInCard />
      </div>
      
      <div className="flex flex-col items-center w-full gap-20 pt-16 justify-evenly md:flex-row md:gap-10 lg:gap-32">
        <AnimatedCounter />
        <DraggableCard />
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-20 pt-16 md:flex-row md:gap-10 lg:gap-32">
        <AnimatedCard />
        <FloatingCard />
        <ScrollReveal />
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <ScaleButton />
        <StaggeredList />
      </div>

      <AnimatedInput />
    </main>
  );
}
