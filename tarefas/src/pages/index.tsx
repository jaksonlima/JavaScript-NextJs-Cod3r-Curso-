import { useState } from 'react'
import Head from 'next/head'

import Lista from '../components/lista/Lista'
import { listaTarefas } from '../data/tarefaMock'
import Conteudo from '../components/template/Conteudo'
import Cabecalho from '../components/template/Cabecalho'
import Formulario from '../components/formulario/Formulario'
import Tarefa from '../model/Tarefas'

export default function Home() {
  const [tarefas, setTarefas] = useState(listaTarefas)

  function novaTarefaCriada(novaTarefa: Tarefa) {
    setTarefas(tarefas.adicionarTarefa(novaTarefa))
  }
  return (
    <div
      className={`flex flex-col h-screen bg-gray-300
      `}
    >
      <Head>
        <title>App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefaCriada} />
      </Cabecalho>
      <Conteudo>
        <Lista tarefas={tarefas} mudou={setTarefas} />
      </Conteudo>
    </div>
  )
}
