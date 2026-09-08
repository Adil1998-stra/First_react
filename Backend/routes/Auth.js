const express = require('express')
const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const {body,validationResult} = require ('express-validator')
const jwt = require('jsonwebtoken')
const fetchUser = require('../Middleware/FetchUser')

const router = express.Router();

const JWT_SECRET = "mysecretkey";

// ''First Api to Create a New User''''
router.post('/createuser',[
    body('name').isLength({min: 3}).notEmpty().withMessage("Name is Required Min.Length 3 Char."),
    body('email').isEmail().withMessage("Valid Email is Required"),
    body('password').isLength({min: 6}).withMessage("Password must be at least 6 characters"), 
],async (req,res)=>{

    try {
        const {name,email,password} = req.body;

        console.log(req.body)
        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        
        const existinguser = await User.findOne({email});

        if (existinguser){
            return res.status(400).json({message:"User Already Exist"})

        }

        const salt = await bcrypt.genSalt(10)
        const secpassword = await bcrypt.hash(password,salt)
// '''''''''''''''''''''''''''''''''''''''''''''''''''''
        const user = new User({
            name,
            email,
            password :secpassword
        });
        await user.save();
// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        // const user = await User.create({
        //     name,
        //     email,
        //     password: secpassword
        // });

// Alternative of above code

        return res.status(201).json({
        message: "User created successfully"
        });
        
    } catch (error) {
        
        console.error(error);
        res.status(500).send("Server error");
    }
})

// second APi NOW FROM THERE WE WILL CREATE API TO LOGIN USER
router.post('/login',[
        //yahan validation use ki jo upar import ki thi
     body('email',).isEmail().withMessage('Enter a valid email'),
     body('password',).exists().withMessage('Password cannot be empty'),

    ], async (req,res)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array() });
        }
        const {email,password} = req.body;

        try {
            const userExist = await User.findOne({email})
            if(!userExist){
                return res.status(400).json({message: "Invalid Credentials" });
            }

            const passwordCheck = await bcrypt.compare(password,userExist.password);
            if(!passwordCheck){
                return res.status(400).json({message:"invalid credentials"});
            }
            
            const data = {
                user:{
                    id:userExist.id
                }
            }

            const authToken = jwt.sign(data,JWT_SECRET)
            return res.status(200).json({authToken})            
            
            
        } catch (error) {
            console.log("error")
          return res.status(500).send("server error")

        }

})

// Third APi NOW FROM THERE WE WILL CREATE API TO get USER details

 router.post('/getuser',fetchUser, async(req,res)=>{
    try {
        const user = await User.findById(req.user.id).select("-password")
        res.status(200).json(user)

    } catch (error) {
        console.error(error)
            res.status(500).send("server error");        
    }


 })

module.exports = router