export interface IAddPet {
  id: number;
  category: ICathegory;
  name: string;
  photoUrls: Array<string>;
  tags: Array<ITag>;
  status: string;
}

export interface ICathegory {
  id: number;
  name: string;
}
export interface ITag {
  id: number;
  name: string;
}
