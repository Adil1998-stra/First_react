import React, { useContext } from 'react'
import ShopContext from '../../ContextApi/shopContext'
import Item from '../Items/Item'

const Product = () => {

const {product} = useContext(ShopContext)

  return (
    <div  className=' flex flex-wrap justify-center gap-6'>
      {product.map((item,indx)=>{
      return  <Item key={indx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
    </div>
  )
}

export default Product
