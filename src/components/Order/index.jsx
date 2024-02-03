import { api } from '../../services/api';
import { Container } from "./styles";
import Swal from 'sweetalert2';



export function Order({ data, cancelMyOrder}) {
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
      }
    });
  };
    return (
      <Container>
        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt='Imagem do prato.' />
  
        <div>
          <h2>{data.name}</h2>
          <button onClick={showCancelConfirmation}>Cancelar seu pedido</button>
        </div>
      </Container>
    );
  }