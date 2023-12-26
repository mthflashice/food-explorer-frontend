import { Container,Form, Image, Category } from "./styles";
import {Header} from '../../components/Header'
import { Menu } from "../../components/Menu"; ///
import { Section } from "../../components/Section";
import { FoodItem } from "../../components/FoodItem";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from 'react'; 
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function New(isNew, isAdmin){
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState([]);

    const navigate = useNavigate();

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImage(file);
        setFileName(file.name);
    }

    function handleAddTag() {
        setTags((prevState)=>[...prevState, newTag]);
        setNewTag('');
    }

    function handleRemoveTag(deleted){
        setTags((prevState)=>prevState.filter((tag)=>tag !==deleted));
    }

    async function handleNewDish() {
        if (!image) {
            return alert('Selecione a imagem do prato.');
          }
      
          if (!name) {
            return alert('Digite o nome do prato.');
          }
      
          if (!category) {
            return alert('Selecione a categoria do prato.');
          }
      
          if (tags.length === 0) {
            return alert('Informe pelo menos um ingrediente do prato.');
          }
      
          if (newTag) {
            return alert(
              'Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.'
            );
          }
      
          if (!price) {
            return alert('Digite o preço do prato.');
          }
      
          if (!description) {
            return alert('Digite a descrição do prato.');
          }
      
              const formData = new FormData();
          formData.append('image', image);
          formData.append('name', name);
          formData.append('category', category);
          formData.append('price', price);
          formData.append('description', description);
      
          formData.append('ingredients', JSON.stringify(tags));
      
          try {
            await api.post('/dishes', formData);
            alert('Prato cadastrado com sucesso!');
            navigate('/');
          } catch (error) {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert('Não foi possível cadastrar o prato.');
            }
          }

    }

    return(
        <Container>
            {!isDesktop &&
            <Menu 
            isAdmin={isAdmin}
            isDisabled={true} 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen}
            
            />
            }

            <Header 
            isAdmin={isAdmin} 
            isDisabled={true}
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} />

            <main>
                <Form>
                    <header>
                        <ButtonText>
                            <RxCaretLeft/>
                            voltar
                        </ButtonText>

                       <h1>{isNew ? 'Adicionar prato' : 'Editar prato'}</h1>
                    </header>

                    <div>
                        <Section title ='Imagem do Prato'>
                            <Image className="image">
                            <label htmlFor="image">
                                <FiUpload size={'2.4rem'}/>
                                <span>{fileName||'Selecione Imagem'}</span> 

                                <input 
                                id='image'
                                type="file" 
                                onChange={handleImageChange} 
                                />  
                                </label>
                            </Image>
                        </Section>

                        <Section title = 'Nome'>
                            <input className="name"
                            placeholder="Ex.: Salada Ceasar"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                        </Section>

                        <Section title="Categoria">
                            <Category className="category">
                                <label htmlFor="category">
                                    <select 
                                    id ='category'
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    >
                                        <option value=''>Selecionar</option>
                                        <option value='meal'>Refeição</option>
                                        <option value='desert'>Sobremesa</option>
                                        <option value='beverage'>Bebida</option>
                                    </select>
                                    <RiArrowDownSLine size={'2.4rem'}/>
                                </label>
                            </Category>
                        </Section>
                    </div>
               
        <div>
        <Section title='Ingredientes'>
            <div className="tags">
                {
                  tags.map((tag, index) => (
                    <FoodItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }

                <FoodItem
                isNew
                placeholder='Adicionar'
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
                />
            </div>
            </Section>

            <Section title='Preço'>
                <Input className='price'
                placeholder='R$ 00,00'
                type='number'
                value={price}
                onChange={e => setPrice(e.target.value)}
                />
            </Section>
        </div>
            
            
            <Section title='Descrição'>
                    <Textarea
                        placeholder ='Fale brevemente sobre o prato, seus ingredientes e composição' 
                        onChange={(e) => setDescription(e.target.value)}
                    />   
            
            </Section>

            <div className="buttons">
                {isNew &&
                <Button title='Excluir prato' className='delete'/>}
                <Button className='save'
                title='Salvar alterações'
                onClick={handleNewDish}
            />
            </div>


            </Form>
            </main>

            <Footer/>
            
        </Container>
    )

};