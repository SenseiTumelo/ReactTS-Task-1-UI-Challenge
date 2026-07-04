import React from 'react'
import style from "./Navbar.module.css"
import { Link } from "react-router-dom";
import { Text } from '../Text/Text'

export const Navbar = () => {
  return (
    <nav className={style["nav-container"]}>
      <div className={style["nav-content"]}>
        <img src="" alt="P" />
        <div className={style['nav-links']}>
          <Link to={"/home"} className={style['nav-link']}>Home</Link>
          <Link to={"/shop"} className={style['nav-link']}>Shop</Link>
          <Link to={"/search"} className={style['nav-link']}>Search Store</Link>
          <Link to={"/more"} className={style['nav-link']}> More</Link>
    
        </div>
        <div>
          <button>Subscribe</button>
        </div>
      </div>
    </nav>
  );
}
