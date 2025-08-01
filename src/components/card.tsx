export default function Card({title, description, number} : {title: string, description: string, number: number}) {
  return (
    <div className={`w-96 h-96 rounded-2xl relative ${number == 2 ? 'bg-card-bg' : 'bg-white'}`}>
      <div className="p-8 text-main">
        <h3 className="text-2xl font-medium mt-40">{title}</h3>
        <p className="font-extralight text-sm my-5">{description}</p>
        <button className="border-b pb-1 flex items-center">
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <div className="absolute top-0 right-0 bg-bright-blue w-20 h-20 rounded-bl-2xl rounded-tr-2xl text-white flex justify-center items-center">
          <p className="text-2xl">{number}</p>
        </div>
      </div>
    </div>
  )
}
