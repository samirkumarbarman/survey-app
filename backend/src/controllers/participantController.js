import * as participantService from "../services/participantService.js";

export const registerParticipant = async (req, res) =>{
    try {
        const {email} = req.body;
        const participant = await participantService.registerParticipant(email);
        res.status(200).json(participant);
    } catch (error) {
        res.status(401).json({error : error.message});
    }
};

