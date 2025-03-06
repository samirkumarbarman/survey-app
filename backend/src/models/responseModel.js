import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
    surveyId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Survey",
        required : true,
    },

    participantId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Participant",
        required : true,
    },

    answer :[{
        questionId :{
            type : mongoose.Schema.Types.ObjectId,
            required : true,
        },

        selectedOption :{
            type : String,
            required : true,
        },
    }],

}, { timestamps : true });

const Response = mongoose.model("Response", responseSchema);

export default Response;