import Admin from "../models/adminModel.js";
import * as adminServices from "../services/adminService.js"

export const registerAdmin = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const admin = await adminServices.registerAdmin(email, password);
        res.status(200).json({message : "Admin registered Successfully", admin});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

export const loginAdmin = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const { token, adminId} = await adminServices.loginAdmin(email, password);
        res.status(200).json({message : "Admin Logged in successfully", token, adminId});
    } catch (error) {
        res.status(401).json({error : error.message});
    }
};

export const getAdminProfile = async (req, res) =>{
    try {
        const admin = adminServices.getAdminById(req.admin.id);
        res.status(200).json(admin);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};