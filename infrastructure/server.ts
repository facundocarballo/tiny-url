import express, { Request, Response } from "express";
import { TinyRouter } from "./routes/tiny";
import { GetMongoClient } from "../database/mongo";
import { Db } from "mongodb";

let datbaseConnection: Db | undefined = undefined;
export const DatabaseConnection = (): Db | undefined => {
  return datbaseConnection;
};

async function SetUp() {
  datbaseConnection = await GetMongoClient();
}

SetUp().then(() => {
  const app = express();
  const port = 3000;

  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ message: "Hello World!" });
  });

  app.use("/tiny", TinyRouter);

  app.listen(port, () => {
    console.log("Server listening on port: ", port);
  });
});
