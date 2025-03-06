import Survey from "../models/surveyModel.js";

export const createSurvey = async(adminId, title, description, questions, startTime, endTime) =>{
    const survey = new Survey({adminId, title, description, questions, startTime, endTime, createdBy : adminId});
    await survey.save();
    return survey;
};

export const getSurveys = async (adminId) =>{
    return await Survey.find({createdBy : adminId});
};

export const getSurveyById = async (surveyId) =>{
    return await Survey.findById(surveyId);
};