import {Container} from './styles'
import {TbReceipt} from 'react-icons/tb'
import {useMediaQuery} from 'react-responsive'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Button({title, loading=false,isCustomer, ...rest}){

    const [orderCount, setOrderCount] = useState(0);
    const navigate = useNavigate();

    const $isDesktop =useMediaQuery({minWidth:1024});

    function handleOrders() {
        console.log('Pedido recebido!');
        setOrderCount((prevCount) => prevCount + 1);
        navigate('/myorders');
    }
    
    return(
        <Container
            type= 'button'
            disabled={loading}
            onClick={handleOrders}
            {...rest}
            >
             {isCustomer &&  <TbReceipt size={'3.2rem'}/>}
             {loading? 'carregando':title}
             {isCustomer && <span>{$isDesktop ? `(${orderCount})` : orderCount}</span>
}
    </Container>
    );
};