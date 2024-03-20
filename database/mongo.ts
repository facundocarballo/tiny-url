import { MongoClient, Db } from "mongodb";

export const COUNTER_DOC_ID = "65fb38a95537cc3807b5f996";

const uri = "mongodb://localhost:27017";

export const GetMongoClient = async (): Promise<Db | undefined> => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    return client.db("TinyURL");
  } catch (err) {
    console.error("Error connecting to MongoDB. ", err);
    return undefined;
  }
};
