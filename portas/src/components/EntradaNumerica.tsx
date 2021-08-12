import styles from '../styles/EntradaNumerica.module.css';

interface EntradaNumericaProps {
  children?: any
  text: string,
  value: number,
  onChange: (newValue: number) => void,
  hover?: 'hover-none' | 'hover-brightness'
}

const EntradaNumerica = (props: EntradaNumericaProps) => {
  const dec = () => props.onChange(props.value - 1)
  const inc = () => props.onChange(props.value + 1)

  const handleStylesButton = `${styles.bt} ${props.hover ?? ''}`

  return (
    <div className={styles.entradaNumerica}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.botoes}>
        <button className={handleStylesButton} onClick={dec}>-</button>
        <button className={handleStylesButton} onClick={inc}>+</button>
      </div>
      {props.children}
    </div>
  );
}

export default EntradaNumerica;