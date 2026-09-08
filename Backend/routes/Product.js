const express = require('express')
const jwt = require('jsonwebtoken')
const {body,validationResult} = require('express-validator')
const Product = require('../Models/Product')
const multer = require('multer')
const path = require('path')

const router = express.Router();

// file ko upload krne ka storage configuration multer.diskstorage file kahan or kis naaam se save hogi
// uske liye hota hai
const storage = multer.diskStorage({
    destination: 'Upload/Images',

    filename: (req,file,cb)=>{
        console.log(req.body)
        console.log(file.fieldname,file.originalname)
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }

})

const upload = multer({
     storage:storage
})

// Add product image Api for admin only

router.post('/upload',upload.single('product'),(req,res)=>{
        res.json({
            sucsess:true,
            image_url:`http://localhost:5000/Images/${req.file.filename}`
        })
})



// Add product Api for admin only
router.post('/addproduct', async (req,res)=>{
  
    const {name,image,category,new_price,old_price} = req.body

    let products = await Product.find({})
    let id;
    if(products.length > 0){
        let last_product = products.slice(-1)
        let last_array = last_product[0]
        id = last_array.id +1
    }
    else{
        id = 1
    }
// simple alternate of this condition
    // if (products.length>0){

    //     let lastproduct = products[products.length -1];
    //     id = lastproduct.id + 1;
    // }
    // else{
    //     id=1;
    // }

    const product = new Product({
        id: id,
        name,
        image,
        category,
        new_price, 
        old_price        
    })

    await product.save();

    return res.status(200).json({
        success:true,
        message :"Product Added successfully"
    })

})

// Remove product api for admin only
router.post('/removeproduct', async (req,res)=>{

    try {
           const remove = await Product.findOneAndDelete({id:req.body.id});
            console.log("product removed")
            return res.status(200).json({
                success:true,
                message:"Product removed Successfully"
            })        
    } catch (error) {

        res.status(500).send("server Error",error.message)        
    }
})

// Get All product api for admin only

router.get('/getallproduct',async (req,res)=>{
    try {
        const getAllProduct = await Product.find({})
        if (getAllProduct.length > 0 ){
            console.log("getting all product")
        }
        
        return res.status(200).send(getAllProduct)

    } catch (error) {
        
         res.status(500).json({
            success: false,
            message:"server Error",
            error:error.message})        
    }
        
})

module.exports =router