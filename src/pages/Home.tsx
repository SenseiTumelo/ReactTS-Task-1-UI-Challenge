import { CanCard } from "../components/CanCard/CanCard"
import { Hero } from "../components/Hero/Hero"
import { InfoCard } from "../components/InfoCard/InfoCard"
import { ItemCard } from "../components/itemCard/ItemCard"
import { ItemCardHead } from "../components/ItemCardHead/ItemCardHead"
import { Subscribe } from "../components/Subscribe/Subscribe"
import { useState } from "react"
import { itemcarddata } from "../data" 




export const Home = () => {
  const [itemcard] = useState(itemcarddata); 
  return (
    <div>
      <Hero />
      <div className="main-card-container">
        <CanCard />
      </div>
      <ItemCardHead />
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
      <InfoCard />
      <Subscribe />
    </div>
  )
}
