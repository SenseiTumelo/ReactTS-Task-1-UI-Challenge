import style from './Footer.module.css'
import logo from './../../assets/images/logo.png'
import { Text } from '../Text/Text'
import { socialIcons, itemcarddata } from './../../data'
import { useState } from 'react'

export const Footer = () => {
  const [socialImg] = useState(socialIcons);
  return (
 <footer>
    <div className={style['footer-form']}>
       <div className={style['form-header']}>
        <img src={logo} alt="logo"/> 
        <Text variant='h3' >Stay Connected with OLIPOP</Text>
       </div>
       <input value={"Email"} />
       <button>Subscribe</button>
    </div>
    <div className={style['footer-flavor']}>
        <Text variant='h3'>Flavours</Text>

    </div>
    <div className={style['footer-info']}>
        <Text variant='h3'>Information</Text>
        {
            itemcarddata.map((list)=>{
                return <ul>
                    <li key={list.id}>
                        <a href="">
                            {list.name}
                        </a>
                    </li>
                </ul>
            }) 
        }
    </div>
    <div className={style['footer-socials']}>
        <Text variant='h3'>Social Media</Text>
        <div className={style['social-logos']}>
            {
               socialImg.map((x)=> {
                return <img src={x.imgSRC} alt={x.name} key={x.id} />
               }) 
            }
            

        </div>
    </div>
 </footer>
  )
}
