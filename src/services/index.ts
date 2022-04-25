import { IBreed } from "../common/types";

export interface IGetBreedOutput {
    id: string,
    url: string,
    width: number,
    height: number,
    mime_type: string,
    breeds: IBreed[],
    categories: string[]
}

export const getBreeds = async (): Promise<IGetBreedOutput[]> => {
    try {
        const response = await fetch(`https://api.thedogapi.com/v1/images/search?size=small&order=ASC&mime_types=jpg&format=json&has_breeds=true&limit=15`, {
            headers: {
                'content-type': 'application/json',
            }
        });
        return response.json();
    } catch(e) {
        throw e;
    }
}