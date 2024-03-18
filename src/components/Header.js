import { Link } from 'react-router-dom';
import {LOGO_URL} from '../utils/constants'
import {useState} from 'react';

function Header() {

  const [loginState, setLoginState] = useState("Login");

  return (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' alt='logo' src={LOGO_URL} /> 
        </div>
        <div className='nav-items'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contactus'>Contact Us</Link></li>
                <li>Store</li>
                <button className='login' onClick={()=>{
                  loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
                }}>{loginState}</button>            
            </ul>
        </div>
    </div>
  )
}

export default Header