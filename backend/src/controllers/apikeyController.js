import * as apiKeyService from "../services/apiKeyService.js";

export const generateApiKey = async (req, res) => {
  try {
    const adminId = req.admin.id; // Extracted from token middleware
    const apiKey = await apiKeyService.generateApiKey(adminId);
    res.status(201).json({ message: "API Key generated successfully", apiKey });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const validateApiKey = async (req, res) => {
  try {
    const { apiKey } = req.params;
    const isValid = await apiKeyService.validateApiKey(apiKey);
    res.json({ isValid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
