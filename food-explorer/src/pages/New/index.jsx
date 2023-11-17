import { Container,Form, Image, Category } from "./styles";
import {Header} from '../../components/Header'
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { FoodItem } from "../../components/FoodItem";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

export function New(isNew){
    return(
        <Container>
            <Header isAdmin />

            <main>
                <Form>
                    <header>
                        <ButtonText>
                            <RxCaretLeft/>
                            voltar
                        </ButtonText>

                        {isNew?
                        <h1>Adicionar prato</h1>:
                        <h1>Editar prato</h1>
                        }
                    </header>
                    <div>
                        <Section title ='Imagem do Prato'>
                            <Image className="image">
                            <label htmlFor="image">
                                <FiUpload/>
                                <span>Selecione Imagem</span> 

                                <input 
                                id='image'
                                type="file" 
                                />  
                                </label>
                            </Image>
                        </Section>

                        <Section title = 'Nome'>
                            <input className="name"
                            placeholder="ex: Salada Ceasar"
                            type="text"
                            />
                        </Section>

                        <Section title="Categoria">
                            <Category className="category">
                                <label htmlFor="category">
                                    <select id ='category'>
                                        <option value='meal'>Refeição</option>
                                        <option value='desert'>Sobremesa</option>
                                        <option value='beverage'>Bebida</option>
                                    </select>
                                    <RiArrowDownSLine/>
                                </label>
                            </Category>
                        </Section>
                    </div>
               
        <div>
        <Section title='Ingredientes'>
            <div className="tags">
                <FoodItem value = 'Pão Naan'/>
                <FoodItem isNew placeholder = 'Adicionar'/>
            </div>
            </Section>

            <Section title='Preço'>
                <Input className='price'
                placeholder='R$ 00,00'
                type='number'
                />
            </Section>
        </div>
            
            
            <Section title='Descrição'>
                {isNew?
                    <Textarea placeholder ='Fale brevemente sobre o prato, seus ingredientes e composição'/> :
                    <Textarea placeholder ='A salada César é uma opção refrescante para o verão.'/>   
            }
            </Section>

            <div className="buttons">
                {isNew?
                <Button title='Salvar alteações' className='save' 
                disabled/>:
                <>
                <Button title='Excluir prato' className='delete'/>
                <Button title='Salvar alteações' className='save' 
                disabled/>


                </>

                
            }
            </div>


            </Form>
            </main>

            <Footer/>
            
        </Container>
    )

};