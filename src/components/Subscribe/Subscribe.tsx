import { Text } from "../Text/Text"
import style from './Subscribe.module.css'
import { SubscribeModal } from "../SubscribeModal/SubscribeModal"
import { useState } from "react"
import logo from "@/assets/images/logo.png"
import { Button } from "../Button/Button"

export const Subscribe = () => {
  const [open, setOpen]= useState(false);
  const handleOpen = ()=> setOpen(true);
  const handleClose = ()=> setOpen(false);

  return (
    <div className={style['sub-card-container']}>
        <div className={style['subscribe-details']}>
            <Text variant={'h2'}>| Save 15% with Endless Olipop</Text>
            <Text variant={'p'}> Never run out of your favorite flavors when you join our fam.
                Subcribe and save on every order - your wallet (and digestion) will thank you.
            </Text>
            <button className={style['subscribe-btn']} onClick={handleOpen}>Subcribe & Save</button>
            
            <SubscribeModal isOpen={open} onClose={handleClose}>
              <Text variant="h1">Subscribe to our newsletter</Text>
              <img src={logo} alt="" style={{width:'100px', height:'auto'}} />
              <input type="text"  style={{}}/>
              <Button text="Subscribe & Save" style={{}} />
            </SubscribeModal>
        </div>
      </div>
  )
}
