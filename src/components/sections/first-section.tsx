import Showcase from "../showcase.tsx";
import Cottage from "../../assets/cottage.png"

export default function FirstSection() {
  return (
    <section className="my-20 p-15 pt-0 flex justify-center">
      <div className="w-1/2">
        <h1 className="text-8xl font-semibold text-main">Discover the Art of Peaceful Living</h1>
        <div className="flex flex-row gap-8">
          <div className="w-[35%]">
            <p className="text-bright-blue p-5 rounded-2xl bg-bg-p mt-16">Leave the chaos behind. UrbanRest brings you closer to
              nature with cozy stays designed
              for rest, reflection, and simplicity.</p>
            <div className="flex flex-col items-start">
              <div className="flex flex-row justify-between gap-5 mt-5 w-full">
                <Showcase text="Loyal Customers">230M+</Showcase>
                <Showcase text="Cozy Cabins">127+</Showcase>
              </div>
              <button className="border-bright-blue border-2 rounded-xl px-5 py-3 text-bright-blue text-xl my-5">Learn More arrow</button>
            </div>
          </div>
          <div className="w-[60%] -mt-24">
            <img src={Cottage} alt="cottage"></img>
          </div>
        </div>
      </div>
    </section>
  )
}
