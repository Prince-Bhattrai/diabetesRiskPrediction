import { deleteReport, getPredict, predict } from "../Controllers/queryController.js";
import { Router } from "express";

const predictRouter = Router()

predictRouter.post("/predict/:user", predict)
predictRouter.get("/data/:id", getPredict)
predictRouter.delete("/delete/:id", deleteReport)

export default predictRouter