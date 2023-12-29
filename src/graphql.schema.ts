
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    email: string;
    username: string;
    linkedIn: string;
    location: string;
    phoneNumber: string;
    about: string;
}

export interface CreateExperienceInput {
    experience: string;
    year: number;
}

export interface UpdateExperienceInput {
    id: number;
    experience?: Nullable<string>;
    year?: Nullable<number>;
}

export interface CreateLanguageInput {
    level: string;
    language: string;
}

export interface UpdateLanguageInput {
    id: number;
    level?: Nullable<string>;
    language?: Nullable<string>;
}

export interface UpdateEducationInput {
    id: number;
    title?: Nullable<string>;
    year?: Nullable<number>;
    university?: Nullable<string>;
}

export interface PayloadDeleteLanguage {
    id: string;
}

export interface PayloadDeleteEducation {
    id: string;
}

export interface PayloadDeleteExperience {
    id: string;
}

export interface PayloadGetOneLanguage {
    id: string;
}

export interface PayloadGetOneEducation {
    id: string;
}

export interface PayloadGetOneUser {
    id: string;
}

export interface CreateEductionInput {
    title: string;
    university: string;
    year: number;
}

export interface Eduction {
    id: string;
    title: string;
    year: number;
    university: string;
    userId: number;
}

export interface Experience {
    id: number;
    experience: string;
    year: number;
    userId: number;
}

export interface Language {
    id: string;
    userId: number;
    language: string;
    year: number;
    level: string;
}

export interface User {
    id: string;
    email: string;
    username: string;
    location: string;
    linkedIn: string;
    phoneNumber: string;
    about: string;
    eductions?: Nullable<Nullable<Eduction>[]>;
    languages?: Nullable<Nullable<Language>[]>;
    experiences?: Nullable<Nullable<Experience>[]>;
}

export interface IMutation {
    createUser(createUserInput?: Nullable<CreateUserInput>): Nullable<string> | Promise<Nullable<string>>;
    createLanguage(data?: Nullable<CreateLanguageInput>): Nullable<string> | Promise<Nullable<string>>;
    createExperience(data?: Nullable<CreateExperienceInput>): Nullable<string> | Promise<Nullable<string>>;
    deleteLanguage(payload?: Nullable<PayloadDeleteLanguage>): Nullable<string> | Promise<Nullable<string>>;
    updateLanguage(payload?: Nullable<UpdateLanguageInput>): Nullable<string> | Promise<Nullable<string>>;
    createEduction(data?: Nullable<CreateEductionInput>): Nullable<string> | Promise<Nullable<string>>;
    deleteEducation(payload?: Nullable<PayloadDeleteEducation>): Nullable<string> | Promise<Nullable<string>>;
    deleteExperience(payload?: Nullable<PayloadDeleteExperience>): Nullable<string> | Promise<Nullable<string>>;
    updateEducation(payload?: Nullable<UpdateEducationInput>): Nullable<string> | Promise<Nullable<string>>;
    updateExperience(payload?: Nullable<UpdateExperienceInput>): Nullable<string> | Promise<Nullable<string>>;
}

export interface IQuery {
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    languages(): Nullable<Nullable<Language>[]> | Promise<Nullable<Nullable<Language>[]>>;
    getUser(): Nullable<User> | Promise<Nullable<User>>;
    getOneLanguages(payload?: Nullable<PayloadGetOneLanguage>): Nullable<Language> | Promise<Nullable<Language>>;
    getOneEducation(payload?: Nullable<PayloadGetOneEducation>): Nullable<Eduction> | Promise<Nullable<Eduction>>;
}

type Nullable<T> = T | null;
