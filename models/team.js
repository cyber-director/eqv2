const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    members: {
        type: [mongoose.Types.ObjectId],
        ref: "member",
        required: true
    }
});

export default mongoose.models.team || mongoose.model('team', teamSchema);