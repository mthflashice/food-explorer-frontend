import { api } from '../../services/api';
import { Container } from "./styles";

export function Order({ data}) {
    return (
      <Container>
        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt='Imagem do prato.' />
  
        <div>
          <h2>{data.name}</h2>
          
        </div>
      </Container>
    );
  }