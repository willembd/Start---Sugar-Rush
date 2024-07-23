import { useNavigate } from "react-router-dom"

import Imagem from "../../assets/img/Fundo"
import { LoginBody, LoginMain, LoginElemento } from "./Style"
import { Navbar } from "../../componentes/navbar"
import { Button } from "../../componentes/button";

export default function Login(){
    return(

        
        
        <LoginBody>
            <Navbar navButton={ 
                <Button 
                    cor="secondary" 
                    title="Cadastro" 
                     
                />}
            />
            <LoginMain>

                    <Imagem/>
                    <LoginElemento>
                    
                        <h1>login</h1>
                        <h3>E-mail</h3>
                        <h3>Senha</h3>
                        <button>Entrar</button>
                        <p>Não possui conta?<span>CRIE JÁ!</span></p>
                        
                    </LoginElemento>
                
            </LoginMain>
        </LoginBody>
    
    )   
}

