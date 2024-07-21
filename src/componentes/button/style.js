import styled from "styled-components";

export const Buttonnav = styled.button`

    background-color: ${props => 
       props.modelobutton === 'primary' ? "#C00044" :
       props.modelobutton === 'secondary' ? "rgba(0,0,0 0.3)" : 
       "#C00044"
    };

    color: ${props =>
        props.modelobutton === 'primary' ? "#ffffff":
        props.modelobutton === 'secondary' ? "#C00044" :
        "#ffffff"
    };

    padding: 0.625rem 2.25rem;
    border-radius: 6.25rem;
    border: 2px #C00044 solid;
    cursor: pointer;
    
`
