interface GetUserCommandData {
  id: number;
}

export class GetUserCommand {
  id: number;

  constructor(data: GetUserCommandData) {
    if (data) {
      this.id = data.id;
    }
  }
}
