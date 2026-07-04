import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import { Route, Routes } from "react-router-dom"


//pages
import { More } from "./pages/More"
import { SearchStore } from "./pages/SearchStore"
import { Shop } from "./pages/Shop"
import { Home } from "./pages/Home"

function App() {

  return (
    <> 
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/shop" element={<More />}/>
      <Route path="/Search" element={<SearchStore />}/>
    </Routes>
    <Hero />
      
    </>
  )
}

export default App
