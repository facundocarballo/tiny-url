export interface TinyRepository {
  Create(bigUrl: string): Promise<string | undefined>;
  Get(id: string): Promise<string | undefined>;
}
