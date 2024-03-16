import {Titulo as Tituloestilo} from './styles'

 export type props = {
  children: string;
  fontSize ?:number
}

const Titulo = (props:props) => <Tituloestilo fontSize={props.fontSize}>{props.children}</Tituloestilo>

export default Titulo
