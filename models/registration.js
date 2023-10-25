const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    event: {
        type: String,
        enums: ['parabellum', 'lux captis', 'filmskaping', 'scio', 'site incroyable', 'esprit decode', 'technovate', ''polémos', 'esthetique art'],
        required: true
    },
    status: {
        type: String,
        enums: ['Pending', 'Accepted', 'Approved', 'Rejected'],
        default: "Pending"
    },
    team: {
        type: mongoose.Types.ObjectId,
        ref: "team",
        required: true
    }
});

export default mongoose.models.registration || mongoose.model('registration', registrationSchema);
