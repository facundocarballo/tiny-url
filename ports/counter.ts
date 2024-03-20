export interface CounterRepository {
  Load(): Promise<string | undefined>;
  Save(value: string): Promise<string | undefined>;
}
