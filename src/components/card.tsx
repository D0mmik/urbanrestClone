export default function Card({title, description, number} : {title: string, description: string, number: number}) {
  return (
    <div className={`w-96 h-96 rounded-2xl relative ${number == 2 ? 'bg-card-bg' : 'bg-white'}`}>
      <div className="p-8 text-main">
        <h3 className="text-2xl font-medium mt-40">{title}</h3>
        <p className="font-extralight text-sm my-5">{description}</p>
        <button className="border-b pb-1">Learn More Arrow</button>
        <div className="absolute top-0 right-0 bg-bright-blue w-20 h-20 rounded-bl-2xl rounded-tr-2xl text-white flex justify-center items-center">
          <p className="text-2xl">{number}</p>
        </div>
      </div>
    </div>
  )
}
