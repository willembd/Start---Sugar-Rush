import Logo from "../../assets/sr-logo.png"
import { Nav, NavLink, NavLogo, NavLinkContainer } from "./style"

export function Navbar({ navButton, secondary }) {

    return (
        <Nav bg={ secondary ? 'secondary' : 'primary' } >
            <NavLogo src={Logo} alt="" />
            <NavLinkContainer>
                <NavLink href="/">Home</NavLink>
                <NavLink href="">Produtos</NavLink>
                <NavLink href="">Contatos</NavLink>
            </NavLinkContainer>
            { navButton }
        </Nav>
    )
}