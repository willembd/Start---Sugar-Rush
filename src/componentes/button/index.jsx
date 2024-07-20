
import { Buttonnav } from "./style"

export default function Buttton({cor, title, ...rest}){
    return(
        <Buttonnav modeloButton={cor} {...rest}>{title}</Buttonnav>
    )
}