
import style from './CanCard.module.css'
import { Text } from '../Text/Text'
import cardImg from '../../assets/images/olipop_card.jpg'

export const CanCard = () => {
  return (
    <>
      <div className={style['card-container']}>
      <img  src={cardImg} alt="" />
        <div className={style['card-details']}>
            <Text variant={'h2'}>| Our foundational Ingredient</Text>
            <Text variant={'p'}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi, 
              vel culpa quis et ut aperiam optio, labore repellendus iure excepturi vero qui odit aliquid quae. 
              Harum et maxime quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi, 
              vel culpa quis et ut aperiam optio, labore repellendus iure excepturi vero qui odit aliquid quae. 
              Harum et maxime quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi, 
              vel culpa quis et ut aperiam optio, labore repellendus iure excepturi vero qui odit aliquid quae. 
              Harum et maxime quae.
            </Text>
            <button className={style['more-btn']}>Read more</button>
        </div>
      </div>

    </>
  )
}
