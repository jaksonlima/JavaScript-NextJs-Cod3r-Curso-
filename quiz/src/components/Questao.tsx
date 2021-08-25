import styles from '../styles/Questao.module.css'

import QuestaoModel from '../model/questao'
import Enunciado from './Enunciado';
import Resposta from './Resposta';
import Temporizador from './Temporizador';

const letras = [
  { valor: 'A', cor: '#f2c866' },
  { valor: 'B', cor: '#f266ba' },
  { valor: 'C', cor: '#85d4f2' },
  { valor: 'D', cor: '#bce596' },
]

interface QuestaoProps {
  children?: JSX.Element[] | JSX.Element;
  valor: QuestaoModel
  tempoDaResposta?: number
  onChange: (index) => void
  tempoEsgotado: () => void
}

function Questao({ valor, tempoDaResposta, onChange, tempoEsgotado }: QuestaoProps): JSX.Element {
  function handleRespostas() {
    return valor.respostas.map((item, index) => (
      <Resposta
        key={`${valor.id} ${index}`}
        valor={item}
        indece={index}
        letra={letras[index].valor}
        corFundoLetra={letras[index].cor}
        onChange={onChange}
      />
    ))
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={valor.enunciado} />
      <Temporizador
        duracao={tempoDaResposta ?? 10}
        tempoEsgotado={tempoEsgotado}
        key={valor.id}
      />
      {handleRespostas()}
    </div>
  )
}

export default Questao;