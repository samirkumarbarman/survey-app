import APIKEY from "../models/apiKeyModel.js";

export const validateAPIKEY = async (req, res, next) =>{
    try {
        const apikey = req.header("x-api-key");

        if (!apikey) {
            return res.status(403).json({message :"API key is required"});
        }

        const validkey = APIKEY.findOne({key : apikey});

        if (!validkey){
            return res.status(403).json({message: "Invalid API key"});
        }

        next();
    } catch (error) {
        res.status(500).json({message :"Server error during api key validation"});
    }
};