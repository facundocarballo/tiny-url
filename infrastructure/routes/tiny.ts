import express from "express";
import { Create } from "../controllers/tiny";

export const TinyRouter = express.Router();

TinyRouter.post("/", Create);
