  import React, { useContext, useState } from 'react'
  import './Navbar.css'
  import logo from '../Assets/logo.png'
  import center from '../Assets/center_logo.png'
  import cart_icon from '../Assets/cart_icon.png'
  import { Link } from 'react-router-dom'
  import { ShopContext } from '../../Context/ShopContext'

  export const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    
    const {getTotalCartItems}= useContext(ShopContext);

    return (
      <div className='navbar'>



        <ul className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none',  color: 'black', textAlign: 'left' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none', color: 'black', textAlign: 'left' }} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none', color: 'black', textAlign: 'left' }} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none', color: 'black', textAlign: 'left' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>

        <div ClassName="nav-logo">
          <img src={center} alt="" width="220"/>
        </div>

        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" width="50"/></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

        

      </div>
    )
  }
