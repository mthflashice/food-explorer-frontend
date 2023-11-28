import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-rows: 114px auto 77px;
    grid-template-areas: 
    'header'
    'content'
    'footer';

    >main{
        grid-area: content;
        justify-self: center;

        width: 100vh;
    

    >div{
        max-width: 404px;
        margin: 44px auto 25px;
        margin-left: max(24px, calc(100% - 404px));
    

    >header{
        max-width: 376px;
        height: 120px;
        margin-inline: 12px 16px;

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
            width:191px;
            height: auto;

            position: absolute;
            left: -30%;
            bottom: 0;
        }

        div{
            width: 202px;
            position: absolute;
            top: 36px;
            right: 21px;

            color: ${({ theme }) => theme.COLORS.GRAY_200};
        

        h1{
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 18px;
            line-height: 140%;

            margin-bottom: 3px;
        }

        p{
            font-size: 12px;
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
   gap: 24px;

   margin-top: 62px;

   >section >h2{
     font-family: 'Poppins', sans-serif;
     font-weight: 500;
     font-size: 18px;
     line-height: 140%;

     color: ${({ theme }) => theme.COLORS.GRAY_200};
     margin-bottom: 24px;
   }

   swiper-slide{
    max-width: 210px;
   }

   @media (min-width: 1024px) {
    gap: 48px;

    section > h2{
        font-size: 32px;
    }

    swiper-slide{
    max-width: 304px;
   }
   }
`;
