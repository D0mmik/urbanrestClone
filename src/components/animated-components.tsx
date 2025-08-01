import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { barVariants, slowTransition } from "./animations";

export function AnimatedNumber({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      setDisplayValue(0);
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const currentValue = Math.round(value * progress);
        setDisplayValue(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [value, duration, isInView]);

  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
    >
      <motion.span>{displayValue}%</motion.span>
    </motion.div>
  );
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-9/12 rounded-full h-3 justify-between relative font-light mb-15"
    >
      <p>{name}</p>
      <p style={{marginRight:`${100 - number}%` }}>
        <AnimatedNumber value={number} />
      </p>
      <div className="bg-white rounded-full h-2 absolute w-full top-7"></div>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${number}%` }}
        viewport={{ once: true }}
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