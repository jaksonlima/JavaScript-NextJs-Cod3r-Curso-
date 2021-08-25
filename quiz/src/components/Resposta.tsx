import RespostaModel from "../model/resposta";

import styles from '../styles/Resposta.module.css'

interface RespostaProps {
  valor: RespostaModel
  indece: number
  letra: string
  corFundoLetra: string
  onChange: (index) => void
}

function Resposta({ valor: resposta, ...props }: RespostaProps) {
  const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ''
  return (
    <div className={styles.resposta} onClick={() => props.onChange(props.indece)}>
      <div className={`${styles.conteudoResposta} ${respostaRevelada}`}>
        <div className={styles.frente} >
          <div className={styles.letra}
            style={{
              backgroundColor: props.corFundoLetra
            }}
          >
            {props.letra}
          </div>
          <div className={styles.valor}>
            {resposta.valor}
          </div>
        </div>
        <div className={styles.verso} >
          {resposta.certa ? (
            <div className={styles.certa}>
              <div>A resposta certa é...</div>
              <div className={styles.texto}>{resposta.valor}</div>
            </div>
          ) : (
            <div className={styles.errada}>
              <div>A resposta informada está errada...</div>
              <div className={styles.texto}>{resposta.valor}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Resposta;