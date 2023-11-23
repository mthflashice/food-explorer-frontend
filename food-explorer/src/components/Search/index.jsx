import {Container} from './styles'
import {FiSearch} from 'react-icons/fi'

import {Input} from '../../components/Input'

export function Search (){
    return(
        <Container>
            <Input
             placeholder ='Busque por pratos ou ingredientes'
             icon={FiSearch}
            />
        </Container> 
    );
}