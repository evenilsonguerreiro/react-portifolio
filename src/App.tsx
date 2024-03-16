import Projetos from "./containeres/Projetos"
import Sidebar from "./containeres/Sidebar"
import Sobre from "./containeres/Sobre"
import EstiloGlobal, { Container } from "./styles"



function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>

      </Container>

    </>
  )



}

export default App
