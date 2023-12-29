import { AggregateRoot } from '@nestjs/cqrs';

interface IEducation {
  id: number;
  university: string;
  userId: number;
  createdAt: Date;
  title: string;
  year: number;
  updatedAt: Date;
}

export class EducationModels extends AggregateRoot {
  #id: number;
  #createdAt: Date;
  #updatedAt: Date;
  #title: string;
  #university: string;
  #year: number;
  #userId: number;

  get id(): number {
    return this.#id;
  }

  get year(): number {
    return this.#year;
  }

  get title(): string {
    return this.#title;
  }

  get university(): string {
    return this.#university;
  }

  get userId(): number {
    return this.#userId;
  }

  get createdAt(): Date {
    return this.#createdAt;
  }

  get updatedAt(): Date {
    return this.#updatedAt;
  }

  constructor(data: IEducation) {
    super();
    this.#id = data.id;
    this.#title = data.title;
    this.#userId = data.userId;
    this.#year = data.year;
    this.#university = data.university;
    this.#createdAt = data.createdAt;
    this.#updatedAt = data.updatedAt;
  }
}
