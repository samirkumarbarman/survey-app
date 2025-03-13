import { createSurvey, getSurveys, getSurveyById } from "../services/surveyService.js";

export const createNewSurvey = async (req, res) =>{
    try {
        const { title, description, questions, startTime, endTime } = req.body;
        const adminId = req.user.id;

        const survey = await createSurvey(adminId, title, description, questions, startTime, endTime)
        res.status(201).json({ message: "Survey created successfully", survey });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  export const getAllSurveys = async (req, res) => {
    try {
      const adminId = req.user.id;
      const surveys = await getSurveys(adminId);
      res.json(surveys);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const getSurvey = async (req, res) => {
    try {
      const survey = await getSurveyById(req.params.surveyId);
      if (!survey) return res.status(404).json({ error: "Survey not found" });
  
      res.json(survey);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };