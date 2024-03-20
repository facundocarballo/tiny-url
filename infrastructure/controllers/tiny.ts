import { Request, Response } from "express";
import { TinyMongoDB } from "../../adapters/tiny";
import { TinyService } from "../../services/tiny";

const repository = new TinyMongoDB();
const service = new TinyService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {};

export const Get = async (req: Request, res: Response): Promise<void> => {};
