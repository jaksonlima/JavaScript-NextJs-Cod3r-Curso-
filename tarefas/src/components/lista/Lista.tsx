import ListaTarefas from "../../model/ListaTarefas";
import ListaBotao from "./ListaBotao";
import ListaItem from "./ListaItem";
import ListaRodaPe from "./ListaRodape";

interface ListaProps {
  tarefas: ListaTarefas
  mudou: (tarefas: ListaTarefas) => void
}

function Lista({ tarefas, mudou }: ListaProps) {
  function handleTarefas() {
    return tarefas?.itens.map(tarefa => (
      <ListaItem
        key={tarefa.id}
        valor={tarefa.descricao}
        concluida={tarefa.concluida}
        alterarStatus={() => {
          const tarefaModificada = tarefa.alternarStatus()
          const novaLista = tarefas.modificarTarefa(tarefaModificada)
          mudou(novaLista)
        }}
      />
    ))
  }

  return (
    <div className={`
      relative
      flex w-3/5 items-start 
      
    `}>
      <ul className={`
      absolute
      -top-14
      w-full list-none
      bg-white shadow-lg
      rounded-lg
    `}>
        {handleTarefas()}
        <ListaRodaPe
          tarefas={tarefas}
          mudou={mudou}
        />
      </ul>
    </div>
  )
}

export default Lista