import { useState } from "react"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Tarefa from "../../model/Tarefas"

interface FormularioProps {
  novaTarefaCriada: (tarefa: Tarefa) => void
}

function Formulario(props: FormularioProps) {
  const [descrisao, setDescriao] = useState<string>()

  function criarNovaTarefa() {
    if (descrisao?.trim().length) {
      const novaTarefa = Tarefa.criarAtiva(Math.random(), descrisao)
      props.novaTarefaCriada(novaTarefa)
      setDescriao('')
    }
  }

  function onKeyDown(env) {
    if (env.key === 'Enter') {
      criarNovaTarefa()
    }
  }

  return (
    <div className={`
      flex flex-1 justify-center
    `}>
      <input
        placeholder="Infrome sua próxima tarefa"
        type="text"
        name="descrisao"
        id="descrisao"
        value={descrisao}
        onChange={ev => setDescriao(ev.target.value)}
        onKeyDown={onKeyDown}
        className={`
          w-1/2 py-2 px-3 rounded-lg border-2
          text-2xl
          border-purple-300
          focus:outline-none
          focus:ring-2 focus:ring-purple-600
        `}
      />
      <button
        className={`
        w-14
        ml-3 px-5 py-4 
        bg-purple-600 text-white text-xl
        focus:outline-none
        rounded-lg
        `}
        onClick={criarNovaTarefa}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}

export default Formulario