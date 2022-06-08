import React from 'react';
import './product.css';
const Product = ({product,show}) => {
    const {id,name,brand,price,img}=product;
    return (
        <div className='product-item'>
            <img src={img} alt=''/>
            <p className='text-2xl'>Name: {name}</p>
            <p className='text-2xl'>Brand: {brand}</p>
            <p className='text-2xl'>Brand: {price}</p>
            <button onClick={()=>show(product)} className='bg-zinc-700 text-white px-3 w-full rounded-lg'>Add To Cart</button>
        </div>
    );
};

export default Product;