import styles from '../styles/Cartao.module.css'

interface CartaoProps {
  children?: any
  bgcolor?: string
  border?: string
  hover?: 'none' | 'hover-brightness'
}

const Cartao = (props: CartaoProps) => {
  return (
    <div
      className={`${styles.cartao} ${props.hover}`}
      style={{
        backgroundColor: props.bgcolor ?? '#fff',
        border: `1px solid ${props.border}` ?? 'none',
      }}>
      {props.children}
    </div>
  )
}

export default Cartao;