interface DeleteEducationCommandData {
  id: number;
}

export class DeleteEducationCommand {
  id: number;

  constructor(data: DeleteEducationCommandData) {
    if (data) {
      this.id = data.id;
    }
  }
}
