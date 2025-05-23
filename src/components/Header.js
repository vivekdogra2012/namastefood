import { Link } from 'react-router-dom';
import {LOGO_URL} from '../utils/constants'
import {useState} from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';

function Header() {
  const [loginState, setLoginState] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className='flex justify-between items-center shadow-lg'>
        <div className='logo-container'>
            <img className='w-20' alt='logo' src={LOGO_URL} /> 
        </div>
        <div className='nav-items'>
            <ul className='flex p-4 m-4 gap-10'>
                <li>
                Internet Status: {onlineStatus ? '✅' : '🔴'}
                </li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contactus'>Contact Us</Link></li>
                <li>Store</li>
                <li><Link to='/grocery'>Grocery</Link></li>
                <button className='login' onClick={()=>{
                  loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
                }}>{loginState}</button>            
            </ul>
        </div>
    </div>
  )
}

export default Header