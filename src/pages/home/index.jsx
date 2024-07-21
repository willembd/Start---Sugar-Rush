import { useNavigate } from "react-router-dom"

import { Navbar } from "../../componentes/navbar";
import { HomeContainer } from './style'
import { Button } from "../../componentes/button";

export default function Home(){
    const navigation = useNavigate();

    function onLoginClick() {
        navigation('/login')
    }

    return(
       <HomeContainer>
            <Navbar navButton={ 
                <Button 
                    cor="primary" 
                    title="Login" 
                    onClick={onLoginClick} 
                />}
            />
       </HomeContainer>
    )
}