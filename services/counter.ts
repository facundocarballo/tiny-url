import { IncrementBase52Number } from "../handlers/increment";
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

  private async _Save(): Promise<string | undefined> {
    return this.repository.Save(this.Get());
  }

  private _Increment(id: number): boolean {
    switch (id) {
      case 0:
        this.gValue = IncrementBase52Number(this.gValue);
        if (this.gValue === "0") return this._Increment(1);
        return true;
      case 1:
        this.fValue = IncrementBase52Number(this.fValue);
        if (this.fValue === "0") return this._Increment(2);
        return true;
      case 2:
        this.eValue = IncrementBase52Number(this.eValue);
        if (this.eValue === "0") return this._Increment(3);
        return true;
      case 3:
        this.dValue = IncrementBase52Number(this.dValue);
        if (this.dValue === "0") return this._Increment(4);
        return true;
      case 4:
        this.cValue = IncrementBase52Number(this.cValue);
        if (this.cValue === "0") return this._Increment(5);
        return true;
      case 5:
        this.bValue = IncrementBase52Number(this.bValue);
        if (this.bValue === "0") return this._Increment(6);
        return true;
      case 6:
        this.aValue = IncrementBase52Number(this.aValue);
        if (this.aValue === "0") return false;
        return true;
      default:
        return false;
    }
  }

  async Increment(): Promise<string | undefined> {
    if (!this._Increment(0)) return undefined;
    if (!(await this._Save())) return undefined;
    return this.Get();
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
