import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";

export const authenticateAdmin = async (req, res, next) =>{
    try {
        const token = req.header("Authorization")?.split(" ")[1];

        if(!token) {
            return res.status(401).json({message :"Access denied, No token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if (!admin) {
            return res.status(401).json({message :"Unauthorized Access"});
        }

        req.admin = admin;
        next();
    } catch (error) {
        res.status(500).json({message :"Server error"});
    }
};