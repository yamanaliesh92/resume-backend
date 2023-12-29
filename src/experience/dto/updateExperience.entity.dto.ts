interface UpdateExperienceEntityDtoData {
  experience: string;

  year: number;
}

export class UpdateLanguagesEntityDto {
  experience?: string;
  year?: number;

  constructor(data: UpdateExperienceEntityDtoData) {
    if (data) {
      this.experience = data.experience;
      this.year = data.year;
    }
  }
}
