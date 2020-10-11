import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
   // const total = cart.reduce((total, prd)=>total + prd.price, 0);
   let total = 0;
   for(let i=0; i<cart.length; i++){
       const product = cart[i];
       total = total + product.price*product.quantity ;
   }
   let shipping = 12.99;
   if(total>50){
       shipping =0;
   }
   else if(total>30){
       shipping = 5.00;
   }
    return (
        <div>
            <h4>Order summery</h4>
            <h4>Total ordered items {cart.length}</h4>
            <h4>Shipping cost: {shipping}</h4>
            <h4>Total Price: {total}</h4> 
            <h5>Total: {total+shipping}</h5>
            <br/>
            {props.children}
            
        </div>
    );
};

export default Cart;