import { Request, Response } from "express";
import { TinyMongoDB } from "../../adapters/tiny";
import { TinyService } from "../../services/tiny";

const repository = new TinyMongoDB();
const service = new TinyService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {
  const bigUrl = req.body.bigUrl;
  if (!bigUrl) {
    res
      .status(400)
      .send({ message: "Please, send a bigUrl in the body request." });
    return undefined;
  }
  service.Create(bigUrl);
  res.status(200).send({ message: "ok" });
};

export const Get = async (req: Request, res: Response): Promise<void> => {
  const value = req.params.id;
  if (!value) {
    res.status(404).send({ message: "This url doesn't exist." });
    return undefined;
  }

  const bigUrl = await service.Get(value);
  if (!bigUrl) {
    res.status(404).send({ message: "This url doesn't exist." });
    return undefined;
  }

  res.redirect(bigUrl);
};
