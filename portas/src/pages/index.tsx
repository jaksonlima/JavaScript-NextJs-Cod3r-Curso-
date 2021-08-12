import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Form.module.css'
import Cartao from '../components/Cartao'
import EntradaNumerica from '../components/EntradaNumerica'

export default function Form() {
  const [qtdPortas, setQtdPortas] = useState(0)
  const [comPresente, setComPresente] = useState(0)
  const [embaralhar, setEmbaralhar] = useState(false)

  const validateQtdPortas = novaQtd => {
    if (novaQtd >= 0) {
      setQtdPortas(novaQtd)
    }
  }

  const validateComPresente = novaPresente => {
    if (novaPresente >= 0 && novaPresente <= qtdPortas) {
      setComPresente(novaPresente)
    }
  }

  const validaEmbaralhar = () => setEmbaralhar(!embaralhar)

  return (
    <div className={styles.formulario}>
      <Head>
        <title>O paradoxo de Monty Hall</title>
        <meta name="Monty_Hall" content="Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div >
        <Cartao
          bgcolor="rgba(188, 140, 255, 0.1)"
          border="rgba(188, 140, 255, 0.7)">
          <h1 style={{ color: '#a371f7' }}>
            Monty Hall
          </h1>
        </Cartao>
        <Cartao
          bgcolor="rgba(88, 166, 255, 0.1)"
          border="rgba(88, 166, 255, 1)">
          <EntradaNumerica
            hover='hover-brightness'
            text="Quantidade de Portas?"
            value={qtdPortas}
            onChange={validateQtdPortas}
          />
        </Cartao>
      </div>
      <div >
        <Cartao
          bgcolor="rgba(88, 166, 255, 0.1)"
          border="rgba(88, 166, 255, 1)">
          <EntradaNumerica
            hover='hover-brightness'
            text="Porta com presente?"
            value={comPresente}
            onChange={validateComPresente}
          >
            <label className={styles.container}>
              Embaralhar?
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                onClick={validaEmbaralhar}
                defaultChecked={embaralhar}
              />
              <span className={`${styles.checkmark} hover-brightness`}></span>
            </label>
          </EntradaNumerica>
        </Cartao>
        <Cartao
          hover="hover-brightness"
          bgcolor="rgba(63, 185, 80, 0.1)"
          border="rgba(63, 185, 80, 0.7)"
        >
          <Link
            passHref
            href={`/jogo/${qtdPortas}/${comPresente}${embaralhar ? `?shuffle=${embaralhar}` : ''}`}>
            <h2
              style={{ color: '#3fb950' }}
              className={styles.link}
            >
              Iniciar
            </h2>
          </Link>
        </Cartao>
      </div>
    </div >
  )
}