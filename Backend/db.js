const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/samweb';

const connectToMongo = async ()=>{
try {
    await mongoose.connect(mongoUri);
    console.log("samweb Connected to Mongo ")
    
} catch (error) {
    console.log("Mongo connection error", error.message);
    process.exit(1);
}
}

module.exports = connectToMongo;