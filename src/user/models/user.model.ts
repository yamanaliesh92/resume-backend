import { AggregateRoot } from '@nestjs/cqrs';

interface UserModelData {
  id: number;
  email: string;
  linkedIn: string;
  about: string;
  username: string;
  location: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserModel extends AggregateRoot {
  #id: number;
  #createdAt: Date;
  #updatedAt: Date;
  #email: string;
  #linkedIn: string;
  #about: string;
  #username: string;
  #location: string;
  #phoneNumber: string;

  get id(): number {
    return this.#id;
  }

  get email(): string {
    return this.#email;
  }

  get linkedIn(): string {
    return this.#linkedIn;
  }

  get location(): string {
    return this.#location;
  }

  get about(): string {
    return this.#about;
  }

  get username(): string {
    return this.#username;
  }

  get phoneNumber(): string {
    return this.#phoneNumber;
  }

  get createdAt(): Date {
    return this.#createdAt;
  }

  get updatedAt(): Date {
    return this.#updatedAt;
  }

  constructor(data: UserModelData) {
    super();

    this.#id = data.id;
    this.#about = data.about;
    this.#email = data.email;
    this.#location = data.location;
    this.#username = data.username;
    this.#createdAt = data.createdAt;
    this.#updatedAt = data.updatedAt;
  }
}
