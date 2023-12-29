interface CreateEducationEntityDtoData {
  title: string;
  university: string;
  userId: number;

  year: number;
}

export class CreateEducationEntityDto {
  title: string;
  year: number;
  university: string;
  userId: number;
  constructor(data: CreateEducationEntityDtoData) {
    if (data) {
      this.title = data.title;
      this.userId = data.userId;
      this.year = data.year;
      this.university = data.university;
    }
  }
}
