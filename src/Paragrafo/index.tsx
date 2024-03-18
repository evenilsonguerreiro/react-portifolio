import {P} from './styles'

 export type props = {
  children: string;
  tipo?: `principal` | `secundario`
  fontSize?: number

}

const Paragrafo = (props:props) => <P>{props.children}</P>

export default Paragrafo;
