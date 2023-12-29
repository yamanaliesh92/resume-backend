interface experienceDtoData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  experience: string;
  year: number;
}
export class ExperienceDto {
  id: number;
  experience: string;
  year: number;
  createdAt: Date;
  userId: number;
  updatedAt: Date;
  constructor(data: experienceDtoData) {
    if (data) {
      this.id = data.id;
      this.userId = data.userId;
      this.createdAt = data.createdAt;
      this.year = data.year;
      this.experience = data.experience;
    }
  }
}
