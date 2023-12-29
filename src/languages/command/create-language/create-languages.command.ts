interface CreateLanguageCommandData {
  level: string;
  language: string;

  userId: number;
}
export class CreateLanguageCommand {
  level: string;
  language: string;
  userId: number;

  constructor(data: CreateLanguageCommandData) {
    if (data) {
      this.language = data.language;
      this.level = data.level;
      this.userId = data.userId;
    }
  }
}
