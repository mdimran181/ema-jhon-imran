import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    // const total=props.cart.reduce((total,prd) => total+prd.price,0);
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price;
        
    }

    let ship= 0.00;
    
    if ( total > 35){
        ship = 0.00;
    }
    else if(total > 15){
        ship =5.99;
    }
    else if(total > 0){
        ship = 14.99;
    }

    console.log(ship,total)

    const tax=Math.round(total/10);
    const grandTotal=(total+ship+Number(tax)).toFixed(2);
    
    return (
        <div>
            <h4>Order Summery:</h4>
            <h4>Items Ordered:{cart.length}</h4>
            <h4><small>tax VAT : {tax}</small></h4>
            <h4><small>Shipping cost:{ship}</small></h4>
            <h3>Total Price: {grandTotal}</h3>
        </div>
    );
};

export default Cart;