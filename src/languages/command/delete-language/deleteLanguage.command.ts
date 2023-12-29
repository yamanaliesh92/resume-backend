interface DeleteLanguageCommandData {
  id: number;
}

export class DeleteLanguageCommand {
  id: number;

  constructor(data: DeleteLanguageCommandData) {
    if (data) {
      this.id = data.id;
    }
  }
}
