interface CreateUserCommandData {
  email: string;
  linkedIn: string;
  location: string;
  username: string;
  phoneNumber: string;
  about: string;
}
export class CreateUserCommand {
  email: string;
  linkedIn: string;
  location: string;
  username: string;
  phoneNumber: string;
  about: string;

  constructor(data: CreateUserCommandData) {
    if (data) {
      this.about = data.about;
      this.email = data.email;
      this.linkedIn = data.linkedIn;
      this.location = data.location;
      this.username = data.username;
      this.phoneNumber = data.phoneNumber;
    }
  }
}
