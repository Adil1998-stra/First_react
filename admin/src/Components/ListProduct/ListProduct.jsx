import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import remove_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

  const [allProducts,setAllProducts] = useState([]);

  const fetchInfo = async ()=>{
    try{
  
      let response = await fetch('http://localhost:5000/api/product/getallproduct')
      let data = await response.json()
      console.log ("All Data",data)
      setAllProducts(data)
    }
    catch (error){
        console.log("Error fetching products:" , error)
    }

  }

  useEffect(()=>{
    fetchInfo()
  },[])

const removeProduct = async (id)=>{
   
  try{
  
      let response = await fetch('http://localhost:5000/api/product/removeproduct',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify({id}),
      })

      let data = await response.json()

      console.log ("Record Deleted",data)
         if(data.success){
             fetchInfo();
          }
    }
    catch (error){
        console.log("Error fetching products:" , error)
    }

}

  return (
    <div className='list-product'>
      <h1>All Producs List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>  
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((type,index)=>{
            return<> <div key={index} className="listproduct-format-main listproduct-format">
                  <img src={type.image} alt="" className='listproduct-product-icon' />
                  <p>{type.name}</p>
                  <p>{type.old_price}</p>
                  <p>${type.new_price}</p>
                  <p>{type.category}</p>
                  <img onClick={()=>{removeProduct(type.id)}} className='listproduct-remove-icon' src={remove_icon} alt="" />
            </div>
            <hr/>
            </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
