import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log("Server listening on port: ", port);
});
