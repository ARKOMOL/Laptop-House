import React from 'react';
import './Product.css';
import { BsFillCartFill} from 'react-icons/bs';

const Product = (props) => {
  const{handleAddToCart,product}=props;
    const {name,price,img}=props.product;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <h4>Price: ${price}</h4>
                <button onClick={()=>handleAddToCart(product)}>Add To Cart <BsFillCartFill ></BsFillCartFill></button>

            </div>
        </div>
    );
};

export default Product;