import { FC } from 'react';
import {
    ActionButton,
    Button,
    ButtonGroup,
    Cell,
    Column,
    Content,
    Dialog,
    DialogTrigger,
    Divider,
    Heading,
    Row,
    TableBody,
    TableHeader,
    TableView,
    Image,
} from '@adobe/react-spectrum';
import { useCompareContext } from './CompareProvider';
import { IBreedDetails } from '../common/types';

const columns = [
    { name: 'Image', uid: 'url', width: 80 },
    { name: 'Name', uid: 'name', width: '15%' },
    { name: 'Weight (pounds)', uid: 'weight', width: 150 },
    { name: 'Height (inches)', uid: 'height', width: 150 },
    { name: 'Life Span', uid: 'life_span', width: 120 },
    { name: 'Temperament', uid: 'temperament', width: '23%' },
    { name: 'Bred for', uid: 'bred_for', width: '21%' },
];
export interface Map {
    [key: string]: string;
}

export const Compare: FC = () => {
    const { breedsToCompare } = useCompareContext();

    return (
        <DialogTrigger type='fullscreenTakeover'>
            <ActionButton
                alignSelf='start'
                flexShrink={0}
                isDisabled={breedsToCompare.length === 0}
            >
                Compare
            </ActionButton>
            {(close) => (
                <Dialog>
                    <Heading>Compare Breeds</Heading>
                    <Divider />
                    <Content>
                        <TableView
                            overflowMode="wrap"
                            aria-label="Compare breeds"
                        >
                            <TableHeader columns={columns}>
                                {column => (
                                    <Column
                                        key={column.uid}
                                        width={column.width}
                                    >
                                        {column.name}
                                    </Column>
                                )}
                            </TableHeader>
                            <TableBody items={breedsToCompare}>
                                {item => (
                                    <Row>
                                        {(columnKey: number | string) => {
                                            const breed = item as unknown as Map;
                                            const key = columnKey as string;
                                            return (
                                                key === 'url'
                                                    ? (
                                                        <Cell>
                                                            <Image objectFit='cover'
                                                                    width='size-500'
                                                                    height='size-500' 
                                                                    alt={breed.name} 
                                                                    src={breed[key]} 
                                                            />
                                                        </Cell>
                                                    )
                                                    :  (
                                                        <Cell>{breed[key]}</Cell>
                                                    )
                                            )
                                        }}
                                    </Row>
                                )}
                            </TableBody>
                        </TableView>
                    </Content>
                    <ButtonGroup>
                        <Button variant="secondary" onPress={close}>Close</Button>
                    </ButtonGroup>
                </Dialog>
            )}
        </DialogTrigger>
    )
}