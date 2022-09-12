import { ADD_NEW_PET, GET_PET_BY_ID } from '@constants/api/pets';
import { get, post } from '@utils/axiosRequests';

import { AxiosResponse } from 'axios';
import { addPetPayload } from '@mocks/pets/add';

export async function getPetById(petId: number): Promise<AxiosResponse<any>> {
  const response = await get(GET_PET_BY_ID(petId));
  return response;
}

export async function addNewPet(petName: string): Promise<AxiosResponse<any>> {
  const response = await post(ADD_NEW_PET, addPetPayload(petName));
  return response;
}
