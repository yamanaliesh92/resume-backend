interface CreateLanguagesEntityDtoData {
  language: string;
  userId: number;
  level: string;
}

export class CreateLanguagesEntityDto {
  language: string;
  level: string;
  userId: number;
  constructor(data: CreateLanguagesEntityDtoData) {
    if (data) {
      this.language = data.language;
      this.level = data.level;
      this.userId = data.userId;
    }
  }
}
