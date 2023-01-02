import { addNewPet } from "@services/pets";
import { addPetSchema } from "@schemas/pets";
import { schemaValidator } from "@schemas/pets/index";
import { faker } from "@faker-js/faker";

describe("should add new pet", () => {
  it("with just pet name", async () => {
    console.log("holis");
    const petName = faker.name.firstName();
    const { data, status } = await addNewPet(petName);
    expect(status).toEqual(200);
    expect(schemaValidator(addPetSchema(), data)).toEqual(true);
    expect(data.name).toEqual(petName);
  });
});
