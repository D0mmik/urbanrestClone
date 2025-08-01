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
              <motion.button initial={{y: '50%', opacity: 0}}
                             animate={{y: 0, opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}
                             className="border-bright-blue border-2 rounded-xl px-5 py-3 text-bright-blue text-xl my-5">Learn More
                arrow
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
