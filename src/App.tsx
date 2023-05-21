import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Search from "./components/Search"

function App() {
  return (
    <div className="bg-white h-screen font-global-font">
      <Navbar/>
      <Search/>
      <Footer/>
    </div>
  )
}

export default App
