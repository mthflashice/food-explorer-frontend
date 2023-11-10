import { Container } from "./styles";
import {Header} from '../../components/Header'
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { FoodItem } from "../../components/FoodItem";

export function New(){
    return(
        <Container>
            <Header isAdmin />

            <Section title='Ingredientes'>
                <FoodItem value = 'Pão Naan'/>
                <FoodItem isNew placeholder = 'Adicionar'/>
            </Section>
            
            <Section title='Descrição'>
            <Textarea placeholder ='Fale brevemente sobre o prato, seus ingredientes e composição'/>
            </Section>
            
        </Container>
    )

};