import ShopContext from "./shopContext";
import React, { useEffect, useState } from 'react'
import all_product from "../assets/all_product";


const ShopState = (props) => {

const [product,setAllProduct] = useState(all_product)
const [cartItem,setCartItem] = useState({})

const addToCart = (itemId,cquantity)=>{
  setCartItem((prev)=>({
    ...prev,
    [itemId]:(prev[itemId] || 0) + cquantity }));
};

const removeToCart = (itemId,cquantity)=>{
  setCartItem((prev)=>({
    ...prev,
    [itemId]:(prev[itemId] || 0) - cquantity }));
  
  
};

const getTotalAmt = ()=>{
  let totalAmt = 0

  for (const item in cartItem){
    // console.log(item)
      if (cartItem[item]>0){
        console.log(item,cartItem[item], "items hai")
        let iteminfo = all_product.find((product)=>product.id===Number(item))
        totalAmt = totalAmt + iteminfo.new_price*cartItem[item];
      }
  }
  return totalAmt
}



const contextValue = {product,cartItem,addToCart,removeToCart,getTotalAmt}


  return (
<ShopContext.Provider value={contextValue}>
    {props.children}
</ShopContext.Provider>
  )
}

export default ShopState
