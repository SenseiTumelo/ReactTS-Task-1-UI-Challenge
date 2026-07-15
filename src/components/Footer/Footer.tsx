import style from './Footer.module.css'
import logo from './../../assets/images/logo.png'
import { Text } from '../Text/Text'
import { socialIcons, itemcarddata, infoLinks } from './../../data'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const [socialImg] = useState(socialIcons);
  return (
 <footer>
    <div className={style['footer-form']}>
       <div className={style['form-header']}>
        <img src={logo} alt="logo"/> 
        <Text variant='h3' >Stay Connected with <br/>OLIPOP</Text>
       </div>
       <div className={style['form-input']}>
        <input value={"Email"} />
        <button>Subscribe</button>
       </div>

    </div>
    <div className={style['footer-flavor']}>
        <Text variant='h3'>Flavours</Text>
        {
            itemcarddata.map((list)=>{
                return <ul>
                    <li key={list.id}>
                        <Link to={''}>
                            {list.name}
                        </Link> 
                    </li>
                </ul>
            }) 
        }
    </div>
    <div className={style['footer-info']}>
        <Text variant='h3'>Information</Text>
        {
            infoLinks.map((iLink)=>{
             return <ul>
                <li key={iLink.id} className={style['info-link']}>
                    <Link to={''} className={style['i-link']}>{iLink.name}</Link>
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
