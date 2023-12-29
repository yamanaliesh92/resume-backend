interface UpdateEducationCommandData {
  id: number;
  university: string;
  year?: number;
  title: string;
}

export class UpdateEducationCommand {
  id: number;
  university?: string;
  year?: number;
  title?: string;
  constructor(data: UpdateEducationCommandData) {
    if (data) {
      this.id = data.id;
      this.title = data.title;
      this.year = data.year;
      this.university = data.university;
    }
  }
}
