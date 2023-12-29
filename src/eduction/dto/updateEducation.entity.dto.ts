interface UpdateEducationEntityDtoData {
  title: string;
  university: string;
  year?: number;
}

export class UpdateEducationEntityDto {
  title?: string;
  university?: string;
  year?: number;

  constructor(data: UpdateEducationEntityDtoData) {
    if (data) {
      this.title = data.title;
      this.year = data.year;
      this.university = data.university;
    }
  }
}
