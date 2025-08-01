import { motion } from "framer-motion";

export default function SeventhSection() {
  return (
    <section className="p-5 text-white flex justify-center flex-col bg-bright-blue relative text-center items-center z-5">
      <div className="w-full max-w-6xl pt-20">
        <motion.h2 
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-medium"
        >
          We Provide The Finest Cottages
        </motion.h2>
        <motion.p 
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-1/2 font-extralight my-5 mx-auto"
        >
          Escape the noise and unwind in our thoughtfully designed cottages where comfort meets nature in perfect harmony
        </motion.p>
        <motion.div 
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-3xl bg-yellow-600 my-3 h-48 text-white w-full text-left"
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
        <motion.div 
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-3xl bg-yellow-600 my-3 h-48 text-white w-full text-left"
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
        <motion.div 
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-3xl bg-yellow-600 my-3 h-48 text-white w-full text-left z-10"
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
      </div>
      <div className="bg-background w-screen h-36 absolute bottom-0 -z-10"></div>
    </section>
  )
}
