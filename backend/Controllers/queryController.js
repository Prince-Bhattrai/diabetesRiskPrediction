import axios from "axios";
import { userQuery } from "../Models/queryModel.js";
import { configDotenv } from "dotenv";
configDotenv()


export const predict = async (req, res) => {
    const { patientName, Pregnancies,
        Glucose, BloodPressure,
        SkinThickness, Insulin,
        BMI, DiabetesPedigreeFunction,
        Age } = req.body;

    const { user } = req.params;
    if (!patientName || !Pregnancies ||
        !Glucose || !BloodPressure ||
        !SkinThickness || !Insulin ||
        !BMI || !DiabetesPedigreeFunction ||
        !Age || !user) {
        return res.status(400).json({
            success: false,
            message: "All field are required."
        })
    }
    try {
        const response = await axios.post(process.env.MODEL, {
            Pregnancies, Glucose,
            BloodPressure, SkinThickness,
            Insulin, BMI, DiabetesPedigreeFunction,
            Age
        })

        const data = new userQuery({
            patientName:patientName,
            Pregnancies:Pregnancies,
            Glucose:Glucose,
            BloodPressure:BloodPressure,
            SkinThickness:SkinThickness,
            Insulin:Insulin,
            BMI:BMI,
            DiabetesPedigreeFunction:DiabetesPedigreeFunction,
            Age:Age,
            user:user,
            predict:response.data.prediction
        })

        await data.save()

        console.log(response.data)
        res.status(200).json({
            success:true,
            message:"Predict of model.",
            data:response.data,
            alldata:data
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Server error please try again later"
        })
    }
}


export const getPredict= async(req, res)=>{
    const {id} = req.params;
    if(!id){
        return res.status(400).json({
            success:false,
            message:"Please provide a id!"
        })
    }
    try {
        const data = await userQuery.find({user:id}).populate("user")
        if(!data){
            return res.status(404).json({
                success:false,
                message:"Data not found!"
            })
        }
        res.status(200).json({
            success:true,
            message:"All data of user.",
            data
        })
    } catch (error) {
        console.log("Error occoured", error)
        return res.status(500).json({
            success:false,
            message:"server error please try again later."
        })
    }
}



export const deleteReport = async(req, res)=>{
    const {id} = req.params;
    if(!id){
        return res.status(400).json({
            success:false,
            message:"ID is missing"
        })
    }
    try {
        const deletData = await userQuery.findOneAndDelete({_id:id})
        if(!deletData){
            return res.status(404).json({
                success:false,
                message:"Data not found!"
            })
        }
        res.status(200).json({
            success:true,
            message:"Data deleted"
        })
    } catch (error) {
        console.log("Some error occoured", error)
        return res.status(500).json({
            success:false,
            message:"Sever error please try again later."
        })
    }
}