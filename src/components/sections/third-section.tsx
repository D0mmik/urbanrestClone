import { useEffect } from "react";
import {motion, useMotionValue, useTransform, animate, Variants} from "framer-motion";
import Cottage2 from '../../assets/cottage-2.png';

function AnimatedNumber({ value }: { value: number }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    motionValue.set(0);
    const controls = animate(motionValue, value, { duration: 2, ease: ["easeOut"] });
    return () => controls.stop();
  }, [value, motionValue]);

  return <motion.span>{rounded}</motion.span>;
}

export default function ThirdSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: "-50%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: "50%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="p-20 text-main flex justify-center">
      <div className="min-xl:w-1/2 flex justify-between">
        <motion.div
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInLeft}>
            <h1 className="text-6xl font-medium">Living With Nature</h1>
            <h1 className="text-6xl font-medium">Living Off The Crowd</h1>
          </motion.div>

          <motion.p variants={fadeInLeft} className="w-96 text-bright-blue my-10">
            Escape into nature where quiet moments and slow living bring you back to what truly matters.
          </motion.p>

          <motion.div className="flex justify-between mt-20" variants={containerVariants}>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center font-extralight border-main border-x-2 px-10 py-5 hover:bg-bg-p"
            >
              <h2 className="text-3xl font-medium">
                <AnimatedNumber value={37} />+
              </h2>
              <p>Cozy Retreats</p>
              <p>Across Nature</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center font-extralight px-10 hover:bg-bg-p py-5"
            >
              <h2 className="text-3xl font-medium">24/7</h2>
              <p>Guest Support</p>
              <p>Always On</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center font-extralight border-main border-x-2 px-10 py-5 hover:bg-bg-p"
            >
              <h2 className="text-3xl font-medium">
                <AnimatedNumber value={230} />M+
              </h2>
              <p>Loyal Customers</p>
              <p>Worldwide</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={Cottage2} alt="cottage" className="min-xl:w-96" />
        </motion.div>
      </div>
    </section>
  );
}
