import RespostaModel from "../model/resposta";
import styles from '../styles/Resposta.module.css'

interface RespostaProps {
  valor: RespostaModel
  indece: number
  letra: string
  corLetra: string
}

function Resposta(props: RespostaProps) {
  return (
    <div className={styles.resposta}>
      <div className={styles.conteudoResposta}>
        <div className={styles.frente}>
          <div className={styles.letra}>
            {props.letra}
          </div>
          <div className={styles.valor}>
            {props.valor.valor}
          </div>
        </div>
        <div className={styles.verso}>

        </div>
      </div>
    </div>
  )
}

export default Resposta;