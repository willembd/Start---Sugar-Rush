import { useNavigate } from "react-router-dom"
import { Secao, LogoSection, DonutSection } from "./style.js";
import { Navbar } from "../../componentes/navbar";
import { HomeContainer } from './style'
import { Button } from "../../componentes/button";
import LogoSugar from "../../assets/Sugar Rush.png"
import LogoDonuts from "../../assets/Donuts.png"
import Onda from "../../assets/wave 2.png"


export default function Home(){
    const navigation = useNavigate();

    function onLoginClick() {
        navigation('/login')
    }

    return(
        <div>
       <HomeContainer>
            <Navbar navButton={ 
                <Button 
                    cor="primary" 
                    title="Login" 
                    onClick={onLoginClick} 
                />}
            />
                 <Secao>
                    <LogoSection>
                        <img src={LogoSugar} alt="Sugar-rush" />
                        <p>Doçura em alta velocidade</p>
                    </LogoSection>
                    <DonutSection>

                        <img 
                            src={LogoDonuts} 
                            alt="LogoDonuts"  
                        /> 
                    </DonutSection>


                </Secao>

                <img src={Onda} alt="" />

                <h2>Sobre nós</h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <button>Saiba mais </button>

       </HomeContainer>

       
     
   </div>
    )

   
}
