import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Header.css'
const Header = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([]);
    const show = (selectde)=>{
        const exist = cart.find(product=> product.id === selectde.id);
        if(!exist){
            const newSelection = [...cart,selectde];
            setCart(newSelection);
        }
        else{
            alert('already selected');
        }
       
    }
    const remove = (selectde) =>{
        const item = cart.filter(product=> product.id !== selectde.id);
        setCart(item);
    }
    useEffect(()=>{
        fetch('product.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div className='header-container'>
            <div className='products'>
                <h1 className='text-3xl'>This is Header</h1>
                <div className='product-loop'>
                    {
                        products.map(product=><Product
                        key={product.id}
                        product={product}
                        show={show}></Product>)
                    }
                </div>
            </div>
            <div className='order'>
                <h1 className='text-3xl'>Order Section</h1>
                <Cart 
                cart={cart}
                remove={remove}></Cart>
            </div>
        </div>
    );
};

export default Header;