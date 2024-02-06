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
import { NumberPicker } from '../../components/NumberPicker';

export function MyOrders({ $Isadmin, orderCount,setOrderCount   }){
  const $isDesktop = useMediaQuery({ minWidth: 1024 });

  const updateTotalPrice = (newTotalPrice) => {
    setTotalPrice(newTotalPrice);
  };

  const [$ismenuOpen, setIsMenuOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [number, setNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [hasCalculatedTotal, setHasCalculatedTotal] = useState(false); // Flag to track whether total has been calculated


  const navigate = useNavigate();

  function handleBack() {
      navigate(-1);
    }

    function handleUpdateOrder(value) {
      // setFlagUpdateOrder(value)
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
      
      useEffect(() => {
        // Calculate the total price and total quantity whenever orders change
        const newTotalPrice = orders.reduce((total, order) => total + (order.price * (order.quantity || 1)), 0);
        const newTotalQuantity = orders.reduce((total, order) => total + (order.quantity || 1), 0);
        
        // Use the state updater function form to make sure you're working with the latest state
        setTotalPrice(prevTotalPrice => prevTotalPrice + newTotalPrice);
        setTotalQuantity(prevTotalQuantity => prevTotalQuantity + newTotalQuantity);
        setHasCalculatedTotal(true);
      }, [orders, hasCalculatedTotal]);

      

    return (
      <Container>
        {!$isDesktop && 
          <Menu 
            $Isadmin={$Isadmin} 
            $ismenuOpen={$ismenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
            // flagUpdateOrder={handleUpdateOrder}

          />
        }

        <Header 
          $Isadmin={$Isadmin} 
          $ismenuOpen={$ismenuOpen} 
          setIsMenuOpen={setIsMenuOpen}
          // flagUpdateOrder={handleUpdateOrder} 
        />

        {
          orders && (
            <main>
              <div>
                <header>
                  <ButtonText onClick={handleBack}>
                    <RxCaretLeft />
                    voltar
                  </ButtonText>
    
                  <h1> Meus Pedidos</h1>
    
                  <p>Preço Total: R$ {totalPrice.toFixed(2).replace(".", ",")}</p>
                  <p>Quantidade Total: {totalQuantity}</p>
                </header>
    
                <Content>
                  {orders.map((order) => (
                    <Order
                      key={String(order.id)}
                      data={order}
                      cancelMyOrder={cancelMyOrder}
                      setOrderCount={setOrderCount}
                      orderCount={orderCount}
                      updateTotalPrice={updateTotalPrice}
                    />
                  ))}
                </Content>
              </div>
            </main>
          )}
    
          <Footer />
        </Container>
      );
    }