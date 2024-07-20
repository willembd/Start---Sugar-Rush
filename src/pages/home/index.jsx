import { useNavigate, Link } from "react-router-dom"

import Buttton from "../../componentes/button"

import Logo from "../../assets/sr-logo.png"
import { Nav } from "./style"

export default function Home(){
    const navigation = useNavigate()

    return(
        <>
            <Nav className="navHome">
                <img className="logoNav" src={Logo} alt="" />

                <div className="navSecao">        
                    <a className="navSecaoOpcao" href="" onClick={() => {
                        navigation('/')
                    }}>Home</a>
                    <a className="navSecaoOpcao" href="">Produtos</a>
                    <a className="navSecaoOpcao" href="">Contato</a>
                </div>

                <Buttton modeloButton="primeiro" title="Login" onClick={() => {
                        navigation('/login')
                    }} />
            </Nav>

        </>
    )
}