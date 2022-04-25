import { FC, Key } from 'react';
import { 
    Cell, 
    Column,
    Row, 
    TableBody, 
    TableHeader, 
    TableView,
} from '@adobe/react-spectrum';
import { Details } from '../Details';
import { useCompareContext } from '../Compare/CompareProvider';
import { IBreedDetails } from '../common/types';

export interface IListProps {
    breeds: IBreedDetails[];
}

export const List: FC<IListProps> = ({ breeds }) => {
    const { setBreedsToCompare } = useCompareContext();
    const onClick = (keys: string | Set<Key>) => {
        if (typeof keys === 'string') {
            keys === 'all' ? setBreedsToCompare(breeds) : setBreedsToCompare([])
        } else {
            const selectedBreeds = breeds.filter((breed) => keys.has(breed.id))
            setBreedsToCompare(selectedBreeds)
        }
    }

    return (
        <>
            {breeds.length ? (    
                <TableView
                    onSelectionChange={(keys) => onClick(keys)}
                    aria-label='Dog breeds'
                    selectionMode='multiple'
                >
                    <TableHeader>
                        <Column>Name</Column>
                        <Column align='end'>Details</Column>
                    </TableHeader>
                    <TableBody>
                        {breeds.map((breed) => {
                            const { 
                                id, 
                                url, 
                                name, 
                                weight, 
                                height, 
                                life_span, 
                                breed_group, 
                                temperament, 
                                bred_for  } = breed;
                            return (
                                <Row key={id}>
                                    <Cell>{name}</Cell>
                                    <Cell>
                                        <Details 
                                            name={name}
                                            url={url}
                                            weight={weight}
                                            height={height}
                                            life_span={life_span}
                                            breed_group={breed_group}
                                            bred_for={bred_for}
                                            temperament={temperament}
                                        />
                                    </Cell>
                                </Row>
                            )
                        })}
 
                    </TableBody>
                </TableView>           
            ): null}
        </>
    )
}