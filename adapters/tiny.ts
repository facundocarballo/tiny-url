import { DatabaseConnection } from "../infrastructure/server";
import { TinyRepository } from "../ports/tiny";
import { CounterService } from "../services/counter";
import { CounterMongoDB } from "./counter";

const counterRepo = new CounterMongoDB();
const counterService = new CounterService(counterRepo);

export class TinyMongoDB implements TinyRepository {
  async Create(bigUrl: string): Promise<string | undefined> {
    try {
      const res = await counterService.Load();
      if (!res || counterService.Get() === "000000-1") return undefined;

      const db = DatabaseConnection();
      if (!db) return undefined;

      const collection = db.collection("URL");
      console.log({
        shortUrl: counterService.GenerateShortUrl(),
        bigUrl: bigUrl,
      });
      const r = await collection.insertOne({
        shortUrl: counterService.GenerateShortUrl(),
        bigUrl: bigUrl,
      });
      console.log("resultado: ", r);
    } catch (err) {
      console.error("Error inserting a new document to MongoDB. ", err);
      return undefined;
    }
  }
  async Get(shortUrl: string): Promise<string | undefined> {
    throw new Error("Method not implemented.");
  }
}
