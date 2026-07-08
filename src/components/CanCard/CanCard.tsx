
import style from './CanCard.module.css'
import { Text } from '../Text/Text'
import cardImg from '../../assets/images/olipop_card.jpg'

export const CanCard = () => {
  return (
      <div className={style['card-container']}>
      <img  src={cardImg} alt="" />
        <div className={style['card-details']}>
            <Text variant={'h2'}>| Our foundational Ingredient</Text>
            <Text variant={'p'}> For over a decate, Ben and David have shared a vision of a healthier, ... future. Their
              quest for a product that could undermine the old guard of soda ba..moths led them to OLIPOP,
              a thoughtfully crafted ionic tht found its tast in wholesome, hardworking ingrediaents instead of 
              spoondulus of sugar
            </Text>
            <button className={style['more-btn']}>Read more</button>
        </div>
      </div>
  )
}
