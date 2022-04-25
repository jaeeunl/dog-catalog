export interface IMetrics {
    imperial: string;
    metric: string;
}

export interface IBreed {
    id: string,
    name: string,
    weight:  IMetrics,
    height: IMetrics,
    life_span: string,
    breed_group: string,
    bred_for: string;
    temperament: string;
}

export interface IBreedDetails extends Omit<IBreed, | 'weight' | 'height'> {
    url: string;
    weight: string;
    height: string;
}