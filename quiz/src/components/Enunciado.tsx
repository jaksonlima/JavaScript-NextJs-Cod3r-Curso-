import styles from '../styles/Enunciado.module.css'

interface EnunciadoProps {
  children?: JSX.Element[] | JSX.Element;
  texto: string
}

function Enunciado(props: EnunciadoProps): JSX.Element {
  return (
    <div className={styles.enunciado}>
      <span className={styles.texto}>{props.texto}</span>
    </div>
  );
}

export default Enunciado;