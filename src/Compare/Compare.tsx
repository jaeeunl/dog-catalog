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

export const Compare: FC = () => {
    const { breedsToCompare } = useCompareContext();

    return (
        <DialogTrigger type='fullscreenTakeover'>
            <ActionButton 
                alignSelf="start" 
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
                            aria-label="Compare breeds"
                        >
                            <TableHeader>
                                <Column>Image</Column>
                                <Column>Name</Column>
                                <Column>Weight</Column>
                                <Column>Height</Column>
                                <Column>Life Span</Column>
                                <Column>Bred for</Column>
                            </TableHeader>
                            <TableBody>
                                {breedsToCompare.map((breed) => {
                                    const { 
                                        id,
                                        name, 
                                        url, 
                                        bred_for, 
                                        weight, 
                                        height, 
                                        life_span, 
                                    } = breed; 
                                    return (
                                        <Row key={id}>
                                            <Cell>
                                                <Image 
                                                    alt={name}
                                                    src={url} 
                                                    objectFit='cover' 
                                                    width='size-500' 
                                                    height='size-500'
                                                />
                                            </Cell>
                                            <Cell>{name}</Cell>
                                            <Cell>{weight}</Cell>
                                            <Cell>{height}</Cell>
                                            <Cell>{life_span}</Cell>
                                            <Cell>{bred_for}</Cell>
                                        </Row>
                                    )
                                })}

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