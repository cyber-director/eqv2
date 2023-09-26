const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    event: {
        type: String,
        enums: ['parabellum', 'photo perfecta', 'filmskaping', 'scio', 'site incroyable', 'esprit decode'],
        required: true
    },
    status: {
        type: String,
        enums: ['Pending', 'Accepted', 'Rejected'],
        default: "Pending"
    },
    team: {
        type: mongoose.Types.ObjectId,
        ref: "team",
        required: true
    }
});

export default mongoose.models.registration || mongoose.model('registration', registrationSchema);