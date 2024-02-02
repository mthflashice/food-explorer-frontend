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

export function Orders({ $isadmin }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleUpdateOrder(value) {
    setFlagUpdateOrder(value);
  }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/orders');
        setOrders(response.data);
      } catch (error) {
        console.log('Erro ao buscar pedidos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Container>
      {!isDesktop && <Menu $isadmin={$isadmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} flagUpdateOrder={handleUpdateOrder} />}

      <Header $isadmin={$isadmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} flagUpdateOrder={handleUpdateOrder} />

      {loading ? (
        <main>
          <div>Loading...</div>
        </main>
      ) : (
        orders && (
          <main>
            <div>
              <header>
                <ButtonText onClick={handleBack}>
                  <RxCaretLeft />
                  voltar
                </ButtonText>

                <h1>Meus Pedidos</h1>
              </header>

              <Content>
                {orders.map((order) => (
                  <Order key={String(order.id)} data={order} />
                ))}
              </Content>
            </div>
          </main>
        )
      )}

      <Footer />
    </Container>
  );
}

