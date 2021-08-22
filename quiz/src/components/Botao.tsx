import Link from 'next/link'
import styles from '../styles/Botao.module.css'

interface BotaoProps {
  href?: string
  texto: string
  onClick?: (e: any) => void
}

function Botao({ texto, href, onClick }: BotaoProps) {
  const handleBotao = () => (
    <button className={styles.botao}
      onClick={onClick}
    >
      {texto}
    </button>
  )

  return (
    <>
      {href ? (
        <Link href={href}>
          {handleBotao()}
        </Link>
      ) : (
        <>
          {handleBotao()}
        </>
      )}
    </>
  );
}

export default Botao;