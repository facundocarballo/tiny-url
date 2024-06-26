import { ObjectId } from "mongodb";
import { DatabaseConnection } from "../infrastructure/server";
import { COUNTER_DOC_ID } from "../database/mongo";

export class Counter {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  static async Load(): Promise<Counter | undefined> {
    const db = DatabaseConnection();
    if (!db) return undefined;
    try {
      const collection = db.collection("Counter");
      const objId = new ObjectId(COUNTER_DOC_ID);
      const doc = await collection.findOne({ _id: objId });
      console.log("Documento: ", doc);
    } catch (err) {
      console.error("Error reading the database. ", err);
      return undefined;
    }
    return new Counter("0000000");
  }

  Get(): string {
    return this.value;
  }

  Increment() {}
}
