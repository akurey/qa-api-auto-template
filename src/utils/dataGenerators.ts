import * as criptoJS from 'crypto-js';
import {faker} from '@faker-js/faker';

export function generateEmail(): string {
  return faker.internet.email();
}

export function generateName(): string {
  return faker.name.findName();
}
export function generateUUID(): string {
  return faker.datatype.uuid();
}

export function generateVerificationCode(): number {
  return faker.datatype.number(9999);
}
export function generatePastDate(): string {
  return faker.date.past().toLocaleDateString();
}

export function generatePassword(): string {
  const password = faker.internet.password();
  return criptoJS.SHA256(password).toString();
}
export function generateZipCode(): string {
  return faker.address.zipCode();
}

