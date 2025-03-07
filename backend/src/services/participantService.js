import Participant from "../models/participantModel.js";

export const registerParticipant = async (email) =>{
    let participant = await Participant.findOne({email});

    if (!participant) {
        participant = new Participant({email});
        await participant.save();
    }
    return participant;
};