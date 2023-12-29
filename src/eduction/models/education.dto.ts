interface EductionDtoData {
  id: number;
  university: string;
  userId: number;
  createdAt: Date;
  title: string;
  year: number;
  updatedAt: Date;
}
export class EductionDto {
  id: number;
  university: string;
  userId: number;
  year: number;
  createdAt: Date;
  title: string;
  updatedAt: Date;
  constructor(data: EductionDtoData) {
    if (data) {
      this.id = data.id;
      this.createdAt = data.createdAt;
      this.title = data.title;
      this.userId = data.userId;
      this.year = data.year;
      this.updatedAt = data.updatedAt;
      this.university = data.university;
    }
  }
}
