import { AggregateRoot } from '@nestjs/cqrs';

interface experienceModelData {
  id: number;
  experience: string;
  year: number;
  createdAt: Date;
  userId: number;
  updatedAt: Date;
}

export class ExperienceModel extends AggregateRoot {
  #id: number;
  #createdAt: Date;
  #updatedAt: Date;
  #userId: number;
  #experience: string;
  #year: number;

  get id(): number {
    return this.#id;
  }

  get userId(): number {
    return this.#userId;
  }
  get year(): number {
    return this.#year;
  }

  get experience(): string {
    return this.#experience;
  }

  get createdAt(): Date {
    return this.#createdAt;
  }

  get updatedAt(): Date {
    return this.#updatedAt;
  }

  constructor(data: experienceModelData) {
    super();

    this.#id = data.id;
    this.#experience = data.experience;
    this.#year = data.year;
    this.#userId = data.userId;
    this.#createdAt = data.createdAt;
    this.#updatedAt = data.updatedAt;
  }
}
