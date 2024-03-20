import { TinyRepository } from "../ports/tiny";

export class TinyMongoDB implements TinyRepository {
  Create(bigUrl: string): Promise<string | undefined> {
    throw new Error("Method not implemented.");
  }
  Get(shortUrl: string): Promise<string | undefined> {
    throw new Error("Method not implemented.");
  }
}
