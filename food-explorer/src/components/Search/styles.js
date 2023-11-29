import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding-left:1.4rem;
    border-radius: 0.5rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    
    &:focus-within{
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }
    
    svg{
        color:${({ theme }) => theme.COLORS.GRAY_100};
    }

    input{
        max-width: 28.2rem;
    

    &:focus{
        border: none;
     }
    }
    `;