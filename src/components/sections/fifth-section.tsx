import Cottage from '../../assets/cottage-3.png';
import { motion } from "framer-motion";
import { containerVariants, fadeInLeft, fadeInBottom, commonTransitions } from "../animations";
import { AnimatedBar } from "../animated-components";

export default function FifthSection() {
  return (
    <section className="p-20 flex justify-center">
      <div className="min-xl:w-1/2">
        <motion.div 
          className="bg-bright-blue flex flex-col text-white rounded-l-3xl p-10 w-9/12 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-40 h-40 rounded-full top-0 -right-20 absolute bg-bright-blue"></div>
          
          <motion.h1 
            variants={fadeInLeft}
            className="text-6xl font-medium w-3/4"
          >
            Discovering Peace In Nature's Simplicity
          </motion.h1>
          
          <motion.p 
            variants={fadeInLeft}
            transition={{ delay: 0.2, ...commonTransitions }}
            className="font-extralight text-sm w-8/12 py-8"
          >
            Recharge in cozy spaces surrounded by nature where comfort, calm, and simplicity meet in every corner.
          </motion.p>
          
          <AnimatedBar number={97} name="Safety Rating" />
          <AnimatedBar number={90} name="Quality Standards" />
          
          <motion.div 
            variants={fadeInBottom}
            transition={{ delay: 0.8, ...commonTransitions }}
            className="w-80 absolute top-20 -right-60"
          >
            <img src={Cottage} alt="cottage" className="rounded-4xl"></img>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
