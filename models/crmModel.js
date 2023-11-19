const mongoose = require('mongoose');


const CRMSchema = new mongoose.Schema({
    responseId:
    {
        type: mongoose.Schema.Types.ObjectId
    },
    formData:
    {
        type: mongoose.Schema.Types.Mixed
    },  // Stores key-value pairs for each question and answer
    timestamp:
    {
        type: Date, default: Date.now
    }
});

export default mongoose.model('CRM', CRMSchema);
