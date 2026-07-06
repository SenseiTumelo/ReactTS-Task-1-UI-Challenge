import style from './Footer.module.css'
import logo from './../../assets/images/logo.png'
import { Text } from '../Text/Text'

export const Footer = () => {
  return (
 <footer>
    <div className={style['footer-form']}>
       <img src={logo} alt="logo"/> 
       <Text variant='h2' >Stay Connected with OLIPOP</Text>
    </div>
    <div className={style['footer-flavor']}>
        <Text variant='h2'>Flavours</Text>
    </div>
    <div className={style['footer-info']}>
        <Text variant='h2'>Information</Text>
    </div>
    <div className={style['footer-socials']}>
        <Text variant='h2'>Social Media</Text>
    </div>
 </footer>
  )
}
