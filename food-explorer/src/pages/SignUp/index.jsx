import {Container, Form, Brand } from './styles'
import { Link } from 'react-router-dom'; 
import {Button} from '../../components/Button'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section';
import brand from '../../assets/brand.svg'



export function SignUp (){
    return (
        <Container>
            <Brand>
             <img src={brand} alt='Logo'/>
            </Brand>

            <Form>
                <h2>Criar sua Conta</h2>

                <Section title='Seu nome'>
                    <Input
                    placeholder = 'Exemplo: Maria da Silva'
                    type = 'text'
                    />
                </Section>

                <Section title='Email'>
                    <Input
                    placeholder = 'Exemplo: exemplo@exemplo.com.br'
                    type = 'text'
                    />
                </Section>

                <Section title='Senha'>
                    <Input
                    placeholder = 'No mínimo 6 caracteres'
                    type = 'password'
                    />
                </Section>

                <Button title='Criar Conta'/>

                <Link to ='/'>
                    Já tenho uma conta
                </Link>

                </Form>
        </Container>
    )
}