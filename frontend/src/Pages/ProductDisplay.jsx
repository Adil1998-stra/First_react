import React, { useContext } from 'react'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import ShopContext from '../ContextApi/shopContext'
import { useParams } from 'react-router-dom'


const ProductDisplay = () => {
    const{product} = useContext(ShopContext)
    const {productId} = useParams();
    const products = product.find((e)=>(e.id) === Number(productId));

  return (
    <>
     <ProductDetails product={products} /> 
    </>
  )
}

export default ProductDisplay
