import Cottage2 from '../../assets/cottage-2.png';

export default function ThirdSection() {
  return (
    <section className="p-20 text-main flex justify-center">
      <div className="w-1/2 flex justify-between">
        <div>
          <h1 className="text-6xl font-medium">Living With Nature</h1>
          <h1 className="text-6xl font-medium">Living Off The Crowd</h1>
          <p className="w-96 text-bright-blue my-10">Escape into nature where quiet moments and slow living bring you back to what
            truly matters.</p>
          <div className="flex justify-between mt-20">
            <div className="flex flex-col items-center font-extralight border-main border-x-2 px-10 py-5 hover:bg-bg-p">
              <h2 className="text-3xl font-medium">37+</h2>
              <p>Cozy Retreats</p>
              <p>Across Nature</p>
            </div>
            <div className="flex flex-col items-center font-extralight px-10 hover:bg-bg-p py-5">
              <h2 className="text-3xl font-medium">24/7</h2>
              <p>Guest Support</p>
              <p>Always On</p>
            </div>
            <div className="flex flex-col items-center font-extralight border-main border-x-2 px-10 py-5 hover:bg-bg-p">
              <h2 className="text-3xl font-medium">230M+</h2>
              <p>Loyal Customers</p>
              <p>Worldwide</p>
            </div>
          </div>
        </div>
        <div>
          <img src={Cottage2} alt="cottage" className="w-96"></img>
        </div>
      </div>
    </section>
  )
}
