import styled from "styled-components";

export const Nav = styled.nav`
    background-color: ${props =>
        props.bg === 'primary' ? '#F2C3CB' :
        props.bg === 'secondary' ? '#F5D2DB' :
        '#F2C3CB'
    };
    height: 5rem;
    padding: 0 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);

`

export const NavLogo = styled.img`
    width: 4rem;
`

export const NavLinkContainer = styled.div`
    display: flex;
    gap: 5rem;
`

export const NavLink = styled.a`
    text-decoration: none;
    color: #585858;
    position: relative;
    font-size: 1.125rem;

    &::after {
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

    &:hover::after {
        width: 100%;
        transition: 0.5s ease-in-out;
    }
`
