export interface TinyRepository {
  Create(bigUrl: string): Promise<string | undefined>;
  Get(shortUrl: string): Promise<string | undefined>;
}
