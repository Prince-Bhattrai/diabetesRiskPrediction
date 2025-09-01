import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    patientName:{
        type:String,
        required:true
    },
    Pregnancies:{
        type:Number,
        required:true
    },
    Glucose:{
        type:Number,
        required:true
    },
    BloodPressure:{
        type:Number,
        required:true
    },
    SkinThickness:{
        type:Number,
        required:true
    },
    Insulin:{
        type:Number,
        required:true
    },
    BMI:{
        type:Number,
        required:true

    },
    DiabetesPedigreeFunction:{
        type:Number,
        required:true
    },
    Age:{
        type:String,
        required:true
    },
    predict:{
        type:Number,
        default:0
    }
})

export const userQuery = mongoose.model("userQuery", querySchema) 