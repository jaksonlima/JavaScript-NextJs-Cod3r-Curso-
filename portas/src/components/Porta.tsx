import styles from '../styles/Porta.module.css'

import PortaModel from '../model/portaModel'
import Presente from './Presente'

interface PortaProps {
  value: PortaModel,
  onChange: (porta: PortaModel) => void,
}

function Porta({ value, onChange } : PortaProps) {
  const { selecionada, numero, aberta, temPresente  } = value

  const alterarSelecao = (env) => onChange(value.alternarSelecao())

  const abrir = (env) => {
    env.stopPropagation()
    onChange(value.abrir())
  }

  return  (
    <div className={styles.area} onClick={alterarSelecao}>
      <div 
      className={`
      ${styles.estrutura} 
      ${styles.estruturabackground} 
      ${temPresente && aberta && styles.compresente}
      ${!temPresente && aberta && styles.sempresente}
      ${selecionada && !aberta && styles.selecionada}
      `}>
        {aberta ? (<>
          {!temPresente ? false : (<Presente />)}
        </>) : (
            <div className={styles.porta}>
                <div className={styles.numero}>{numero}</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}

export default Porta;