import Tarefa from "./Tarefas";
import TipoFiltro from "./TipoFiltro";

export default class ListaTarefas {
  #todas: Tarefa[]
  #filtroUtilizado: TipoFiltro

  constructor(todas: Tarefa[], filtroUtilizado = TipoFiltro.NENHUM) {
    this.#todas = todas
    this.#filtroUtilizado = filtroUtilizado ?? TipoFiltro.NENHUM
  }

  get todas() {
    return this.#todas
  }

  get itens() {
    return this.aplicarFiltroEm(this.#todas)
  }

  get quantidade() {
    return this.itens.length
  }

  get filtroUtilizado() {
    return this.#filtroUtilizado
  }

  exibindoTodas(): boolean {
    return this.#filtroUtilizado === TipoFiltro.NENHUM
  }

  exibindoSomenteAtivas(): boolean {
    return this.#filtroUtilizado === TipoFiltro.ATIVAS
  }

  exibindoSomenteConcluidas(): boolean {
    return this.#filtroUtilizado === TipoFiltro.CONCLUIDAS
  }

  private aplicarFiltroEm(tarefas: Tarefa[]): Tarefa[] {
    if (this.exibindoSomenteAtivas()) {

      return this.aplicarFintroAtivas(tarefas)
    } else if (this.exibindoSomenteConcluidas()) {

      return this.aplicarFintroConcluidas(tarefas)
    }

    return tarefas;
  }

  private aplicarFintroAtivas(tarefas: Tarefa[]): Tarefa[] {
    return tarefas.filter(tarefa => tarefa.ativa)
  }

  private aplicarFintroConcluidas(tarefas: Tarefa[]): Tarefa[] {
    return tarefas.filter(tarefa => tarefa.concluida)
  }

  filtrarAtivas() {
    if (!this.exibindoSomenteAtivas()) {
      return new ListaTarefas(this.#todas, TipoFiltro.ATIVAS)
    }
    return this;
  }

  filtrarConcluidas() {
    if (!this.exibindoSomenteConcluidas()) {
      return new ListaTarefas(this.#todas, TipoFiltro.CONCLUIDAS)
    }
    return this
  }

  removerFiltro() {
    if (!this.exibindoTodas()) {
      return new ListaTarefas(this.#todas, TipoFiltro.NENHUM)
    }
    return this;
  }

  excluirConcluidas() {
    const somenteAtivas = this.#todas.filter(tarefa => tarefa.ativa)
    return new ListaTarefas(somenteAtivas, TipoFiltro.NENHUM)
  }

  adicionarTarefa(novaTarefa: Tarefa): ListaTarefas {
    const todas = [...this.#todas];
    todas.push(novaTarefa)
    return new ListaTarefas(todas, this.#filtroUtilizado)
  }

  modificarTarefa(tarefaModificada: Tarefa): ListaTarefas {
    const todas = this.#todas.map(tarefa => tarefa.id === tarefaModificada.id ? tarefaModificada : tarefa)
    return new ListaTarefas(todas, this.#filtroUtilizado)
  }

}