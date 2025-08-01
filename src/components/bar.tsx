export default function Bar({number, name} : {number: number, name: string}) {
  return (
    <div className="flex w-9/12 rounded-full h-3 justify-between relative font-light mb-15">
      <p>{name}</p>
      <p style={{marginRight:`${100 - number}%` }}>{number}%</p>
      <div className="bg-white rounded-full h-2 absolute w-full top-7"></div>
      <div className="bg-bg-bar rounded-full h-2 absolute top-7" style={{ width: `${number}%` }}></div>
    </div>
  )
}
