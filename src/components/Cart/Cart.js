import React from 'react';

const Cart = ({cart,remove}) => {
    return (
        <div>
           {
                cart.map(product => <p>{product.name}  <button onClick={()=>remove(product)} className='ml-4 px-4 py-2 mt-2 bg-slate-300'>X</button></p>)
           }
        </div>
    );
};

export default Cart;