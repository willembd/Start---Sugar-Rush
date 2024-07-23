import { Buttonnav } from "./style"

export function Button({cor, title, ...rest}){
    return(
        <Buttonnav modelobutton={cor} {...rest}>{title}</Buttonnav>
    )
}