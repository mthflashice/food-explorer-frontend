import { api } from '../../services/api';
import { Container } from "./styles";

export function Order({ data, cancelOrder}) {
    return (
      <Container>
        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt='Imagem do prato.' />
  
        <div>
          <h2>{data.name}</h2>
          <button onClick={() => cancelOrder(data.id)}>Cancelar seu pedido</button>

        </div>
      </Container>
    );
  }