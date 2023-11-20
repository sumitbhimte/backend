const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    responseId:
    {
        type: String,
        required: true,
        unique: true,
    },
    userId:
    {
        type: String,
        required: true,
        unique: true,
    },
    monthlyIncome:
    {
        type: Number,
        required: true,
    },
    monthlySavings:
    {
        type: Number,
        required: true,
    },
    flag:
    {
        type: Boolean,
        required: true,
    }
});

export default mongoose.model('Income', incomeSchema);
