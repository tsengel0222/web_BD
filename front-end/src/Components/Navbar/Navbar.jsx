import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
const Navbar=()=>{
    const [menu, setMenu]=useState("shop")
    return(
    <div className='navbar'>
        <div className="nav-logo">         
             <img src={logo} alt=""/> 
             <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/' >Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Dell")}}><Link style={{textDecoration:'none'}} to='/Dell'>Dell</Link>{menu==="Dell"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Mac")}}><Link style={{textDecoration:'none'}}  to='/Mac'>Mac</Link>{menu==="Mac"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Acer")}}><Link style={{textDecoration:'none'}} to='Acer'>Acer</Link>{menu==="Acer"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          
          <Link to='/login'><button>Нэвтрэх</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
    </div>
    )
}

export default Navbar