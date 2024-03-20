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
      if (!res || counterService.Get() === CounterService.DefaultValue())
        return undefined;

      const db = DatabaseConnection();
      if (!db) return undefined;

      const collection = db.collection("URL");
      await collection.insertOne({
        shortUrl: counterService.GenerateShortUrl(),
        bigUrl: bigUrl,
      });
    } catch (err) {
      console.error("Error inserting a new document to MongoDB. ", err);
      return undefined;
    }
  }

  async Get(id: string): Promise<string | undefined> {
    try {
      const res = await counterService.Load();
      if (!res || counterService.Get() === CounterService.DefaultValue())
        return undefined;

      const db = DatabaseConnection();
      if (!db) return undefined;

      const collection = db.collection("URL");
      const doc = await collection.findOne({ id });
      if (!doc) return undefined;

      return doc.bigUrl;
    } catch (err) {
      console.error("Error reading the document of MongoDB. ", err);
      return undefined;
    }
  }
}
