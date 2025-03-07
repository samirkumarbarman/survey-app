import * as responseService from "../services/responseService.js";

export const submitResponse = async (req, res) =>{
    try {
        const { surveyId, participantId, answers } = req.body;
        const submit = await responseService.submitResponse({surveyId, participantId, answers});
        res.status(201).json({ message : "Response submitted Successfully", submit});
    } catch (error) {
        res.staus(400).json({ error : error.message});
    }
};

export const getSurveyResults = async (req, res) => {
    try {
        const {surveyId} = req.params;
        const results = await responseService.getSurveyResponse(surveyId);
        res.status(200).json(results);
    } catch (error) {
        res.staus(400).json({ error : error.message});
    }
}