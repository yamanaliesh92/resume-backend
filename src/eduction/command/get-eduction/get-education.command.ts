interface GetEducationCommandData {
  id: number;
}

export class GetEducationCommand {
  id: number;

  constructor(data: GetEducationCommandData) {
    if (data) {
      this.id = data.id;
    }
  }
}
