import { func } from 'prop-types'
import QuestaoModel from '../model/questao'

import styles from '../styles/Questionario.module.css'
import Botao from './Botao'
import Questao from './Questao'

interface QuestionarioProps {
  questao: QuestaoModel
  ultimo: boolean
  questaoRespondida: (questao: QuestaoModel) => void
  irParaProximoPasso: () => void
}

function Questionario(props: QuestionarioProps) {
  function respostaFornecida(index: number) {
    if (props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(index))
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <Questao
          valor={props.questao}
          tempoDaResposta={15}
          onChange={respostaFornecida}
          tempoEsgotado={props.irParaProximoPasso}
        />
      ) : false}
      <Botao
        onClick={props.irParaProximoPasso}
        texto={props.ultimo ? 'Finalizar' : 'Próximo'}
      />
    </div>
  )
}

export default Questionario