interface GetExperienceCommandData {
  id: number;
}

export class GetExperienceCommand {
  id: number;

  constructor(data: GetExperienceCommandData) {
    if (data) {
      this.id = data.id;
    }
  }
}
