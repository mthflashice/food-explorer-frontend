import { Container } from "./styles";
import { Header } from "../../components/Header";
import {Footer} from '../../components/Footer'
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import {RxCaretLeft} from 'react-icons/rx'

export function Dish(){
    return (
        <Container>
            <Header/>
            <ButtonText>
                <RxCaretLeft/>
                voltar
            </ButtonText>

            <Tag title='alface'/>
            <Tag title='cebola'/>

            <Footer/>
        </Container>
    );
}