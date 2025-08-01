import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { barVariants, progressBarVariants, slowTransition } from "./animations";

export function AnimatedNumber({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    motionValue.set(0);
    const controls = animate(motionValue, value, { 
      duration, 
      ease: "easeOut" 
    });
    return () => controls.stop();
  }, [value, motionValue, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export function AnimatedBar({ 
  number, 
  name, 
  delay = 0.5 
}: { 
  number: number; 
  name: string; 
  delay?: number;
}) {
  return (
    <motion.div 
      variants={barVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-9/12 rounded-full h-3 justify-between relative font-light mb-15"
    >
      <p>{name}</p>
      <p style={{marginRight:`${100 - number}%` }}>
        <AnimatedNumber value={number} />
        %
      </p>
      <div className="bg-white rounded-full h-2 absolute w-full top-7"></div>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${number}%` }}
        transition={{ 
          duration: slowTransition.duration, 
          delay, 
          ease: slowTransition.ease 
        }}
        className="bg-bg-bar rounded-full h-2 absolute top-7"
      ></motion.div>
    </motion.div>
  );
} 