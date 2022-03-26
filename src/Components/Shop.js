import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css';


const Shop = () => {

    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    console.log(cart);
   


    useEffect( ()=>{
        fetch('laptop.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])


    const handleAddToCart =(product)=>{
        const newCart =[...cart,product];
        setCart(newCart);
        // const exist =
      
        // console.log(product);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                
                {
                    products.map(product =><Product
                    key={product.id} product={product} name={product.name}  handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                
            </div>

            <div className="cart-container">
               <Cart cart ={cart} key={cart.id} ></Cart>

            </div>
        </div>
    );
};

export default Shop;