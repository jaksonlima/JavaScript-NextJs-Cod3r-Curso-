export default class PortaModel {
  #numero: number
  #temPresente: boolean
  #selecionada: boolean
  #aberta: boolean
  
  constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
    this.#numero = numero
    this.#temPresente = temPresente
    this.#selecionada = selecionada
    this.#aberta = aberta
  }

  get numero() {
    return this.#numero
  }

  set numero(numero) {
    this.#numero = numero
  }

  get temPresente() {
    return this.#temPresente
  }

  set temPresente(temPresente) {
    this.#temPresente = temPresente
  }

  get selecionada() {
    return this.#selecionada
  }

  set selecionada(selecionada) {
    this.#selecionada = selecionada
  }

  get aberta() {
    return this.#aberta
  }

  set aberta(aberta) {
    this.#aberta = aberta
  }

  desselecionar() {
    const selecionada = false
    return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
  }

  alternarSelecao() {
    const selecionada = !this.selecionada
    return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
  }

  abrir() {
    const aberta = true
    return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
  }
}
