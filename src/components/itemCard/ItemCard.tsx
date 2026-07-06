import { Text } from "../Text/Text"
import style from '../itemCard/ItemCard.module.css'

type ItemCardProps = {
    name: string,
    price: string,
    bgColor: string,
    imgSRC: string

}

export const ItemCard: React.FC<ItemCardProps> = ({name, price, bgColor, imgSRC}) => {
  
    return (

    <article className={style['item-card']}>
        <div className={style['card']} style={{backgroundColor: bgColor}} >
            <img src={imgSRC} alt="item picture" />
            <div className={style['card-text']}>
                <Text variant="h2">{name}</Text>
            </div>
            <div className={style['price']}>
                <Text variant="h2">{price}</Text>
            </div>
        </div>
    </article>

  )
}
