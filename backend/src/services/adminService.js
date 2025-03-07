import Admin from "../models/adminModel.js"
import jwt from "jsonwebtoken";

export const registerAdmin = async (email, password) => {
    const existAdmin = await Admin.findOne({email});
    if (existAdmin) throw new error("Admin already exist");

    const admin = new Admin({email, password});
    await admin.save();
    return {message: "Admin registered successfully"};
};

export const loginAdmin = async (email, password) =>{
    const admin = await Admin.findOne({email});
    if (!admin) throw new error("Admin not found");

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) throw new error("Invalid credentials");

    const token = jwt.sign({id :admin._id}, process.env.JWT_SECRET, { expiresIn : "7d"});
    return {token, adminId :admin._id};
};

export const getAdminById = async (adminId) => {
    const admin = await Admin.findById(adminId);
    return admin;
};