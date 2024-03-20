import express from "express";
import { Create, Get } from "../controllers/tiny";

export const TinyRouter = express.Router();

TinyRouter.post("/", Create);
TinyRouter.get("/", Get);
