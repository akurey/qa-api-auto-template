import { getPetById } from '@services/pets';
import { getPetSchema } from '@schemas/pets';
import { schemaValidator } from '@schemas/pets/index';

describe('should get pet', () => {
  it('by pet ID', async () => {
    const petId = 10;
    const { data, status } = await getPetById(petId);
    expect(status).toEqual(200);
    expect(schemaValidator(getPetSchema(), data)).toEqual(true);
    expect(data.id).toEqual(10);
  });
});
