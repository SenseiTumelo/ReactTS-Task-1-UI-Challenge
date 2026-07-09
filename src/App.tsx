import { Navbar } from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"

//page
import { SearchStore } from "./pages/SearchStore"
import { Home } from "./pages/Home"
import { Shop } from "./pages/Shop"



function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/Search" element={<SearchStore />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
