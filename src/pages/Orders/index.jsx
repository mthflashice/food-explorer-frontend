import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import { api } from '../../services/api';

import { useNavigate } from 'react-router-dom';
import { RxCaretLeft } from "react-icons/rx";

import { Container, Content } from "./styles";


import { Menu } from "../../components/Menu";
import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Footer } from '../../components/Footer';
import { Order } from '../../components/Order';

export function Orders ({ $Isadmin }){
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    const [$ismenuOpen, setIsMenuOpen] = useState(false);
    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
      }
    
      useEffect(() => {
        const fetchOrders = async () => {
          try {
            const response = await api.get('/orders');
            setOrders(response.data);
          } catch (error) {
            console.log('Erro ao buscar pedidos:', error);
          }
        };
    
        fetchOrders();
      }, [])
    

      return (
        <Container>
          {!isDesktop && 
            <Menu 
              $Isadmin={$Isadmin} 
              $ismenuOpen={$ismenuOpen} 
              setIsMenuOpen={setIsMenuOpen} 
            />
          }
    
          <Header 
            $Isadmin={$Isadmin} 
            $ismenuOpen={$ismenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
          />
    
          {
            orders && 
            <main>
              <div>
                <header>
                  <ButtonText onClick={handleBack}>
                    <RxCaretLeft />
                    voltar
                  </ButtonText>
    
                  <h1> Meus Pedidos</h1>
                </header>
    
                <Content>
                  {
                    orders.map(orders => (
                      <Order
                        key={String(orders.id)}
                        data={orders}
                      />
                    ))
                  }
                </Content>
              </div>
            </main>
          }
    
          <Footer />
        </Container>
      );
        }
    

