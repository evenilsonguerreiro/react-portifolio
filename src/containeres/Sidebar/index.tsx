import Paragrafo from "../../Paragrafo"
import Avatar from "../../components/Avatar"
import Titulo from "../../components/Titulo"
import { Botaotema, Sidebarcontainer } from "./styles"

const Sidebar = () => (
  <aside>
  <Sidebarcontainer>
  <Avatar/>
  <Titulo fontSize={18}>evenilsonguerreiro</Titulo>
  <Paragrafo tipo="secundario" fontSize={16}>evenilson</Paragrafo>
  <Paragrafo fontSize={10}>Hengenheiro front-end</Paragrafo>
  <Botaotema>Trocar tema</Botaotema>
  </Sidebarcontainer>
</aside>
)


export default Sidebar
