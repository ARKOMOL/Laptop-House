import React, { useState } from 'react';
import './Cart.css';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const Cart = (props) => {
    console.log(props);
    const {cart,clearCart}=props;

    const [ran,setRan]=useState([]);


    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true)
    }
    
    function closeModal(){
        setIsOpen(false)
    }

   
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
          
           <button onClick={() =>{random(cart)}} className='choose-one'>Choose one</button>
           <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >   
      <img src={ran.img} alt="" />
      <h3>{ran.name}</h3>
       </Modal>
           
           <button onClick={clearCart}  className='choose-again'>Choose Again</button>
           </div>
           
        </div>
    );
};

export default Cart;