import{Container} from './styles'
import {Button} from '../../components/Button'
import { Input } from '../../components/Input'

export  function SignIn(){
    return(
        <Container>
            <Input placeholder= 'Exemple: exemplo@exemplo.com.br'/>
            <Input placeholder= 'Mínimo de 6 caracteres'/>

            <Button title='Entrar'/>
        </Container>
    );
}