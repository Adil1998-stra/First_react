import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

 const [Image,SetImage] =  useState(false)
 
  const[productDetail,setProductDetail] =useState({
    name:"",
    image:"",
    category:"Beauty Products",
    new_price:"",
    old_price:""
  })

  const ImageHandlr = (e)=>{ 
    SetImage(e.target.files[0]);
    // is function ka matlab samajhna ye function event pr call ho raha hai to jb bhi event fire hoga wo 
    // function ke e me store hoga e.target ka matlab kon sa event fire hua .files ka matlab usme jo files
    // select hui hai unka [0] number index hi select hoga agar multiple file select ki to 0 index file hi 
    // select hogi
  }

  const changeHandlr= (e)=>{
      setProductDetail({...productDetail,[e.target.name]:e.target.value})
  }

  const addProduct = async ()=>{
    console.log(productDetail)
     
     let product = { ...productDetail };

     let formData = new FormData()
     formData.append('product',Image)

   let response =   await fetch('http://localhost:5000/api/Product/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
     });

     let data = await response.json()

     console.log(data)

     if (data.success){
      product.image = data.image_url
      console.log(product.image)

    let response1 =   await fetch('http://localhost:5000/api/Product/addproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
       'Content-Type': 'application/json',
      },
      body:JSON.stringify(product),
     });
     let mydata = await response1.json()
     
     console.log(mydata)

      if (mydata.success){
        alert("product Added")
      }
      else{
        alert("product not Added ")
      }

     }
     else{
      console.log("upload failed")
     }

  }

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetail.name} onChange={changeHandlr} type="text" name='name' placeholder='Type Here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
        <p>Price</p>
        <input value={productDetail.old_price} onChange={changeHandlr} type="text" name='old_price' placeholder='Type Here' />
        </div>
        <div className="addproduct-itemfield">
        <p>New Price</p>
        <input value={productDetail.new_price} onChange={changeHandlr} type="text" name='new_price' placeholder='Type Here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetail.category} onChange={changeHandlr} name="category" className='add-product-selector' >
            <option value="Beauty Products">Beauty Products</option>
            {/* <option value="Women">Women</option>
            <option value="Kids">Kids</option> */}
        </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={Image?URL.createObjectURL(Image): upload_area} className='addproduct-thumnail-img' alt="" />
            </label>
            <input type="file" onChange={ImageHandlr} name='image' id='file-input' hidden />
        </div>
        <button onClick={()=>{addProduct()}} className='Addproduct-btn'>Add</button>
    </div>
  )
}

export default AddProduct
