import { useNavigate } from "react-router-dom"
import { Secao, LogoSection, DonutSection } from "./style.js";
import { Navbar } from "../../componentes/navbar";
import { HomeContainer } from './style'
import { Button } from "../../componentes/button";
import LogoSugar from "../../assets/Sugar Rush.png"
import LogoDonuts from "../../assets/Donuts.png"



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
       </HomeContainer>

       
     
   </div>
    )

   
}