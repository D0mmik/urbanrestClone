import Card from "../card.tsx";
import { motion } from "framer-motion";

export default function SixthSection() {
  return (
    <section className="p-20 flex justify-center">
      <div className="min-xl:w-1/2">
        <motion.h1 
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-semibold w-8/12 text-main"
        >
          There Are Many Activities &nbsp; In Each Destination
        </motion.h1>
        <motion.div 
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded-3xl bg-yellow-600 my-10 h-48 text-white"
        >
          <div className="flex flex-col p-10 w-5/12 justify-start items-start">
            <h3 className="text-2xl">Hiking With Team</h3>
            <p className="font-extralight my-3">Explore scenic trails and strengthen bonds with team hiking experiences you'll never forget.</p>
            <button className="border-b pb-1 flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </motion.div>
        <div className="flex gap-5">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Card title="Fishing With Family" description="Cast a line, share some laughs, and create memories by the water with your loved ones." number={1}/>
          </motion.div>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Card title="Outbound With Team" description="Boost teamwork through outdoor challenges, perfect for corporate or group getaways." number={2}/>
          </motion.div>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Card title="Bike Routes With Team" description="Pedal through nature's beauty while enjoying a shared adventure on curated bike trails." number={3}/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
