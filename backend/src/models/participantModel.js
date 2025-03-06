import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
}, { timestamps : true });

const Participant = mongoose.model("Participant", participantSchema);

export default Participant;