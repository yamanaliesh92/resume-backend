interface CreateExperienceEntityDtoData {
  experience: string;
  userId: number;
  year: number;
}

export class CreateExperienceEntityDto {
  year: number;
  experience: string;
  userId: number;
  constructor(data: CreateExperienceEntityDtoData) {
    if (data) {
      this.experience = data.experience;
      this.userId = data.userId;
      this.year = data.year;
    }
  }
}
