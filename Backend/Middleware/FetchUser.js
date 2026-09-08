const jwt = require ('jsonwebtoken')
const JWT_SECRET = "mysecretkey";

const FetchUser = (req,res,next)=>{
    
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).send("Please Authneticate a Valid Token")
    };
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next()

    } catch (error) {
        return res.status(401).send("invalid token")

    }

}


module.exports = FetchUser