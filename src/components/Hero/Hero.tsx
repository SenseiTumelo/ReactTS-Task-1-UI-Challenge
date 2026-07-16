
import style from './Hero.module.css'
import { Text } from '../Text/Text'
import heroImg from './../../assets/images/Olipop_Strawberry.png'
import { Button } from '../Button/Button'

export const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style['hero-details']}>
        <Text variant='h1'>A New Kind <br/>of Soda {/*<span className={style.trademark}>&#8482;</span>*/}</Text>
        <Button style={{width:'auto', height: '45px'}} text="Shop Olipop"/>
      </div>
      <div className={style['hero-card']}>
          <img src={heroImg} alt=""  className={style['hero-img']}/>
      </div>
    </div>
  )
}
