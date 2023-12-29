import { AggregateRoot } from '@nestjs/cqrs';

interface languageModelData {
  id: number;
  language: string;
  level: string;
  createdAt: Date;
  userId: number;
  updatedAt: Date;
}

export class languageModel extends AggregateRoot {
  #id: number;
  #createdAt: Date;
  #updatedAt: Date;
  #userId: number;
  #language: string;
  #level: string;

  get id(): number {
    return this.#id;
  }

  get userId(): number {
    return this.#userId;
  }
  get level(): string {
    return this.#level;
  }

  get language(): string {
    return this.#language;
  }

  get createdAt(): Date {
    return this.#createdAt;
  }

  get updatedAt(): Date {
    return this.#updatedAt;
  }

  constructor(data: languageModelData) {
    super();

    this.#id = data.id;
    this.#language = data.language;
    this.#level = data.level;
    this.#userId = data.userId;
    this.#createdAt = data.createdAt;
    this.#updatedAt = data.updatedAt;
  }
}
