interface UpdateExperienceCommandData {
  id: number;
  experience: string;
  year: number;
}

export class UpdateExperienceCommand {
  id: number;
  experience?: string;
  year?: number;
  constructor(data: UpdateExperienceCommandData) {
    if (data) {
      this.id = data.id;
      this.experience = data.experience;
      this.year = data.year;
    }
  }
}
