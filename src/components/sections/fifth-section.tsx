import Cottage from '../../assets/cottage-3.png';
import Bar from "../bar.tsx";

export default function FifthSection() {
  return (
    <section className="p-20 flex justify-center">
      <div className="w-1/2">
        <div className="bg-bright-blue flex flex-col text-white rounded-l-3xl p-10 w-9/12 relative">
          <div className="w-40 h-40 rounded-full top-0 -right-20 absolute bg-bright-blue"></div>
          <h1 className="text-6xl font-medium w-3/4">Discovering Peace In Nature’s Simplicity</h1>
          <p className="font-extralight text-sm w-8/12 py-8">Recharge in cozy spaces surrounded by nature where comfort, calm, and simplicity meet in every corner.</p>
          <Bar number={97} name="Safety Rating"></Bar>
          <Bar number={90} name="Quality Standards"></Bar>
          <div className="w-80 absolute top-20 -right-60">
            <img src={Cottage} alt="cottage" className="rounded-4xl"></img>
          </div>
        </div>
      </div>
    </section>
  )
}
