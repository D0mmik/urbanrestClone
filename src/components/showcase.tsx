import {useEffect} from "react";
import {animate, motion, useMotionValue, useTransform} from "framer-motion";

export default function Showcase({children, text, num}: { children: string; num: number; text?: string }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isNaN(num)) {
      motionValue.set(0);
      const controls = animate(motionValue, num, {duration: 1, ease: "easeOut"});
      return () => controls.stop();
    }
  }, [num, motionValue]);

  return (
    <motion.div
      initial={{y: "-50%", opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 1, ease: "easeInOut"}}
      className="bg-bright-blue text-white p-5 rounded-3xl w-full text-center"
    >
      <p className="text-4xl flex justify-center text-center">
        <motion.span>
          {rounded}
        </motion.span> {children}
      </p>
      <p className="font-extralight text-sm">{text}</p>
    </motion.div>
  );
}
