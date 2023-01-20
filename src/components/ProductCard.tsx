import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces'

import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props{
  // children?:  ReactElement | ReactElement[];
  children: ( args:ProductCardHandlers)=> JSX.Element;
  className?: string;
  product:    Product;
  style?:     CSSProperties;
  onChange?: ( args: onChangeArgs )=> void;
  value?:number;
  initialValues?: InitialValues;
}



export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } 
    = useProduct( { onChange, product, value, initialValues } );


  return (
    <Provider value={{ 
        counter,
        increaseBy,
        product,
        maxCount
    }}>  
        <div 
          className={ `${ styles.productCard } ${ className }` }
          style={ style }>
            { children({
              count:counter,
              increaseBy,
              isMaxCountReached,
              maxCount:initialValues?.maxCount,
              product, 
              reset,
            }) }
        </div>
    </Provider>
  )
}

