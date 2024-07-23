import { Buttonnav } from "./Style"

export function Button({cor, title, ...rest}){
    return(
        <Buttonnav modelobutton={cor} {...rest}>{title}</Buttonnav>
    )
}