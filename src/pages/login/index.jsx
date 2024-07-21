import { Navbar } from "../../componentes/navbar";
import { Button } from "../../componentes/button";

export default function Login(){
    

    function onLoginClick() {
        navigation('/login')
    }

    return(
        <>
            <Navbar secondary navButton={<Button 
                    cor="secondary" 
                    title="Login" 
                    onClick={onLoginClick} 
                />} 
            />
        </>
    )
}