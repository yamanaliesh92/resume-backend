interface languageDtoData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  language: string;
  level: string;
}
export class languageDto {
  id: number;
  language: string;
  level: string;
  createdAt: Date;
  userId: number;
  updatedAt: Date;
  constructor(data: languageDtoData) {
    if (data) {
      this.id = data.id;
      this.userId = data.userId;
      this.createdAt = data.createdAt;
      this.level = data.level;
      this.language = data.language;
    }
  }
}
