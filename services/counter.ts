import { CounterRepository } from "../ports/counter";

export class CounterService {
  private repository: CounterRepository;
  private aValue: string;
  private bValue: string;
  private cValue: string;
  private dValue: string;
  private eValue: string;
  private fValue: string;
  private gValue: string;

  constructor(repo: CounterRepository) {
    this.repository = repo;
    this.aValue = "0";
    this.bValue = "0";
    this.cValue = "0";
    this.dValue = "0";
    this.eValue = "0";
    this.fValue = "0";
    this.gValue = "-1";
  }

  static DefaultValue(): string {
    return "000000-1";
  }

  async Load(): Promise<boolean> {
    try {
      const val = await this.repository.Load();
      if (!val) return false;
      const characters = val.split("");
      this.aValue = characters[0];
      this.bValue = characters[1];
      this.cValue = characters[2];
      this.dValue = characters[3];
      this.eValue = characters[4];
      this.fValue = characters[5];
      this.gValue = characters[6];
    } catch (err) {
      console.error("Error loading the counter. ", err);
      return false;
    }

    return true;
  }

  async Save(): Promise<string | undefined> {
    return this.repository.Save(this.Get());
  }

  Increment(): string | undefined {
    return undefined;
  }

  Get(): string {
    return (
      this.aValue +
      this.bValue +
      this.cValue +
      this.dValue +
      this.eValue +
      this.fValue +
      this.gValue
    );
  }

  GenerateShortUrl(): string {
    return "https://localhost:3000/" + this.Get();
  }
}
