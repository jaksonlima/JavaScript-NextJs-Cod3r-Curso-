import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import styles from '../styles/Temporizador.module.css'

interface TemporizadorProps {
  children?: any
  duracao: number
  key: any
  tempoEsgotado: () => void
}

function Temporizador({ duracao, tempoEsgotado }: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        duration={duracao}
        size={120}
        isPlaying
        onComplete={tempoEsgotado}
        colors={[
          ['#BCE596', 0.33],
          ['#F7B801', 0.33],
          ['#ED827A', 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default Temporizador;