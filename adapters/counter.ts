import { ObjectId } from "mongodb";
import { DatabaseConnection } from "../infrastructure/server";
import { CounterRepository } from "../ports/counter";
import { COUNTER_DOC_ID } from "../database/mongo";

export class CounterMongoDB implements CounterRepository {
  async Load(): Promise<string | undefined> {
    const db = DatabaseConnection();
    if (!db) return undefined;
    try {
      const collection = db.collection("Counter");
      const objId = new ObjectId(COUNTER_DOC_ID);
      const doc = await collection.findOne({ _id: objId });
      return (doc as any).value;
    } catch (err) {
      console.error("Error reading the database. ", err);
      return undefined;
    }
  }
  Save(value: string): Promise<string | undefined> {
    throw new Error("Method not implemented.");
  }
}
