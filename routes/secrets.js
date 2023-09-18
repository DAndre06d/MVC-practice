import express from "express"
import handleSecret from "../controller/secretController.js";

const secretRouter = express.Router();

secretRouter.get("/", handleSecret)

export default secretRouter;