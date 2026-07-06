
import style from "./Navbar.module.css"
import { Link } from "react-router-dom";
import { ContentContainer } from "../ContentContainer";
import wlogo from '../../assets/images/logo.png'

export const Navbar = () => {


  return (
   <ContentContainer >
    <nav className="nav-container" >
        <div className={style["nav-content"]}>
          <img src={wlogo} alt="" className={style.logo} />
          <div className={style['nav-links']}>
            <Link to={"/home"} className={style['nav-link']}>Home</Link>
            <Link to={"/shop"} className={style['nav-link']}>Shop</Link>
            <Link to={"/search"} className={style['nav-link']}>Search Store</Link>
            <Link to={"/more"} className={style['nav-link']}> More</Link>
          </div>
          <div >
            <button className={style['subscribe-btn']}>Subscribe</button>
          </div>
      </div>
      </nav>
       </ContentContainer>
    
   
  );
}
