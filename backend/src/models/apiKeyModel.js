import mongoose from "mongoose";

const apiKeySchema = new mongoose.Schema({
    key :{
        type : String,
        required : true,
        unique : true,
    },

    owner :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Admin",
        required : true,
    },

    active :{
        type : Boolean,
        default : true,
    },
}, { timestamps : true });

const APIKEY = mongoose.model("APIKEY", apiKeySchema);

export default APIKEY;