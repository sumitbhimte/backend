const mongoose = require('mongoose');
const customerResponseSchema = new mongoose.Schema({
    responseId:
    {
        type: mongoose.Schema.Types.ObjectId
    },
    customerName:
    {
        type: String
    },
    phoneNumber:
    {
        type: String
    },  // Important for sending SMS
    responseDetails:
    {
        type: mongoose.Schema.Types.Mixed
    },  // Stores all other response details
    timestamp:
    {
        type: Date, default: Date.now
    }
});

export default mongoose.model('CustomerResponse', customerResponseSchema);
