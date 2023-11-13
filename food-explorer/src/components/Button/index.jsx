import {Container} from './styles'
import {TbReceipt} from 'react-icons/tb'

export function Button({title, loading=false,isCustomer, ...rest}){
    return(
        <Container
            type= 'button'
            disabled={loading}
            {...rest}
            >
             {isCustomer &&  <TbReceipt size={32}/>}
             {loading? 'carregando':title}
             {isCustomer && <span>{rest.orderCount}</span>}
        </Container>
    );
};