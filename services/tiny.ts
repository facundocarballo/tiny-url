import { TinyRepository } from "../ports/tiny";

export class TinyService {
  private repository: TinyRepository;

  constructor(repo: TinyRepository) {
    this.repository = repo;
  }

  async Create(bigUrl: string): Promise<string | undefined> {
    return this.repository.Create(bigUrl);
  }

  async Get(shortUrl: string): Promise<string | undefined> {
    return this.repository.Get(shortUrl);
  }
}
