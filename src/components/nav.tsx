import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./nav.css";

function NavBar(){
    const [navbar, setNavbar] = useState(false);

    const changeNavStyle = () => {
        if (window.scrollY >= 40){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", changeNavStyle); 
        return () => {
          window.removeEventListener("scroll", changeNavStyle);
        };
      }, []);

    return(
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div className="title">
                <h1>Temperature Control Solutions</h1>
            </div>
            <nav className="links">
                <Link className="nav nav-home" to='/'>HOME</Link>
                <Link className="nav nav-about" to='/about'>ABOUT</Link>
                <Link className="nav nav-residential" to='/residential'>RESIDENTIAL</Link>
                <Link className="nav nav-commercial" to='/commercial'>COMMERICAL</Link>
                <Link className="nav nav-condominium" to='/condominium'>CONDOMINIUM</Link>
                <Link className="nav nav-restaurants" to='/restaurants'>RESTAURANTS</Link>
                <Link className="nav nav-projects" to='/projects'>PROJECTS</Link>
                <Link className="nav nav-contact" to='/contact'>CONTACT</Link>
            </nav>
        </div>
    )
}

export default NavBar