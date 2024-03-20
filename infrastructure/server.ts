import express, { Request, Response } from "express";
import { TinyRouter } from "./routes/tiny";

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
