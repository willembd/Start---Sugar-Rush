import { Buttonnav } from "./Estilos"

export function Button({cor, title, ...rest}){
    return(
        <Buttonnav modelobutton={cor} {...rest}>{title}</Buttonnav>
    )
}