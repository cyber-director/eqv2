const mongoose = require('mongoose');

const connect = async () =>{
    try{
        // Change to more sequre ways to do this i.e. Use ENV
        // const db = await mongoose.connect("mongodb+srv://root:root@test.z0hhkds.mongodb.net/?retryWrites=true&w=majority");
        const db = await mongoose.connect(process.env.MONGO_URI)
        console.log('Successfully connected to the database');
    }
    catch(err){
        console.log(err);
        console.log(`Unable to connect to the database`)
    }
}

export default connect;
