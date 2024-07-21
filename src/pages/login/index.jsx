import Fundo from "./img/fundo.png"
import { mainLogin } from "./style"

export default function Login(){
    return(
        <>
        <mainLogin>
            <div className="cardFundo">
                <img src={Fundo} alt="Fundo" />
                <div className="card">
                    <section>
                        <h1>Login</h1>

                        <h5>E-mail</h5>
                        <h5>Senha</h5>
                    </section>

                    <button>Entrar</button>

                    <p>Não possui conta? <span> CRIE JÁ!</span></p>
                </div>
            </div>
        </mainLogin>
          
        </>
    )
}