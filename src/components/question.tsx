import {useState} from "react";

export default function Question({question, answer, initialOpen = false} : {question: string, answer: string, initialOpen?: boolean}) {

  const [open, setOpen] = useState(initialOpen);

  return (
    <button onClick={() => setOpen(!open)} className={`p-5 text-main text-xl text-left border rounded-3xl ${open ? 'bg-bright-blue text-white' : ''}`}>
      <h3>{question}</h3>
      {open && <p className="text-white font-extralight text-base my-5">{answer}</p>}
    </button>
  )
}
