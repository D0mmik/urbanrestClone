import Showcase from "../showcase.tsx";
import Cottage from "../../assets/cottage.png"
import {motion} from "framer-motion";

export default function FirstSection() {
  return (
    <section className="my-20 p-15 pt-0 flex justify-center">
      <div className="min-xl:w-1/2">
        <motion.h1 className="text-8xl font-semibold text-main" initial={{x: '-100%', opacity: 0}}
                   animate={{x: 0, opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>Discover the Art of Peaceful Living
        </motion.h1>
        <div className="flex flex-row gap-8">
          <div className="w-[35%]">
            <motion.p initial={{x: '-100%', opacity: 0}}
                      animate={{x: 0, opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}
                      className="text-bright-blue p-5 rounded-2xl bg-bg-p mt-16">Leave the chaos behind. UrbanRest brings you
              closer to
              nature with cozy stays designed
              for rest, reflection, and simplicity.
            </motion.p>
            <div className="flex flex-col items-start">
              <div className="flex flex-row justify-between gap-5 mt-5 w-full">
                <Showcase text="Loyal Customers" num={230}>M+</Showcase>
                <Showcase text="Cozy Cabins" num={127}>+</Showcase>
              </div>
              <motion.button 
                initial={{y: '50%', opacity: 0}}
                animate={{y: 0, opacity: 1}} 
                whileHover={{ 
                  y: 5,
                  backgroundColor: "#e3cba4",
                  borderColor: "transparent"
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeOut"
                }}
                className="border-bright-blue border-2 rounded-xl px-5 py-3 text-bright-blue text-xl my-5 flex items-center gap-2"
              >
                Learn More
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </motion.button>
            </div>
          </div>
          <motion.div className="w-[60%] -mt-24" initial={{x: '100%', opacity: 0}}
                      animate={{x: 0, opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
            <img src={Cottage} alt="cottage"></img>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
