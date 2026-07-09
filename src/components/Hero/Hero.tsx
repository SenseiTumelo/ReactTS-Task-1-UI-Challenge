
import style from './Hero.module.css'
import { Text } from '../Text/Text'
import heroImg from './../../assets/images/Olipop_Strawberry.png'

export const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style['hero-details']}>
        <Text variant='h1'>A New Kind of Soda</Text>
        <button className={style['shop-btn']}>Shop Olipop</button>
      </div>
      <div className={style['hero-card']}>
  
          <img src={heroImg} alt=""  className={style['hero-img']}/>
        
      </div>
    </div>
  )
}
