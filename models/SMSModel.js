const mongoose = require('mongoose');
const customerResponseSchema = new mongoose.Schema({
    responseId:
    {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    customerName:
    {
        type: String,
        required: true,
    },
    phoneNumber:
    {
        type: String,
        required: true,
        unique: true,
    },  // Important for sending SMS
    responseDetails:
    {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },  // Stores all other response details
    timestamp:
    {
        type: Date, default: Date.now
    }
});

export default mongoose.model('CustomerResponse', customerResponseSchema);
