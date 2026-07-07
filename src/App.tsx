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
import colaImg from './assets/images/Olipop_Cola.png'
import gingerImg from './assets/images/Olipop_GingerLemon.png'
import orangImg from './assets/images/Olipop_Orange.png'
import rootbeerImg from './assets/images/Olipop_RootBeer.png'
import strawberryImg from './assets/images/Olipop_Strawberry.png'
import { useState } from "react"


function App() {
const [itemcard, setItemcard] = useState([
  {name:"Cola", price:"$34.99", imgSRC: colaImg, bgColor:"#E1C7B0", btnColor: " " ,id: '1'},
  {name:"Ginger Lemon", price:"$34.99", imgSRC: gingerImg, bgColor:"#EAE0C7", btnColor: "#ECB119 " ,id:'2'},
  {name:"Orange", price:"$34.99", imgSRC:orangImg, bgColor:"#F86D42",btnColor: "#E66E17 ", id:3},
  {name:"Root Beer", price:"$34.99", imgSRC: rootbeerImg, bgColor:"#ACD3D8",btnColor: " ", id:'4'},
  {name:"Strawberry", price:"$34.99", imgSRC: strawberryImg, bgColor:"", btnColor: " ", id: '5'}
]) 


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
    </>
  )
}

export default App
