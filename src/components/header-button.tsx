import { motion } from "framer-motion";

export default function HeaderButton({children} :{children: string}) {
  return (
    <motion.button 
      className="font-extralight px-5 text-base relative"
      whileHover="hover"
      initial="initial"
    >
      {children}
      <motion.div
        className="absolute -bottom-2 left-1/2 bg-current"
        initial={{ width: 0, height: 0, x: "-50%" }}
        variants={{
          initial: { width: 0, height: 0, x: "-50%" },
          hover: { width: "100%", height: 2, x: "-50%" }
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </motion.button>
  )
}
