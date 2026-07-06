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
        <div style={{backgroundColor: bgColor}} >
            <img src={imgSRC} alt="item picture" />
            <Text variant="span">{name}</Text>
            <Text variant="span">{price}</Text>
        </div>
    </article>

  )
}
