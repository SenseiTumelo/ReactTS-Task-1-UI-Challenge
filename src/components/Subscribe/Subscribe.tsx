import { Text } from "../Text/Text"
import style from './Subscribe.module.css'

export const Subscribe = () => {


  return (
    <div className={style['sub-card-container']}>
        <div className={style['subscribe-details']}>
            <Text variant={'h2'}>| Save 15% with Endless Olipop</Text>
            <Text variant={'p'}> Never run out of your favorite flavors when you join our fam.
                Subcribe and save on every order - your wallet (and digestion) will thank you.
            </Text>
            <button className={style['subscribe-btn']} >Subcribe & Save</button>
            <div id="modal">
              <Text variant="h1">Subscribe to our Newsletter</Text>
              <button>Click me</button>
            </div>
        </div>
      </div>
  )
}
