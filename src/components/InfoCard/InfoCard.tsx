import { Text } from "../Text/Text"
import style from "./InfoCard.module.css"

//icons imports
import dollarIcon from '../../assets/icons/infocardicons/dollar.png'
import drinkIcon from '../../assets/icons/infocardicons/drink.png'
import deliveryIcon from '../../assets/icons/infocardicons/delivery.png'
import errorIcon from '../../assets/icons/infocardicons/error.png'
import pic from '../../assets/images/pic.png'


export const InfoCard = () => {
  return (
    <div className={style['information-section']}>
        <div className={style['col-one']}>
            <div className={style['info-content']}>
                <span>
                    <img src={dollarIcon} alt="" />
                </span>
                <Text variant='p'>Save 15% on every order</Text>
            </div>

            <div className={style['info-content']}>
                <span>
                    <img src={drinkIcon} alt="" />
                </span>
                <Text variant='p'>Early access to  new flavors</Text>
            </div>
        </div>
        <div className={style['col-two']}>
            <img src={pic} alt="" />
        </div>
        <div className={style['col-three']}>
            <div className={style['info-content']}>
               <span>
                 <img src={deliveryIcon} alt="" />
               </span>    
                <Text variant='p'>Free Shipping Always</Text>
            </div>
            <div className={style['info-content']}>
                <span>
                    <img src={errorIcon} alt="" />
                </span> 
                <Text variant='p'>Swap, skip or cancel any time</Text>
            </div>
        </div>
    </div>
  )
}
