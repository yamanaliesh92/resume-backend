interface CreateUserEntityDtoData {
  username: string;
  linkedIn: string;
  email: string;
  location: string;
  phoneNumber: string;
  about: string;
}

export class CreateUserEntityDto {
  username: string;
  linkedIn: string;
  phoneNumber: string;
  about: string;
  location: string;
  email: string;
  constructor(data: CreateUserEntityDtoData) {
    if (data) {
      this.email = data.email;
      this.location = data.location;
      this.linkedIn = data.linkedIn;
      this.username = data.username;
      this.about = data.about;
      this.phoneNumber = data.phoneNumber;
    }
  }
}
