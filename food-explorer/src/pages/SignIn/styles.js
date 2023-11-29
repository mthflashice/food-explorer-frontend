import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    margin-inline: 6.5rem 4.7rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7.3rem;

    @media(min-width: 1024){
        margin-inline: 15.4rem 10.8rem;
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
    }
`;

export const Brand =styled.div`
    display: flex;
    margin-inline: auto;

    >svg{
        width: 27.8rem;
    }

    @media(min-width: 1024){
         margin-inline: 0;

         >svg{
            width: 32.4rem;
            height: 4.8rem;
         }
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 31.6rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;


    >h2 {
       display: none;
    }

    >section h2{
        margin-bottom: 0.8rem;
    }

    >section input {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        border-radius: 0.8rem;
    }
    >a{
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        line-height: 2.4rem;
    }

    @media(min-width: 1024){
        min-width: 47.6rem;
        padding: 6.4rem;
        border-radius: 1.6rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

        >h2{
            display: initial;
            
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 3.2rem;
            text-align: center;
        }

        >section input{
            background-color: transparent;
            
            border: 0.5rem solid solid ${({ theme }) => theme.COLORS.WHITE};
            border-radius: 5rem;
        }
    }
        
`;