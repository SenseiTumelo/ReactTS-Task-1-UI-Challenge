import { Text } from "../../components/Text/Text"
import style from "./ShopHero.module.css"
import { itemcarddata } from "../../data"
import { useState } from "react"


export const ShopHero = () => {
    const [data] = useState(itemcarddata);
  return (
    <div className={style['shop-container']} >
        <main>
            <Text variant="h1">Shop 9g fibre</Text>
            <Text variant="p">Keep refrigirated</Text>
            <div className={style['shop-item']}>
                {
                    data.map((x)=>{
                        return <ul key={x.id}>
                            <li ><img src={x.imgSRC} alt="" /></li>
                            <Text variant="h2">{x.name}</Text>
                        </ul>
                    })
                }
            </div>

        </main>
        

    </div>
  )
}
