import styled from 'styled-components'


export const HomeContainer = styled.div`
    /* Seus estilos */
`;

export const Secao = styled.section`
    background-color: #F2C3CB;
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    p {
        font-size: 20px;
        color: #5E2806;
        margin-top: 20px; 
    }
`;

export const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: center;
    margin-left: 147px;
    margin-top:100px;
    margin-right: 20px;
    img {
        max-width: 100%;
    }

    p {
        margin-top: 20px; 
        font-size: 32px;
        color: #5E2806;
        text-shadow: -2px 1px 1px white;
    }
`;

export const DonutSection = styled.div`
    display: flex;
    flex-direction: column;

    img {
        max-width: 100%;
    }
`;
