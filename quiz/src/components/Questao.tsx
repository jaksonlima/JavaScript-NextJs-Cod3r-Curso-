import styles from '../styles/Questao.module.css'

import QuestaoModel from '../model/questao'
import Enunciado from './Enunciado';
import Resposta from './Resposta';

interface QuestaoProps {
  children?: JSX.Element[] | JSX.Element;
  valor: QuestaoModel
}

function Questao({ valor }: QuestaoProps): JSX.Element {

  function handleRespostas() {
    return valor.respostas.map((item, index) => (
      <Resposta
        valor={item}
        indece={index}
        letra="A"
        corLetra="#f2c866"
      />
    ))
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={valor.enunciado} />
      {handleRespostas()}
    </div>
  )
}

export default Questao;