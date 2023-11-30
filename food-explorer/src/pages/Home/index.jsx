import {Container, Content} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Food } from '../../components/Food';
import { Menu } from '../../components/Header/styles';
import { Section } from '../../components/Section'
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import spaguettiGambe from '../../assets/spaguetti-gambe.png'
import { useRef, useEffect } from 'react';
import {register} from 'swiper/element/bundle'

register ();

export function Home({ isAdmin }) {
    const swiperElRef1 = useRef(null);
    const swiperElRef2 = useRef(null);
    const swiperElRef3 = useRef(null);
  
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const spaghettiData = {
      src: spaguettiGambe,
      title: "Spaguetti Gambe",
      description: "Massa fresca com camarões e pesto.",
      price: "79,97",
    };
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
          
            entry.target.swiper && entry.target.swiper.autoplay.start();
          } else {
        
            entry.target.swiper && entry.target.swiper.autoplay.stop();
          }        
        });
      }, options);
  
    
      observer.observe(swiperElRef1.current);
      observer.observe(swiperElRef2.current);
      observer.observe(swiperElRef3.current);
  
      return () => {
        observer.disconnect();
      }
    }, []);
  
    return (
      <Container>
        {!isDesktop && 
          <Menu isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        }
  
        <Header isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
  
        <main>
          <div>
            <header>
              <img 
                src={isDesktop ? 
                  '../../src/assets/home-banner.png' : 
                  '../../src/assets/banner-mobile.png'
                } 
                alt='Macarons coloridos em tons pastel despencando juntamente com folhas verdes e frutas frescas.' 
              />
  
              <div>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
              </div>
            </header>
  
            <Content>
              <Section title='Refeições'>
                <div className="swiper-background"></div>
                <swiper-container
                  key={isDesktop}
                  ref={swiperElRef1}
                  space-between={isDesktop ? "27" : "16"}
                  slides-per-view="auto"
                  navigation={isDesktop ? "true" : "false"}
                  loop="true"
                  // autoplay="true"
                  grab-cursor="true"
                >
                  <swiper-slide>
                    <Food isChecked isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
                </swiper-container>
              </Section>
  
              <Section title='Sobremesas'>
                <swiper-container
                  key={isDesktop}
                  ref={swiperElRef2}
                  space-between={isDesktop ? "27" : "16"}
                  slides-per-view="auto"
                  navigation={isDesktop ? "true" : "false"}
                  loop="true"
                  // autoplay="true"
                  grab-cursor="true"
                >
                  <swiper-slide>
                    <Food isChecked isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
                </swiper-container>
              </Section>
  
              <Section title='Bebidas'>
                <swiper-container
                  key={isDesktop}
                  ref={swiperElRef3}
                  space-between={isDesktop ? "27" : "16"}
                  slides-per-view="auto"
                  navigation={isDesktop ? "true" : "false"}
                  loop="true"
                  // autoplay="true"
                  grab-cursor="true"
                >
                  <swiper-slide>
                    <Food isChecked isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
  
                  <swiper-slide>
                    <Food isAdmin={isAdmin} data={spaghettiData} />
                  </swiper-slide>
                </swiper-container>
              </Section>
            </Content>
          </div>
        </main>
  
        <Footer />
      </Container>
    )};