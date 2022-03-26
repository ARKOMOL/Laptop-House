import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const {cart,product}=props;

    const [ran,setRan]=useState([]);
    console.log(ran.name);
   
    const random =(product)=>{
        const showLaptop =Math.floor(Math.random() * product.length);
        const luckyWatch = product[showLaptop];
        setRan(luckyWatch)
    }
    return (
        <div>
            <h2>Selected Items</h2>
            
             {
                    cart.map((item) =>(
                      <div className='cart-container' key={item.id}>
                          
                     <img width={'40px'} src={item.img} alt="" />
                        <p >{item.name}</p>
                        
                      </div>
    ))
                }
   
           <div className="cart-btn">
           <img src={ran.img} alt="" />
           <h3>{ran.name}</h3>
           <button onClick={() =>{random(cart)}} className='choose-one'>Choose 1 For Me</button>
           <div>
              
           </div>
           <button  className='choose-again'>Choose Again</button>
           </div>
           
        </div>
    );
};

export default Cart;