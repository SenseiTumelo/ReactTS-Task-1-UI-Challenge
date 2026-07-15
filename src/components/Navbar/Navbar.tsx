
import style from "./Navbar.module.css"
import { Link } from "react-router-dom";
import wlogo from '../../assets/images/logo.png'
import { navigationLinks } from "../../data";
import { Button } from "../Button/Button";

export const Navbar = () => {


  return (

    <nav className="nav-container" >
        <div className={style["nav-content"]}>
          <Link to={navigationLinks[0].path}>
            <img src={wlogo} alt="" className={style.logo} />  
          </Link>
          <ul className={style['nav-links']}>
              {
                navigationLinks.map((link)=>{
                  return <Link to={link.path} className={style['nav-link']}>{link.name}</Link>})
              }
          </ul>
          <div >
            <Button style={{width: '145px', height: '45px'}} text="Subscribe"/>
          </div>
      </div>
      </nav>
   
    
   
  );
}
