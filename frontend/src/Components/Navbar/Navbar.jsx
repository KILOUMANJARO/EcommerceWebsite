import React, { useContext, useState } from 'react';
import { SideCart } from '../SideCart/SideCart';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import logo from '../Assets/logo.png';
import center from '../Assets/center_logo.png';
import cart_icon from '../Assets/cart_icon.png';

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isSideCartOpen, setIsSideCartOpen] = useState(false);  // State for controlling the SideCart visibility
  const { getTotalCartItems } = useContext(ShopContext);

  const handleCartButtonClick = () => {
    setIsSideCartOpen(true);  // Open SideCart
  };

  const handleCloseSideCart = () => {
    setIsSideCartOpen(false);  // Close SideCart
  };

  return (
    <div className='navbar'>
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: 'none', color: 'black', textAlign: 'left' }} to='/'>Home</Link>
          {menu === "home" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none', color: 'black', textAlign: 'left' }} to='/shop'>Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("contact")}>
          <Link style={{ textDecoration: 'none', color: 'black', textAlign: 'left' }} to='/contact'>Contact</Link>
          {menu === "contact" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("about")}>
          <Link style={{ textDecoration: 'none', color: 'black', textAlign: 'left' }} to='/about'>About</Link>
          {menu === "about" ? <hr /> : null}
        </li>
      </ul>



      <SideCart className={isSideCartOpen ? 'sidecart open' : 'sidecart'} onClose={handleCloseSideCart} />  {/* Pass the close handler */}

      <div className="nav-logo">
        <img src={center} alt="" width="220" />
      </div>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <button id="open_cart" onClick={handleCartButtonClick}>
          <img src={cart_icon} alt="" width="50" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </button>
      </div>
    </div>
  );
};
