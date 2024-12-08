import BackgroundContainer from "./components/ui/Background"
import Footer from "./components/ui/Footer"
import MainContainer from "./components/MainContainer"
import Navbar from "./components/ui/Navbar"
import Gradient from "./components/ui/Gradient"

function App() {
  return (
    <>
      <BackgroundContainer />
      <MainContainer />
      {/* <img className="w-full h-1/6" src="/assets/endmain.png" alt="" /> */}
      <Navbar/>
      {/* <img className="w-full" src="/assets/endmain.png" alt="" /> */}
      <Footer/>
      <Gradient />
    </>
  )
}

export default App
