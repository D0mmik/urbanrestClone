import Question from "../question.tsx";
import { motion } from "framer-motion";

export default function EighthSection() {
  const leftQuestions = [
    { question: "What time is check-in and check-out?", answer: "Check-in starts at 2 PM, and check-out is before 11 AM. Early check-in or late check-out is subject to availability." },
    { question: "Are pets allowed in the cottage?", answer: "Yes! We're pet-friendly in selected cottages. Just let us know in advance so we can prepare accordingly." },
    { question: "Is breakfast included in the booking?", answer: "Yes, complimentary breakfast is included with every stay unless stated otherwise in the room details." }
  ];

  const rightQuestions = [
    { question: "Do you offer free Wi-Fi?", answer: "Of course! High-speed Wi-Fi is available in all cottages and public areas no extra charge." },
    { question: "What amenities are included in the cottage?", answer: "All cottages come with a private bathroom, comfy bedding, towels, toiletries, and a kitchenette. Some units also have a fireplace or hot tub." },
    { question: "How do I cancel or reschedule my booking?", answer: "You can manage your booking through our website or contact us directly. Cancellations made 48 hours before arrival are free of charge." }
  ];

  return (
    <section className="p-20 flex justify-center">
      <div className="min-xl:w-1/2">
        <motion.div 
          className="flex"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-semibold text-main w-7/12">Got Questions? We've Got Answers</h1>
          <div className="w-7/12 flex justify-end text-right items-end">
            <p className="text-main/90 font-extralight text-sm w-80">Here are some common questions our guests ask. If you still need help, feel free to reach out, we're always happy to assist</p>
          </div>
        </motion.div>
        <div className="flex justify-center mt-10 gap-5">
          <motion.div 
            className="flex flex-col w-1/2 gap-10"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {leftQuestions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <Question question={item.question} answer={item.answer} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="flex flex-col w-1/2 gap-10"
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {rightQuestions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: "100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <Question question={item.question} answer={item.answer} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
