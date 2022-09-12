import { addNewPet } from '@services/pets';
import { addPetSchema } from '@schemas/pets';
import { schemaValidator } from '@schemas/pets/index';

describe('should add new pet', () => {
  it('with just pet name', async () => {
    const petName = 'new pet';
    const { data, status } = await addNewPet(petName);
    expect(status).toEqual(200);
    expect(schemaValidator(addPetSchema(), data)).toEqual(true);
    expect(data.name).toEqual(petName);
  });
});
