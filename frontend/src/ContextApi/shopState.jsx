import ShopContext from "./shopContext";
import React, { useEffect, useState } from 'react'
import all_product from "../assets/all_product";



const ShopState = (props) => {

const [product,setAllProduct] = useState([])
const [cartItem,setCartItem] = useState([])


const fetchProduct = async ()=>{
  
  const response = await fetch('http://localhost:5000/api/product/getallproduct')
  const data = await response.json()
  console.log(data)
  setAllProduct(data)

}

const fetchCart = async ()=>{

  const token = localStorage.getItem('auth-Token')
  if (token){
    const response = await fetch('http://localhost:5000/api/cart/getcart',{
      method : "Post",
      headers :{
        'auth-Token':token,
        'Content-Type':'application/json'
      },
    })
    let data = await response.json();
    console.log(data)
    setCartItem(data.cart);
  }

}

useEffect(()=>{
  fetchProduct()
  fetchCart()
},[])


const addToCart = async (productId, quantity)=>{

// setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  
 const token = localStorage.getItem('auth-Token')
    if (!token) {
        console.log("Please login first");
        return;
    }
  
    if(token){
      let response = await fetch('http://localhost:5000/api/cart/addtocart',{
        method: "POST",
        headers:{
          'Content-Type':'application/json',
          'auth-Token':token
        },
        body : JSON.stringify({  
                    productId: productId,
                    quantity: quantity
                })
      })

      let data = await response.json()
      if (response.ok){
          fetchCart()
          console.log(data,"Item Added to cart")
      }
      
    }
}



const removeToCart = async (productId,quantity)=>{

// setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  
 const token = localStorage.getItem('auth-Token')
    if(token){
      let response = await fetch('http://localhost:5000/api/cart/removefromcart',{
        method: "POST",
        headers:{
          'Content-Type':'application/json',
          'auth-Token':token
        },
        body : JSON.stringify({  
                    productId: productId,
                    quantity: quantity
                })
      })

      let data = await response.json()
        if (response.ok){
          fetchCart()
          console.log(data,"Item Removed from cart")
      }
    }
}


// ye niche wale function agar api nahin hai to normally cart ko add remove krne me use hote hai

// const addToCart = (itemId,cquantity)=>{
//   setCartItem((prev)=>({
//     ...prev,
//     [itemId]:(prev[itemId] || 0) + cquantity }));
// };


// const removeToCart = (itemId,cquantity)=>{
//   setCartItem((prev)=>({
//     ...prev,
//     [itemId]:(prev[itemId] || 0) - cquantity }));
  
  
// };

const getTotalAmt = ()=>{
  let totalAmt = 0
  for (const item of cartItem){
    // for of loop for value or for in loop for indexes/keys both use for array

    // console.log(item)
      // if (cartItem[item]>0){
        // console.log(item,cartItem[item], "items hai")
      
        const iteminfo = product.find((product)=>product._id===item.product);
        if(iteminfo){
          totalAmt = totalAmt + iteminfo.new_price*item.quantity;
        }
          
      // }
  }
  return totalAmt
}



const contextValue = {product,cartItem,addToCart,removeToCart,getTotalAmt,setCartItem}


  return (
<ShopContext.Provider value={contextValue}>
    {props.children}
</ShopContext.Provider>
  )
}

export default ShopState
