import { api } from '../../services/api';
import React, { useState } from 'react';
import { Container } from "./styles";
import Swal from 'sweetalert2';
import { NumberPicker } from '../NumberPicker';
import {Button} from '../Button'

export function Order({ data, cancelMyOrder, setOrderCount, orderCount, updateTotalPrice  }) {
  const [quantity, setQuantity] = useState(data.quantity || 1);
  const [totalPrice, setTotalPrice] = useState(data.price * quantity);

  const showCancelConfirmation = () => {
    Swal.fire({
      title: 'Cancelar Pedido',
      text: 'Você tem certeza que deseja cancelar seu pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, cancelar pedido!',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed) {
        // Se o usuário clicar em "Sim, cancelar!", chama a função para cancelar o pedido
        cancelMyOrder(data.id);
        setOrderCount((prevCount) => prevCount - 1);
      }
    });
  };
  const handleQuantityChange = (newQuantity) => {
    const newTotalPrice = data.price * newQuantity;
    setQuantity(newQuantity);
    setTotalPrice(newTotalPrice);
  };

  
  const handleUpdate = () => {
    updateTotalPrice(totalPrice);
    // Handle the logic for updating the order here
    console.log("Atualizado")
    handleQuantityChange(quantity);
  };


  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${data.image}`} alt='Imagem do prato.' />
  
      <div>
        <h2>{data.name}</h2>
        <button onClick={showCancelConfirmation}>Cancelar Pedido</button>
        <p className="price-total">{`R$${totalPrice.toFixed(2).replace(".", ",")}`}</p>
        <p>Quantidade: {quantity}</p>
        <NumberPicker number={quantity} setNumber={setQuantity} />
        <Button 
        title='atualizar'
        onClick={handleUpdate} 
        />
      </div>
    </Container>
  );
}