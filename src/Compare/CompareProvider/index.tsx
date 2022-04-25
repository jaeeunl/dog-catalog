import { 
    Dispatch,
    SetStateAction, 
    createContext, 
    useContext, 
    FC, 
    useState 
} from 'react';
import { IBreedDetails } from '../../common/types';

export interface ICompareContext {
    breedsToCompare: IBreedDetails[];
    setBreedsToCompare: Dispatch<SetStateAction<IBreedDetails[]>>;
} 

export const CompareContext = createContext<ICompareContext>({
    setBreedsToCompare: () => [],
    breedsToCompare: [],
});

export const CompareProvider: FC = ({ children }) => {
    const [breedsToCompare, setBreedsToCompare] = useState<IBreedDetails[]>([]);

    return (
        <CompareContext.Provider value={{ breedsToCompare, setBreedsToCompare }}>
            {children}
        </CompareContext.Provider>
    )
}

export const useCompareContext = () => {
    return useContext(CompareContext);
}
