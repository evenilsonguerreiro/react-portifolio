
import { useState } from "react"
import Projetos from "./containeres/Projetos"
import Sidebar from "./containeres/Sidebar"
import Sobre from "./containeres/Sobre"
import EstiloGlobal, { Container } from "./styles"

import { ThemeProvider } from "styled-components"
import Themalight from "./themes/TemaLight"
import TemaDark from "./themes/TemaDark"
import TemaLight from "./themes/TemaLight"


function App() {

  const [estarusandodark, setEstarusandoTemadark] = useState(false)

  function trocaTema (){
    setEstarusandoTemadark(!estarusandodark)
  }
  return (
    <ThemeProvider theme={estarusandodark ? TemaDark : TemaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar  trocaTema={trocaTema}/>
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )



}

export default App
