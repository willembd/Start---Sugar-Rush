
import { Buttonnav } from "./style"

export default function Buttton({cor, title, ...rest}){
    return(
        <Buttonnav cor={cor} {...rest}>{title}</Buttonnav>
    )
}