import Response from "../models/responseModel.js";

export const submitResponse = async (surveyId, participantId, answers) =>{
    const response = new Response({surveyId, participantId, answers});
    await response.save();
    return response;
};

export const getSurveyResponse = async (surveyId) =>{
    return await Response.find({surveyId}).populate("participantId", "email");
};