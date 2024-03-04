import React, { useContext, useState } from 'react'
import './Navbar.css'

import order_icon from '../Assets/ordericon.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
export const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <p>ShopStyle</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>ร้านค้า</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>ชาย</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>หญิง</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>เด็ก</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">

            <Link to='/order'><img src={order_icon} width={"60"} height={"60"} alt="" /></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            {localStorage.getItem('auth-token')
            ? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
        </div>
    </div>
  )
}
