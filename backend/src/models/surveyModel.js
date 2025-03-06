import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
    title :{
        type : String,
        required : true,
    },

    description :{
        type : String,
        required : true,
    },

    questions : [{
            text :{
                type : String,
                required : true,
            },

            options :[
                {
                    type : String,
                    required : true,
                },
            ],
        }],

    startTime :{
        type : Date,
        required : true,
    },

    endTime :{
        type : Date,
        required : true,
    },

    createdBy :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Admin",
        required : true,
    },
}, { timestamps : true });

const Survey = mongoose.model("Survey", surveySchema);

export default Survey;