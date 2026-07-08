import { Text } from "../Text/Text"
import style from "./ItemCardHead.module.css"

export const ItemCardHead = () => {
  return (
    <div className={style['header-item-card']}>
        <Text variant="h2">Taste Your Favorite</Text>
        <Text variant="p">Enjoy our take on the classic flavors you know and love</Text>
    </div>
  )
}
