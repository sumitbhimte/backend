import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
    responseId:
    {
        type: String
    },
    userId:
    {
        type: String
    },
    questionId:
    {
        type: String
    },
    selectedOption:
    {
        type: String
    },
    isCorrect:
    {
        type: Boolean
    },
    city:
    {
        type: String
    }
});

export default mongoose.model("Response", responseSchema);
