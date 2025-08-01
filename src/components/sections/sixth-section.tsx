import Card from "../card.tsx";

export default function SixthSection() {
  return (
    <section className="p-20 flex justify-center">
      <div className="min-xl:w-1/2">
        <h1 className="text-6xl font-semibold w-8/12 text-main">There Are Many Activities &nbsp; In Each Destination</h1>
        <div className="rounded-3xl bg-yellow-600 my-10 h-48 text-white">
          <div className="flex flex-col p-10 w-5/12 justify-start items-start">
            <h3 className="text-2xl">Hiking With Team</h3>
            <p className="font-extralight my-3">Explore scenic trails and strengthen bonds with team hiking experiences you’ll never forget.</p>
            <button className="border-b pb-1">Learn More Arrow</button>
          </div>
        </div>
        <div className="flex gap-5">
          <Card title="Fishing With Family" description="Cast a line, share some laughs, and create memories by the water with your loved ones." number={1}/>
          <Card title="Outbound With Team" description="Boost teamwork through outdoor challenges, perfect for corporate or group getaways." number={2}/>
          <Card title="Bike Routes With Team" description="Pedal through nature’s beauty while enjoying a shared adventure on curated bike trails." number={3}/>
        </div>
      </div>
    </section>
  )
}
