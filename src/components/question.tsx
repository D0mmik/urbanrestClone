import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Question({question, answer, initialOpen = false} : {question: string, answer: string, initialOpen?: boolean}) {

  const [open, setOpen] = useState(initialOpen);

  return (
    <motion.button 
      onClick={() => setOpen(!open)} 
      className={`w-full p-5 text-main text-xl text-left border rounded-3xl relative ${open ? 'bg-bright-blue text-white' : ''}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{ 
        scale: open ? 1.02 : 1,
        rotateY: open ? 2 : 0,
        transition: { 
          duration: 0.3,
          ease: "easeInOut"
        }
      }}
    >
      <div className="flex justify-between items-start">
        <motion.h3 
          className="pr-12"
          animate={{ 
            x: open ? 5 : 0,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          {question}
        </motion.h3>
        <motion.div
          animate={{ 
            scale: open ? 1.1 : 1,
            transition: { 
              duration: 0.3,
              ease: "backOut"
            }
          }}
          className="text-3xl font-light absolute top-4 right-4 w-6 h-6 flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              rotate: open ? 90 : 0,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            className="w-full h-full flex items-center justify-center"
          >
            {open ? (
              <motion.span
                animate={{ rotate: 90 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                −
              </motion.span>
            ) : (
              '+'
            )}
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="answer"
            initial={{ 
              opacity: 0, 
              height: 0,
              scale: 0.8
            }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              scale: 1
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              scale: 0.8
            }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="mt-4 overflow-hidden"
          >
            <motion.p 
              className="text-white font-extralight text-base"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ 
                duration: 0.2,
                delay: 0.1
              }}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
