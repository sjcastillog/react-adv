import { useState } from 'react';
import { onChangeArgs, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart] = useState<{ [ key:string ]:ProductInCart }>({});

    const onProductCountChange = ( { count, product }: onChangeArgs )=>{
        setShoppingCart((oldShopping)=>{

            const productInCart: ProductInCart = oldShopping[product.id] || {...product, count:0};

            // if(Math.max( productInCart.count + count, 0) > 0){
            //     productInCart.count += count;
            //     return{
            //         ...oldShopping,
            //         [product.id]: productInCart
            //     }
            // }
            // const { [ product.id]: toDelete, ...rest } = oldShopping;
            // return { ...rest}

            if(count === 0){
                const { [ product.id]: toDelete, ...rest } = oldShopping;
                return { ...rest}
            }

            return {
                ...oldShopping, [product.id]:{...product, count} 
            }

        });
        
    }
  return {
    onProductCountChange,
    shoppingCart
  }
}

