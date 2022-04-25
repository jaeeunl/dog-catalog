import { Flex } from '@adobe/react-spectrum'
import './App.css';
import { List } from './List';
import { Compare } from './Compare';
import { CompareProvider } from './Compare/CompareProvider';
import { useGetBreeds } from './useGetBreeds';

const App = () => {
  const { breeds, error } = useGetBreeds();

  return (
      <CompareProvider>
        <Flex width='960px' direction='column' gap='size-150' marginX='auto'>
          {error 
            ? <p>Sorry, there was an error loading the data.</p>
            : (
              <>
                <Compare/>
                <List breeds={breeds}/>
              </>
            ) }        

        </Flex>
      </CompareProvider>
  );
}

export default App;
