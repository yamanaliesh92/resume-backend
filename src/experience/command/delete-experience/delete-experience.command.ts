interface DeleteExperienceCommandData {
  id: number;
}

export class DeleteExperienceCommand {
  id: number;

  constructor(data: DeleteExperienceCommandData) {
    if (data) {
      this.id = data.id;
    }
  }
}
