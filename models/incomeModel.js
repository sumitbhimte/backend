const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    responseId:
    {
        type: String
    },
    userId:
    {
        type: String
    },
    monthlyIncome:
    {
        type: Number
    },
    monthlySavings:
    {
        type: Number
    },
    flag:
    {
        type: Boolean
    }
});

export default mongoose.model('Income', incomeSchema);
