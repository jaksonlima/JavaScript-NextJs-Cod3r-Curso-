import { useCallback, useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../../../styles/Jogo.module.css'
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Head from "next/head"

export default function Jogo() {
  const [portas, setPortas] = useState([])
  const { query } = useRouter()

  function getRandomArbitrary(min, max) {
    return Math.random() * Math.random() * (max - min) + min;
  }

  const hashPresente = (length) => {
    let result = ``;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    const localed = parseInt(`${length / 2}`)

    for (let i = 0; i < length; i++) {
      if (i === localed) {
        result += length
      }

      result += characters
        .charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const validatePortaAndPresente = useCallback(() => {
    return +query.porta > 0 && +query.presente > 0
  }, [query?.porta, query?.presente])

  useEffect(() => {
    if (validatePortaAndPresente()) {
      const embaralhar = query.shuffle;
      const porta = +query.porta;
      let presente = +query.presente;

      if (embaralhar) {
        presente = parseInt(getRandomArbitrary(porta, presente))
        console.log(hashPresente(presente))
      }

      setPortas(criarPortas(porta, presente))
    }
  }, [query])

  const renderizarPortas = () => portas.map(porta => (
    <Porta
      key={porta.numero}
      value={porta}
      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
  ))

  return (
    <>
      <Head>
        <title>O paradoxo de Monty Hall</title>
        <meta name="Monty_Hall" content="Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.jogo}>
        <div className={styles.portas}>
          {validatePortaAndPresente() ?
            renderizarPortas() :
            <div>
              <img src="/ue.webp" alt="esta-vazio" />
            </div>}
        </div>
        <div className={`${styles.refresh} hover-brightness`}>
          <Link href="/">
            <img src="/iconmonstr-refresh-5.svg" alt="refreshed" className="refresh-animation" />
          </Link>
        </div>
      </div>
    </>
  )
}