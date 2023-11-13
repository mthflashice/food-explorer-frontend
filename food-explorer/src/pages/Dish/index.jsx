import { Container } from "./styles";
import { Header } from "../../components/Header";
import {Footer} from '../../components/Footer'
import { Tag } from "../../components/Tag";

export function Dish(){
    return (
        <Container>
            <Header/>

            <Tag title='alface'/>
            <Tag title='cebola'/>

            <Footer/>
        </Container>
    );
}