import styled from "styled-components";

export const Nav = styled.nav`
    
    background-color: #F2C3CB;
    padding: 2rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);

    > .logoNav{
       width: 4rem;
    }

    > .navSecao{
        display: flex;
        gap: 5rem;
    }

    > .navSecao .navSecaoOpcao{
        text-decoration: none;
        color: #585858;
        position: relative;
       font-size: 18px;
       
    }

    > .navSecao .navSecaoOpcao::after{
        content: "";
        margin-top: 10px;
        width: 0%;
        height: 4px;
        background-color: #585858;
        border-radius: 2px;
        position: absolute;
        bottom: 0;
        top: 14px;
        left: 0;
    }

    > .navSecao .navSecaoOpcao:hover::after{
        width: 100%;
        transition: 0.5s ease-in-out;
    }


`

