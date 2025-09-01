import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

export const emailSender = async(to, subject, text)=>{
    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        })

        await transporter.sendMail({
            from:`"Diabetes Prediction" <${process.env.EMAIL_USER}`,
            to,
            subject,
            text
        })
    } catch (error) {
        console.log("Some error occoured", error)
    }
}