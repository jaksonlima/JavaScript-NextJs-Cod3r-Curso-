import ListaTarefas from "../../model/ListaTarefas"
import ListaBotao from "./ListaBotao"

interface ListaRodaPeProps {
  tarefas: ListaTarefas
  mudou: (tarefas: ListaTarefas) => void
}

function ListaRodaPe({ tarefas, mudou }: ListaRodaPeProps) {
  const filterLabels = () => {
    return tarefas.quantidade === 0 ?
      ' Nenhuma Tarefa Encontrada ' : tarefas.quantidade === 1 ? ' Tarefa Encontrada '
        : ' Tarefas Encontradas '
  }

  function handleQtDeItens() {
    return (
      <>
        <span className={`
          text-gray-400 hidden lg:inline 
        `}>
          {tarefas.quantidade}
          {filterLabels()}
        </span>
        <span className={`flex-1 hidden lg:inline`}>
        </span>
      </>
    )
  }

  function handleBotoesFiltros() {
    return (
      <>
        <ListaBotao
          selecionado={tarefas.exibindoTodas()}
          onClick={() => mudou(tarefas.removerFiltro())}
          className={` 
            hidden md:inline
          `}
        >
          Todas
        </ListaBotao>
        <ListaBotao
          selecionado={tarefas.exibindoSomenteAtivas()}
          onClick={() => mudou(tarefas.filtrarAtivas())}
          className={`mx-4`}
        >
          Ativas
        </ListaBotao>
        <ListaBotao
          selecionado={tarefas.exibindoSomenteConcluidas()}
          onClick={() => mudou(tarefas.filtrarConcluidas())}
        >
          Concluidas
        </ListaBotao>
      </>
    )
  }

  function handleExcluirConcluidas() {
    return (
      <>
        <span className="flex-grow"></span>
        <ListaBotao
          onClick={() => mudou(tarefas.excluirConcluidas())}
        >
          Excluir<span className={`hidden md:inline`}> Concluídas</span>
        </ListaBotao>
      </>
    )
  }

  return (
    <li className={`
      flex p-5
    `}>
      {handleQtDeItens()}
      {handleBotoesFiltros()}
      {handleExcluirConcluidas()}
    </li>
  )
}

export default ListaRodaPe