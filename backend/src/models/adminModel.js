import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const SALT_ROUND = 10;

const adminSchema = new mongoose.Schema({
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },

    password :{
        type : String,
        required : true,
        minlength : 6,
    },
}, { timestamps : true });

//Hash password before saving
adminSchema.pre("save", async function (next){
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, SALT_ROUND);
    next();
});

//Compare Password
adminSchema.methods.comparePassword = function (adminPassword) {
    return bcrypt.compare(adminPassword, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;