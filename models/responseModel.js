import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
    responseId:
    {
        type: String,
        unique: true,
        required: true,
    },
    userId:
    {
        type: String,
        required: true,
        unique: true,
    },
    correctOption:
    {
        type: String,
        required: true,
    },
    questionId:
    {
        type: String,
        required: true,
    },
    selectedOption:
    {
        type: String,
        required: true,
    },
    isCorrect:
    {
        type: Boolean,
        required: true,
    },
    city:
    {
        type: String,
        required: true,
    }
});

export default mongoose.model("Response", responseSchema);
