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
                <hr></hr>
                {all_product.map((e)=>{
                    if(cartItems[e.id]>0){
                        return  <div className='cartitems-container'>
                                
                        <div className='cartitems-main'>
                            <div className="cartitems-left">
                                <img src={e.image} alt="" className='cartitem-icon' />
                            </div>

                            <div className="cartitems-right">
                                <div className="details-left">
                                    <p className='product'>{e.name}</p>
                                    <div className="size-quantity">
                                        <p className='size'> Size: S </p>
                                        <p className='quantity'>
                                            Quantity: <button className='cartitems-count'>{cartItems[e.id]}</button>
                                        </p>
                                    </div>
                                </div>
                                <div className="details-right">
                                    <p className='price'>${e.new_price}</p>
                                    <p className='remove' onClick={()=>{removeFromCart(e.id)}} alt="">Remove</p>
                                </div>
                                
                            </div>
     
                        </div>
                    </div>    
                    }
                    return null;
                })}
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
