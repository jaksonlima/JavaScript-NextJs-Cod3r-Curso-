import { useRouter } from 'next/router'

import styles from '../styles/Resultado.module.css'
import Estatistica from '../components/Estatistica'
import Botao from '../components/Botao'

function Resultado() {
  const router = useRouter()

  const total = +router.query.total
  const certas = +router.query.certas
  const percentual = Math.round((certas / total) * 100)

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{ display: 'flex' }}>
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Certas" valor={certas} corFundo="#0afba2" />
        <Estatistica texto="Percentual" valor={`${percentual}%`} corFundo="#ff3838" />
      </div>
      <Botao href="/" texto="Tentar novamente" />
    </div>
  )
}

export default Resultado