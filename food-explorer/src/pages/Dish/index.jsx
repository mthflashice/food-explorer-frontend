import { Container,Content } from "./styles";
import {RxCaretLeft} from 'react-icons/rx'
import { Header } from "../../components/Header";
import {Footer} from '../../components/Footer'
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { NumberPicker } from "../../components/NumberPicker";
import { Button } from "../../components/Button";

export function Dish(isAdmin){
    return (
        <Container>
            {isAdmin?<Header isAdmin/>: <Header/>}
           
           <main>
            <header>
            <ButtonText>
                <RxCaretLeft/>
                voltar
            </ButtonText>
            </header>
         
        <Content>
            <img src="../../../src/assets/salada-ravanello.png.png" alt="Salada Ravanello"/>

            <div>
                <h1>Salada Ravenello</h1>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

                <section>
                    <Tag title='alface'/>
                    <Tag title='cebola'/>
                    <Tag title='pão naan'/>
                    <Tag title='pepino'/>
                    <Tag title='rabanete'/>
                    <Tag title='tomate'/>
                </section>

                <div className="buttons">
                    {isAdmin?
                    <Button title='Editar prato' className='edit'/>:
                    <>
                    <NumberPicker/>
                    <Button title='Incluir R$ 25,00'  className='include'/>
                    </>}
                </div>
            </div>
        </Content>
           

                </main>
            <Footer/>
        </Container>
       
    );
}