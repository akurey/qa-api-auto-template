import Ajv, { AnySchema } from 'ajv';
export * from './getPet';
export * from './addPet';

const ajv = new Ajv({ allErrors: true });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function schemaValidator(schema: AnySchema, data: any): boolean {
  const validate = ajv.compile(schema);
  const validateData = validate(data);
  if (validateData) {
    return true;
  }
  console.log(validate.errors);
  return false;
}
