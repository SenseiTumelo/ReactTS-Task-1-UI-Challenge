import { Text } from "../Text/Text"
import style from "./InfoCard.module.css"

//icons imports
import dollarIcon from '../../assets/icons/infocardicons/dollar.png'
import drinkIcon from '../../assets/icons/infocardicons/drink.png'
import deliveryIcon from '../../assets/icons/infocardicons/delivery.png'
import errorIcon from '../../assets/icons/infocardicons/error.png'


export const InfoCard = () => {
  return (
    <div>
        <div>
            <div className={style['info-content']}>
                <img src={dollarIcon} alt="" />
                <Text variant='p'>Save</Text>
            </div>

        <div className={style['info-content']}>
                <img src={drinkIcon} alt="" />
                <Text variant='p'>Save</Text>
            </div>
        </div>


        <div></div>
        <div>
            <div className={style['info-content']}>
                <img src={deliveryIcon} alt="" />
                <Text variant='p'>Save</Text>
            </div>
            <div className={style['info-content']}>
                <img src={errorIcon} alt="" />
                <Text variant='p'>Save</Text>
            </div>
        </div>
    </div>
  )
}
