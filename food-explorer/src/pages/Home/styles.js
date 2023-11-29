import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    'header'
    'content'
    'footer';

    >main{
        grid-area: content;
        justify-self: center;

        width: 100vh;
    

    >div{
        max-width: 40.4rem;
        margin: 4.4rem auto 2.5rem;
        margin-left: max(2.4rem, calc(100% - 40.4rem));
    

    >header{
        max-width: 37.6rem;
        height: 12rem;
        margin-inline: 1.2rem 1.6rem;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        background: linear-gradient(
            180deg, 
          ${({ theme }) => theme.COLORS.GRADIENT_100} 0%, 
          ${({ theme }) => theme.COLORS.GRADIENT_200} 100%
        );
        border-radius: 3px;

        position: relative;

        img{
            width:19.1rem;
            height: auto;

            position: absolute;
            left: -3rem;
            bottom: 0;
        }

        div{
            width: 20.2rem;
            position: absolute;
            top: 3.6rem;
            right: 2.1rem;

            color: ${({ theme }) => theme.COLORS.GRAY_200};
        

        h1{
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.8rem;
            line-height: 140%;

            margin-bottom: 0.3rem;
        }

        p{
            font-size: 1.2rem;
            line-height: 140%;
        }
     }
    }
 }
}
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2.4rem;

   margin-top: 6.2rem;

   >section >h2{
     font-family: 'Poppins', sans-serif;
     font-weight: 500;
     font-size: 1.8rem;
     line-height: 140%;

     color: ${({ theme }) => theme.COLORS.GRAY_200};
     margin-bottom: 2.4rem;
   }

   swiper-slide{
    max-width: 21rem;
   }

   @media (min-width: 1024px) {
    gap: 4.8rem;

    section > h2{
        font-size: 3.2rem;
    }

    swiper-slide{
    max-width: 30.4rem;
   }
   }
`;
