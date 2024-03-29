import Paragrafo from "../../Paragrafo";
import Titulo from "../../components/Titulo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsum. Ipsam repudiandae autem, rem soluta sint, consequuntur quas perferendis tempora, aliquid esse dignissimos! Ducimus laborum ipsa, ea nulla minus doloremque.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=evenilson&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=evenilson&layout=compact&langs_count=7&theme=dracula" />


    </GithubSecao>
  </section>
)

export default Sobre;

