import React, { useContext } from 'react'
import './SideCart.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const SideCart = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext)
    const {getTotalCartItems}= useContext(ShopContext);
  return (
    <div className='sidecart'>
        <div className='content'>
            <div className='items'>
                <div className='header'>
                    <p className='cart'>Cart</p>
                    <div className="counter">
                        <div className="cartCount">{getTotalCartItems()}</div>
                    </div>
                    
                </div>

                {all_product.map((e)=>{
                    if(cartItems[e.id]>0){
                        return  <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr/>
                    </div>    
                    }
                    return null;
                })}
                <hr/>
            </div>

            <div className="actions">
                <hr/>
                <div className="total">
                    <p className='subtotal'>Subtotal</p>
                    <p className='subtotal'>${getTotalCartAmount()}</p>
                </div>

                <div className="checkout">
                    <button type='submit' className='checkoutButton'>   CHECKOUT</button>
                </div>

            </div>



        </div>
    </div>
  )
}
