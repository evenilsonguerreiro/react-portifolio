import { string } from "yargs"

const TemaDark = {
  corPrincipal: '#fff',
  corSecundaria: '#949494',
  corDefundo: '#282a35',
  corDaborda: '#c1c1c1',
  corDefundoBotao: '#4476bf',
}

export default TemaDark

export type theme = {
  corPrincipal: string,
  corSecundaria: string,
  corDefundo: string,
  corDaborda: string,
  corDefundoBotao: string,
}
