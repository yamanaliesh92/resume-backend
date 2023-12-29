interface GetLanguageCommandData {
  id: number;
}

export class GetLanguageCommand {
  id: number;

  constructor(data: GetLanguageCommandData) {
    if (data) {
      this.id = data.id;
    }
  }
}
