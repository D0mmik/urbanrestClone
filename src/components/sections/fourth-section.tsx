import { motion } from "framer-motion";

export default function FourthSection() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeInTop = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeInBottom = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="text-white bg-bright-blue p-20 relative mt-10 pt-20 flex justify-center">
      <div className="min-xl:w-1/2">
        <div className="bg-background absolute -top-5 right-0 w-7/12 h-16 rounded-bl-4xl"></div>
        <div className="bg-bright-blue absolute -top-10 left-0 w-5/12 h-16 rounded-tr-4xl"></div>
        <div className="flex flex-row gap-20 mt-20">
          <motion.div
            className="flex flex-col w-1/2 py-20"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-6xl font-medium">Stay Chill, We Got You Covered</h1>
            <p className="font-extralight text-sm my-10">
              Escape the noise and unwind in our thoughtfully designed cottages where comfort meets nature in perfect harmony
            </p>
            <button className="border-white border-1 rounded-xl px-5 py-3 text-white text-xl my-5 w-52">
              Learn More arrow
            </button>
          </motion.div>

          <div className="flex w-1/2 gap-5 text-2xl">
            <div className="flex flex-col gap-5 w-1/2">
              <motion.div
                className="bg-white/20 rounded-3xl flex justify-center h-1/2 items-center flex-col text-center p-5"
                variants={fadeInTop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3>24/7 Services</h3>
                <p className="font-extralight text-sm">
                  Anytime you need us, we’re just a call away day or night.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/20 rounded-3xl h-1/2 flex justify-center items-center flex-col text-center p-5"
                variants={fadeInBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3>Breakfast</h3>
                <p className="font-extralight text-sm">
                  Start your day with a fresh, hearty meal made with love.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-white/20 w-1/2 rounded-3xl flex justify-center items-center flex-col text-center p-5"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>Laundry</h3>
              <p className="font-extralight text-sm">
                Stay fresh every day with our convenient laundry service.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
