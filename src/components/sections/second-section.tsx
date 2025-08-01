import {motion} from "framer-motion";
import { containerVariants, itemVariants, commonTransitions } from "../animations";

export default function SecondSection() {
  return (
    <section className="bg-bright-blue flex justify-center flex-col items-center text-white p-32 pb-30 gap-10">
      <motion.h1
        initial={{ y: '-50%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={commonTransitions}
        className="text-6xl font-medium"
      >
        Our Partner
      </motion.h1>

      <motion.p
        initial={{ y: '50%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={commonTransitions}
        className="font-light"
      >
        Trusted by leading brands who share our passion for peaceful living.
      </motion.p>

      <motion.div
        className="flex gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"].map((text, index) => (
          <motion.h2
            key={index}
            className="text-3xl font-bold"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {text}
          </motion.h2>
        ))}
      </motion.div>
    </section>
  );
}
