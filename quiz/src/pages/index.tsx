import Head from 'next/head'
import { useEffect, useState } from 'react'

import Questionario from '../components/Questionario'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMock = new QuestaoModel(1, 'Qual é a melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelho'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
])

const BASE_URL = "http://localhost:3000/api"

export default function Home() {
  const [idQuestionarios, setIdQuestionarios] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)

  const handleIdsQuestionario = async () => {
    const response = await fetch(`${BASE_URL}/questionario`)
    const idsQuestionario = await response.json()

    setIdQuestionarios(idsQuestionario)
  }

  const handleQuestao = async (idQuestao: number) => {
    const response = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const questoes = await response.json()
    setQuestao(QuestaoModel.criarUsandoObject(questoes))
  }

  useEffect(() => {
    handleIdsQuestionario()
  }, [])

  useEffect(() => {
    idQuestionarios.length > 0 && handleQuestao(idQuestionarios[0])
  }, [idQuestionarios])

  function questaoRespondida(questao: QuestaoModel) {
  }

  function irParaProximaQuestao() {
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Questionario
        questao={questao}
        ultimo={false}
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={irParaProximaQuestao}
      />
    </div>
  )
}
