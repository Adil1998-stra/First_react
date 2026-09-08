const express = require('express')
const fetchuser = require('../Middleware/FetchUser')
const User = require('../Models/User')
const Product = require('../Models/Product')

const router = express.Router();

// Api for Addto product in cart

router.post('/addtocart',fetchuser,async (req,res)=>{
try {
    
    const{productId} = req.body;
    const product = await Product.findById({_id:productId})
    if(!product){
        return res.status(400).json({
            success : false,
            message: "produt not found"
        })
    }
    const userData = await User.findById({_id:req.user.id})
    if(!userData){
        return res.status(400).json({
            success:false,
            message:"User not found"
        })
    }

    const cartItem = userData.cart.find(
        item => item.product.toString()===productId
    );
    // agar ye code samajh na aye to niche commented code dekho kyunki ye shorthand arrow
    // function hai

//     const cartItem = userData.cart.find((item)=> {

//     return item.product.toString() === productId;

// });


    if (cartItem){
        cartItem.quantity +=1
    }
    else{
        userData.cart.push({
            product : productId,
            quantity : 1
        });
    }
       await userData.save()

    return res.status(200).json({
        success:true,
        message:"Item Added to Cart",
        cart:userData.cart
    })

} catch (error) {

    return res.status(500).json({
        success:false,
        message:"server error",
        error:error.message
    })
    
}

})

// Api for Remove product from cart

router.post('/removefromcart',fetchuser,async(req,res)=>{

    try {
        const{productId} = req.body
        
        const product = await Product.findById(productId)
        if(!product){
            return res.status(400).json({
                success : false,
                message:"product not found"
            })
        }
        
        const userData = await User.findById({_id:req.user.id})
        if(!userData){
            return res.status(400).json({
                success : false,
                message:"User not found"
            })
        }
    
        const cartItem = userData.cart.find((item)=>{
                
                return item.product.toString()===productId
        })


        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        } else {
            userData.cart = userData.cart.filter(
                item => item.product.toString() !== productId
            );
        }
        
        await userData.save()

        return res.status(200).json({
            success : true,
            message:"Item Removed From Cart"
        })


    } catch (error) {

        return res.status(500).json({
            success : false,
            message:"Server Error",
            error : error.messaage
        })
        
    }


})

// api for getting all cart of user

app.get('/getcart',fetchuser,async (req,res)=>{
    
    try {

        const userData = await User.findById({_id:req.user.id})
        if(!userData){
            return res.status(400).json({
                success:false,
                message : "User Not Found"
            })
        }
       
        return res.status(200).json({
            success:true,
            cart: userData.cart
    })

        
    } catch (error) {

    return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        
    })
}

})


module.exports = router;