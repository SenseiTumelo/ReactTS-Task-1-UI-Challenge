
import style from "./Navbar.module.css"
import { Link } from "react-router-dom";
import wlogo from '../../assets/images/logo.png'
import { navigationLinks } from "../../data";

export const Navbar = () => {


  return (

    <nav className="nav-container" >
        <div className={style["nav-content"]}>
          <img src={wlogo} alt="" className={style.logo} />
          <ul className={style['nav-links']}>
              {
                navigationLinks.map((link)=>{
                  return <Link to={link.path} className={style['nav-link']}>{link.name}</Link>})
              }
          </ul>
          <div >
            <button className={style['subscribe-btn']}>Subscribe</button>
          </div>
      </div>
      </nav>
   
    
   
  );
}
