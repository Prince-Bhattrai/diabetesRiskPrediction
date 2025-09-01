import bcrypt from "bcrypt"
import { User } from "../Models/user.model.js"
import jwt from "jsonwebtoken"


export const signUp= async(req, res)=>{
    const {name, email, password} = req.body;
    if(!name || !email || !password ){
        return res.status(400).json({
            success:false,
            message:"Please fill all fields."
        })
    }
    try {
        const isExist = await User.findOne({email:email})
        if(isExist){
            return res.status(401).json({
                success:false,
                message:"User already exist please try diffrent email."
            })
        }
        
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(password, salt)
        const data = new User({
            name:name,
            email:email,
            password:hash
        })
        await data.save()
        return res.status(200).json({
            success:true,
            message:"User create successfully",
            data:data
        })
    } catch (error) {
        console.log("Error occoured", error)
        return res.status(500).json({
            success:false,
            message:"server error please try again later."
        })
    }
}


export const login=async(req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"Please fill all felds"
        })
    }
    try {
        const isExist = await User.findOne({email:email})
        if(!isExist){
            return res.status(401).json({
                success:false,
                message:"User does not exist."
            })
        }
        const isValid = await bcrypt.compare(password, isExist.password)
        if(!isValid){
            return res.status(401).json({
                success:false,
                message:"Password doesnt match."
            })
        }
        const payload = {userId:isExist._id, userName:isExist.name}
        const token =  jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"4d"})
        res.status(200).json({
            success:true,
            message:"Sucessful log in",
            data:isExist,
            token:token
        })
    } catch (error) {
        console.log("Error occoured: ", error)
        return res.status(500).json({
            success:false,
            message:"Server error please try again later."
        })
    }
}

