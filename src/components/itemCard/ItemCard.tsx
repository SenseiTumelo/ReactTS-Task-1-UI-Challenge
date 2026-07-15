import { Text } from "../Text/Text"
import style from '../itemCard/ItemCard.module.css'

type ItemCardProps = {
    name: string,
    price: string,
    bgColor: string,
    imgSRC: string,
    btnColor: string

}

export const ItemCard: React.FC<ItemCardProps> = ({name, price, bgColor, imgSRC,btnColor}) => {

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
