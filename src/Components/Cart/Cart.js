import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const {cart,product}=props;

      

    return (
        <div>
             {
                    cart.map((item) =>(
                      <div className='cart-container'>
                          
                     <img width={'40px'} src={item.img} alt="" />
                        <p>{item.name}</p>
                      </div>
    ))
                }
           
           
        </div>
    );
};

export default Cart;