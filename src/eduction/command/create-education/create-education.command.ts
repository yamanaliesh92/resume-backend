interface CreateEducationCommandData {
  title: string;
  university: string;
  year: number;
  userId: number;
}
export class CreateEducationCommand {
  title: string;
  year: number;
  university: string;
  userId: number;

  constructor(data: CreateEducationCommandData) {
    if (data) {
      this.title = data.title;
      this.userId = data.userId;
      this.university = data.university;
      this.year = data.year;
    }
  }
}
