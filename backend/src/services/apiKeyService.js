import ApiKey from "../models/apiKeyModel.js";
import crypto from "crypto";

export const generateApiKey = async (adminId) => {
  const key = crypto.randomBytes(32).toString("hex");
  const apiKey = new ApiKey({ key, owner: adminId });
  await apiKey.save();
  return apiKey;
};

export const validateApiKey = async (key) => {
  return await ApiKey.findOne({ key, active: true });
};