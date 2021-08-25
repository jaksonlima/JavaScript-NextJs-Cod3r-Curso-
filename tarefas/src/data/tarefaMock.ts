import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefas";
import TipoFiltro from "../model/TipoFiltro";

const tarefas: Tarefa[] = [
  Tarefa.criarAtiva(655, "Estudar Nextjs"),
  Tarefa.criarConcluida(658, "Limpar carro"),
  Tarefa.criarAtiva(455, "Comprar livro do mês"),
]

const listaTarefas = new ListaTarefas(tarefas, TipoFiltro.NENHUM);

export { tarefas, listaTarefas }