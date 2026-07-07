import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import { Route, Routes } from "react-router-dom"
import { CanCard } from "./components/CanCard/CanCard"
import { Footer } from "./components/Footer/Footer"


//pages
import { More } from "./pages/More"
import { SearchStore } from "./pages/SearchStore"
import { Home } from "./pages/Home"
import { ItemCard} from "./components/itemCard/ItemCard"

//image sources

import { useState } from "react"
import { itemcarddata } from "./data" 


function App() {
const [itemcard] = useState(itemcarddata); 


  return (
    <> 
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/shop" element={<More />}/>
        <Route path="/Search" element={<SearchStore />}/>
      </Routes>
      <Hero />
      <CanCard />
      <div className="main-item-card">
      {
        itemcard && itemcard.length > 0 && itemcard.map((item)=>{
          return <ItemCard key={item.id}
            name= {item.name}
            price={item.price}
            imgSRC={item.imgSRC}
            bgColor={item.bgColor}
            btnColor={item.btnColor}
          />
        })
      }
      </div>

      <Footer />
    </>
  )
}

export default App
