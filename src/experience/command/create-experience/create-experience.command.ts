interface CreateExperienceCommandData {
  experience: string;
  year: number;

  userId: number;
}
export class CreateExperienceCommand {
  experience: string;
  year: number;
  userId: number;

  constructor(data: CreateExperienceCommandData) {
    if (data) {
      this.experience = data.experience;
      this.year = data.year;
      this.userId = data.userId;
    }
  }
}
