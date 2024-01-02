import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
        'header'
        'content'
        'footer';

        >main{
            grid-area: content;
            justify-self: center;

            > div {
             width: calc(100% - 11.2rem);
             margin: 3.2rem 5.6rem 4.9rem;
        }
    }

        .buttons{
            display: flex;
            justify-content: center;
            gap: 1.6rem;
            margin-top: 2.4rem;
        }

        .edit{
            padding: 1.2px 24px;
        }

        .include{
            max-width: 18.8rem;
            gap: 0.5rem;
            border-radius:0.3rem;
            padding: 0.8rem 4.3rem;

            font-size: 9.46px;
            line-height: 1.6rem;

            svg{
                width: 2.1rem;
                height: 2.1rem;
            }
        }
        @media (min-width: 375px){
            .buttons{
            div svg,
            div span{
                font-weight: 700;
                font-size: 2.2px;
                line-height: 160%;
            }
        }
        }

        @media (min-width: 1024px) {
            height: 100vh;
            grid-template-rows: 9.6rem auto 7.7rem;

            >main{
                width: 100%;
                overflow-y: auto;

                ::-webkit-scrollbar {
                width: 0.8rem;
                }

                ::-webkit-scrollbar-thumb{
                    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
                    border-radius: 0.8rem;
                }

                >div{
                    width: calc(100% - 24.4rem);
                    margin: 3.2rem 12.2rem 15.5rem;
                }
            }

            .buttons{
                justify-content: initial;
                gap: 3.3rem;
            }

            .edit{
                max-width: 13.1rem;
            }

            .include{
                max-width: fit-content
                padding:1.2rem 2.4rem;

                font-size: 1.4rem;
                line-height: 2.4rem;
            }
        }
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    margin-top: 1.6rem;

    >img{
        width: 100%;
        max-width: 26.4rem;
        height:auto;
    }

    >div{
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
    

    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 2.7rem;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.GRAY_200};

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2.4rem;
    }
}

    p{
        font-family: 'Poppins', sans-serif;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
     }

    @media (min-width: 1024px) {
        flex-direction: row;
        gap:4.7rem;
        margin-top: 4.2rem;

        >img{
            max-width: 39rem;
        }

        >img{
            max-width: 39rem;
        }

        >div{
            text-align: left;
        

        h1{
            font-size: 40px;
        }

        p{
            font-size: 2.4rem;
        }

        section{
            justify-content: initial;
            gap: 1.2rem;
        }
    }
    
    }
`;

