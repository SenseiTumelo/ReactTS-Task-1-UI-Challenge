import { Text } from "../Text/Text"
import style from '../itemCard/ItemCard.module.css'

//card carousel imports n.b: ive installed react multi carousel library
//import Carousel from "react-multi-carousel"
//import "react-multi-carousel/lib/styles.css"


type ItemCardProps = {
    name: string,
    price: string,
    bgColor: string,
    imgSRC: string,
    btnColor: string

}

export const ItemCard: React.FC<ItemCardProps> = ({name, price, bgColor, imgSRC,btnColor}) => {
    /*const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4,
            slideToSlide: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 3,
            slideToSlide: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 2,
            slideToSlide: 1
        }
    }*/  
    return (

      <article className={style["item-card"]}>

          <div className={style["card"]} style={{ backgroundColor: bgColor }}>
            <img src={imgSRC} alt="item picture" />
            <div className={style["card-text"]}>
              <Text variant="h3">{name}</Text>
            </div>
            <div className={style["price"]}>
                <button style={{backgroundColor: btnColor}}>{price}</button>
            </div>
          </div>
        
      </article>
      
    );
}
