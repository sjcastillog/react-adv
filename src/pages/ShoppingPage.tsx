// import React, { useState } from 'react';
import ProductCard from '../components'
import '../styles/custom-styles.css';
// import { onChangeArgs, Product, ProductInCart } from '../interfaces/interfaces';
import { products } from '../data/products';
import { useShoppingCart  } from '../hooks/useShoppingCart';




export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart} = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>

        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap'
        }}>

            {
                products.map( product =>(
                    <ProductCard 
                        key={ product.id }
                        product={ product }
                        value={  shoppingCart[product.id]?.count || 0}
                        onChange={ onProductCountChange }
                        className='bg-dark text-white'>
                        <ProductCard.Image   className='custom-image' style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2'}}/>
                        <ProductCard.Title   className='text-white text-bold'/>
                        <ProductCard.Buttons className='custom-buttons'/>
                    </ProductCard>
                ))
            }
            


            {/* <ProductCard 
                product={ product2 }
                style={{ backgroundColor:'#70D1F8'}}>
                <ProductImage   style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2'}}/>
                <ProductTitle   style={{fontWeight:'bold'}}/>
                <ProductButtons style={{
                    display:'flex',
                    justifyContent:'end',
                }}/>
            </ProductCard> */}

        </div>
        <div className='shopping-cart'>
            {
                Object.entries(shoppingCart).map( ([ key, product]) =>(
                    <ProductCard 
                        key={ product.id }
                        product={ product }
                        value={ product.count }
                        onChange={ onProductCountChange }
                        className='bg-dark text-white'>
                        <ProductCard.Image   className='custom-image' style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2'}}/>
                        <ProductCard.Title   className='text-white text-bold'/>
                        <ProductCard.Buttons style={{display:'flex', justifyContent:'center'}} className='custom-buttons'/>
                    </ProductCard>
                ))
            }
        </div>
    </div>
  )
}



