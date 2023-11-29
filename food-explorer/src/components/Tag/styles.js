import styled from "styled-components";

export const Container = styled.span`
    padding:0.4rem 0.8rem;
    border-radius: 5px;
    
    font-size: 1.4rem;
    line-height: 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    `;