import { Flex, View } from '@adobe/react-spectrum'
import { List } from './List';
import { Compare } from './Compare';
import { CompareProvider } from './Compare/CompareProvider';
import { useGetBreeds } from './useGetBreeds';

const App = () => {
  const { breeds, error } = useGetBreeds();

  return (
      <CompareProvider>
        <View paddingX='size-200'>
          <Flex width='960px' height='size-6000' direction='column' gap='size-150' marginX='auto' marginY='size-500'>
            {error 
              ? <p>Sorry, there was an error loading the data.</p>
              : (
                <>
                  <Compare/>
                  <List breeds={breeds}/>
                </>
              ) }        

          </Flex>
        </View>
      </CompareProvider>
  );
}

export default App;
