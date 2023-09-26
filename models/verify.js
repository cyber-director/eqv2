const mongoose = require('mongoose');

const verifySchema = new mongoose.Schema({
    code:{
        type:String, 
        required:true
    },
    member: {
        type: mongoose.Types.ObjectId,
        ref: "member",
        required: true
    }
});

export default mongoose.models.verify || mongoose.model('verify', verifySchema);