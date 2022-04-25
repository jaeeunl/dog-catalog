import { useEffect, useState } from 'react';
import { IBreedDetails } from './common/types';
import { getBreeds, IGetBreedOutput } from './services';

export interface IUseGetBreeds {
    breeds: IBreedDetails[];
    error: boolean;
}

const parseResponse = (response: IGetBreedOutput[]): IBreedDetails[] => {
    return response.map((breed) => {
        const { id, url, breeds } = breed;
        const { 
            name,
            weight, 
            height, 
            life_span, 
            temperament, 
            bred_for, 
            breed_group,
        } = breeds[0];
        return {
            id,
            url,
            name,
            weight: weight.imperial,
            height: height.imperial,
            life_span,
            temperament,
            bred_for,
            breed_group, 
        }
    })
}

export const useGetBreeds = (): IUseGetBreeds => {
    const [breeds, setBreeds] = useState<IBreedDetails[]>([]);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const getDogBreeds = async () => {
            try {
                const response = await getBreeds();
                setBreeds(parseResponse(response));
                setError(false)
            } catch (e) {
                setBreeds([]);
                setError(true)
            }
        }
        getDogBreeds();
    }, [])
    return {
        breeds,
        error,
    }
}