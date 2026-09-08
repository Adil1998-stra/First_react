const express  = require('express');
const cors  = require('cors')
const connectToMongo = require('./db')
const authRoutes = require('./routes/Auth')
const productRoutes = require('./routes/Product')
const cartRoutes = require('./routes/Cart')

connectToMongo();
const app = express()
const port = 5000

app.use(express.json());
app.use(cors())
app.use('/Images', express.static('Upload/Images'));



app.use('/api/auth',authRoutes)
app.use('/api/Product',productRoutes)
app.use('/api/cart',cartRoutes)


app.get('/',(req,res)=>{
    res.send("Backend is running")
})

// above code app.get is sample Api for checking url working or not 

app.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`)
})
