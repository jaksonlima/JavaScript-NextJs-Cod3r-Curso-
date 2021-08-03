import Subdivisao from "./Subdivisao";
import stylesLinha from "../styles/Linha.module.css";

function Linha({ preta }) {
  return (
    <div className={stylesLinha.linha}>
      <Subdivisao preto={preta}/>
      <Subdivisao preto={!preta}/>
      <Subdivisao preto={preta}/>
      <Subdivisao preto={!preta}/>
      <Subdivisao preto={preta}/>
      <Subdivisao preto={!preta}/>
      <Subdivisao preto={preta}/>
      <Subdivisao preto={!preta}/>
    </div>
  )
}

export default Linha;