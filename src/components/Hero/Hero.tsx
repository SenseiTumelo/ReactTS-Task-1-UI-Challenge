
import style from './Hero.module.css'
import { Text } from '../Text/Text'
import heroImg from './../../assets/images/Olipop_Strawberry.png'
import { Button } from '../Button/Button'

export const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style['hero-details']}>
        <Text variant='h1'>A New Kind <br/>of Soda</Text>
        <Button text="Shop Olipop" style={{height:"55px", width:"250px", fontSize:"28px"}}/>
      </div>
      <div className={style['hero-card']}>
          <img src={heroImg} alt=""  className={style['hero-img']}/>
      </div>
    </div>
  )
}
