import { randomArray } from "../functions"
import RespostaModel from "./resposta"

export default class QuestaoModel {
  #id: number
  #enunciado: string
  #respostas: RespostaModel[]
  #acertou: boolean

  constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
    this.#id = id
    this.#enunciado = enunciado
    this.#respostas = respostas
    this.#acertou = acertou
  }

  get id() {
    return this.#id
  }

  get enunciado() {
    return this.#enunciado
  }

  get respostas() {
    return this.#respostas
  }

  get acertou() {
    return this.#acertou
  }

  get naoRespondida() {
    return !this.respondida
  }

  get respondida() {
    const existsRevelada = this.#respostas
      .some(resposta => true === resposta.revelada)

    return existsRevelada
  }

  responderCom(index: number): QuestaoModel {
    const acertou = this.#respostas[index]?.certa

    const respostas = this.#respostas.map((resposta, i) => {
      const respostaSelecionada = index === i
      const deveRevelar = respostaSelecionada || resposta.certa
      return deveRevelar ? resposta.revelar() : resposta
    })

    return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou)
  }

  randomResposta(): QuestaoModel {
    let randomRespostas = randomArray(this.#respostas)
    return new QuestaoModel(this.#id, this.#enunciado, randomRespostas, this.#acertou);
  }

  static criarUsandoObject(obj: QuestaoModel): QuestaoModel {
    const respostas = obj.respostas.map(resposta => RespostaModel.criarUsandoObject(resposta))
    return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou);
  }

  converterObject() {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respondida: this.respondida,
      acertou: this.#acertou,
      respostas: this.#respostas.map(rest => rest.converterObject()),
    }
  }
}