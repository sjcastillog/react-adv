import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';




export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange} = useShoppingCart();
    
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
                    products.map( product =>
                        <ProductCard 
                            key={product.id}
                            product={ product }
                            className='bg-dark text-white'
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }>
                            <ProductImage   className='custom-image' style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2'}}/>
                            <ProductTitle   className='text-white text-bold'/>
                            <ProductButtons 
                                className='custom-buttons'
                                style={{
                                    display:'flex',
                                    justifyContent:'end',
                                }}/>
                        </ProductCard>
                    )
                }


            </div>
            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product])=>(
                        <ProductCard 
                            key={ key }
                            product={ product }
                            className='bg-dark text-white'
                            style={{width:'100px'}}
                            onChange={ onProductCountChange }
                            value={ product.count }>
                            <ProductImage   className='custom-image' style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2'}}/>
                            <ProductButtons 
                                className='custom-buttons'
                                style={{
                                    display:'flex',
                                    justifyContent:'end',
                                }}/>
                        </ProductCard>
                    ))
                }
                
            </div>
        </div>
    )
}



