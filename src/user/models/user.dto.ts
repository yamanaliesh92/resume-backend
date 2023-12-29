interface UserDtoData {
  id: number;
  email: string;
  createdAt: Date;
  about: string;
  username: string;
  location: string;
  phoneNumber: string;
  linkedIn: string;
  updatedAt: Date;
}
export class UserDto {
  id: number;
  email: string;
  linkedIn: string;
  about: string;
  username: string;
  location: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(data: UserDtoData) {
    if (data) {
      this.id = data.id;
      this.createdAt = data.createdAt;
      this.email = data.email;
      this.location = data.location;
      this.linkedIn = data.linkedIn;
      this.phoneNumber = data.phoneNumber;
      this.updatedAt = data.updatedAt;
      this.username = data.username;
      this.about = data.about;
    }
  }
}
