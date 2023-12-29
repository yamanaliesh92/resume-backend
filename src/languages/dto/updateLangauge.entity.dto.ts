interface UpdateLanguagesEntityDtoData {
  language: string;
  userId: number;
  level: string;
}

export class UpdateLanguagesEntityDto {
  language?: string;
  level?: string;

  constructor(data: UpdateLanguagesEntityDtoData) {
    if (data) {
      this.language = data.language;
      this.level = data.level;
    }
  }
}
