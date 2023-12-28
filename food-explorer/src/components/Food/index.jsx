import {BiPencil} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'
import {RxCaretRight} from 'react-icons/rx'
import { useMediaQuery } from 'react-responsive'
import theme from '../../styles/theme'
import { Container, Title, Order } from './styles'
import {NumberPicker} from '../../components/NumberPicker'
import { Button } from '../../components/Button'
import { api } from '../../services/api';
import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';



export function Food({ data, isAdmin, isFavorite, updateFavorite, handleDetails, user_id, ...rest }){
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    const params = useParams();
    const navigate = useNavigate();
  
    const [number, setNumber] = useState(1);
    const [cartId, setCartId] = useState(null);


  const handleFavorite = async () => {
    try {
      if (isFavorite) {
        updateFavorite(true, data.id);
      } else {
        updateFavorite(false, data.id);
      }
    } catch (error) {
      console.log('Erro ao atualizar favoritos:', error);
    }
  };

  function handleEdit() {
    navigate(`/edit/${params.id}`);
  }

  async function handleInclude() {
    try{
      const cartItem = {
        dish_id: data.id,
        name: data.name,
        quantity: number,
      };

      const response = await api.get('/carts', { params: { created_by: user_id } });
      const cart = response.data[0];

      if (cart) {
        await api.patch(`/carts/${cart.id}`, { cart_items: [cartItem] });
      } else {
        const createResponse = await api.post('/carts', { cart_items: [cartItem], created_by: user_id });
        const createdCart = createResponse.data;

        setCartId(createdCart.id);
      }

      alert('Prato adicionado ao carrinho!');

      await api.post('/carts', { cart_items: [cartItem] })
      alert('Prato adicionado ao carrinho!');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível adicionar ao carrinho.');
        console.log('Erro ao adicionar ao carrinho:', error);
      }
    }
  }
    
    return(
        <Container {...rest} isAdmin={isAdmin}>
            {isAdmin? (
            <BiPencil size={'2.4rem'}onClick={handleEdit}/>
            ): (
                <FiHeart
                size={"2.4rem"}
                fill={isFavorite ? theme.COLORS.GRAY_200 : undefined}
                onClick={handleFavorite}
              
            />
            )}

            <img 
            src={`${api.defaults.baseURL}/files/${data.image}`} 
            alt='Imagem do prato.'
            onClick={() => handleDetails(data.id)} 
            />

            <Title>
                <h2>{data.name}</h2>
                <RxCaretRight size={isDesktop?'2.4rem':'1.4rem'}/>
            </Title>

            {isDesktop && <p>{data.description}</p>}
            <span>R${data.price}</span>

            {!isAdmin &&
            <Order>
                <NumberPicker number={number} setNumber={setNumber}/>
                <Button title='incluir' onClick={handleInclude}/>
                </Order>
                }

        </Container>
    );
}