import React from 'react'
import style from "./Navbar.module.css"
import { Text } from '../Text/Text'

export const Navbar = () => {
  return (
    <nav>
        <img src="" alt="P" />
        <div>
            <Text variant='h2'>Shop Online</Text>
            <Text variant='h2'>Find in Store</Text>
            <Text variant='h2'>Learn More</Text>
        </div>

    </nav>
  )
}
