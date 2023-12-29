interface UpdateLanguageCommandData {
  id: number;
  language?: string;
  level?: string;
}

export class UpdateLanguageCommand {
  id: number;
  language?: string;
  level?: string;
  constructor(data: UpdateLanguageCommandData) {
    if (data) {
      this.id = data.id;
      this.language = data.language;
      this.level = data.level;
    }
  }
}
