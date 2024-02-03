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

    function handleUpdateOrder(value) {
      setFlagUpdateOrder(value)
    }


    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const response = await api.get('/myorders');
          setOrders(response.data);
        } catch (error) {
          console.log('Erro ao buscar pedidos:', error);
        }
      };

      fetchOrders();
    }, [])

    const cancelMyOrder = async (dishId) => {
      try {
          await api.delete(`/myorders/${dishId}`);
    
          setOrders((prevCancelMyOrder) =>
            prevCancelMyOrder.filter((myorders) => myorders.id !== dishId)
          );
        } catch (error) {
          console.log('Erro ao att seu pedido', error);
        }
      };

    return (
      <Container>
        {!isDesktop && 
          <Menu 
            $Isadmin={$Isadmin} 
            $ismenuOpen={$ismenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
            flagUpdateOrder={handleUpdateOrder}

          />
        }

        <Header 
          $Isadmin={$Isadmin} 
          $ismenuOpen={$ismenuOpen} 
          setIsMenuOpen={setIsMenuOpen}
          flagUpdateOrder={handleUpdateOrder} 
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
                      cancelMyOrder={cancelMyOrder} 

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

