import { FC } from 'react';
import { 
    ActionButton, 
    Button, 
    ButtonGroup,
    Content,
    Dialog, 
    DialogTrigger, 
    Divider, 
    Image,
    Heading,
    Flex,
    View,
} from '@adobe/react-spectrum';
import { IBreedDetails } from '../common/types';
import { ReactComponent as OpenIcon } from './images/Smock_OpenIn_18_N.svg';

export interface IBreedDetailsProps extends Omit<IBreedDetails, 'id'> {}

export const Details: FC<IBreedDetailsProps> = ({
  name,
  weight,
  height,
  life_span,
  breed_group,
  bred_for,
  temperament,
  url,
}) => {
  return (
    <DialogTrigger>
      <ActionButton isQuiet>
        <OpenIcon />
      </ActionButton>
      {(close) => (
        <Dialog>
          <Heading>{name}</Heading>
          <Divider />
          <Content>
            <Flex gap='size-400'>
              <View flexBasis='50%'>
                <Image alt={name} src={url} objectFit='cover' />
              </View>
              <View flexBasis='50%'>
                <p><b>Weight</b>: {weight} lbs</p>
                <p><b>Height</b>: {height} inches</p>
                <p><b>Life Span</b>: {life_span}</p>
                <p><b>Breed Group</b>: {breed_group}</p>    
                <p><b>Bred for</b>: {bred_for}</p>   
                <p><b>Temperament</b>: {temperament}</p>
              </View>
            </Flex>       
          </Content>
          <ButtonGroup>
            <Button variant='secondary' onPress={close}>Close</Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
  )
}
