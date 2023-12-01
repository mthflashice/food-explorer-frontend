import {Container, Form, Brand } from './styles'
import {Button} from '../../components/Button'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section';
import brand from '../../assets/brand.svg'
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

export  function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');

    const {signIn} = useAuth();

    function handleSignIn(){
        signIn({email,password});
    }

    
    return(
        <Container>
            <Brand>
             <img src={brand} alt='Logo'/>
            </Brand>
            
            <Form>
                <h2>Faça seu login</h2>

                <Section title='Email'>
                    <Input
                    placeholder = 'Exemplo: exemplo@exemplo.com.br'
                    type = 'text'
                    onChange={e => setEmail(e.target.value)}
                    />
                </Section>

                <Section title='Senha'>
                    <Input
                    placeholder = 'No mínimo 6 caracteres'
                    type = 'password'
                    onChange={e => setPassword(e.target.value)}
                    />
                </Section>

                <Button title='Entrar' onClick={handleSignIn}/>

                <Link to ='/register'>
                    Criar uma conta
                </Link>
            </Form>
        </Container>
    );
}