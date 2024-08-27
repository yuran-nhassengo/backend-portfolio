const mongoose = require('mongoose');


const connectDB = async () => {

    try{

        const connect = await mongoose.connect(process.env.MONGODB);
        console.log(`Base de dados Conenectada ${connect.connection.host}`)
    
    }catch(err)
    {
        console.log(err);
    }
}



module.exports = connectDB