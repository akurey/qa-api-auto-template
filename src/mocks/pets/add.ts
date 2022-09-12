import { IAddPet } from '@interfaces/pets';

export const addPetPayload = (petName: string): IAddPet => ({
  id: 0,
  category: {
    id: 11,
    name: 'Perro',
  },
  name: petName,
  photoUrls: [`${petName} photo`],
  tags: [
    {
      id: 12,
      name: 'Raza',
    },
  ],
  status: 'available',
});
