import './App.css';
import NavBar from './components/nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Residential from './pages/residential';
import Commercial from './pages/commercial';
import Condominium from './pages/condominium';
import Restaurants from './pages/restaurants';
import Projects from './pages/projects';
import Contact from './pages/contact';
import About from './pages/about';
import { BsFillPhoneFill, BsWalletFill, } from "react-icons/bs";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { IconContext } from "react-icons";

function App() {
  return (
    <div>
      <div className="contact-bar">
        <div className='contact-container'>
          <BsWalletFill style={{color: "red", margin: '6px'}}/>
          <a className='email-bar' href="mailto:contact@example.com">info@example.com</a>  
          <BsFillPhoneFill style={{color: "red", margin: '3px'}}/>
          <span className='number-bar'>+1 000 00000 00</span>
        </div>
        <div className="social-container">
        <IconContext.Provider value={{ className: "social-icons" }}>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </IconContext.Provider>
        </div>
      </div>
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/residential' element={<Residential/>}/>
            <Route path='/commercial' element={<Commercial/>}/>
            <Route path='/condominium' element={<Condominium/>}/>
            <Route path='/restaurants' element={<Restaurants/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
