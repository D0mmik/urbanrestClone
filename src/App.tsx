import Header from "./components/header"
import FirstSection from "./components/sections/first-section.tsx";
import SecondSection from "./components/sections/second-section.tsx";
import ThirdSection from "./components/sections/third-section.tsx";
import FourthSection from "./components/sections/fourth-section.tsx";
import FifthSection from "./components/sections/fifth-section.tsx";
import SixthSection from "./components/sections/sixth-section.tsx";
import SeventhSection from "./components/sections/seventh-section.tsx";
import EighthSection from "./components/sections/eighth-section.tsx";

function App() {

  return (
    <div className="bg-background">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection/>
      <SixthSection />
      <SeventhSection />
      <EighthSection />
    </div>
  )
}

export default App
