import { NextApiRequest } from 'next'
import QuestaoModel from '../../../model/questao'
import { questoes } from '../bancoDeQuestoes'

const filterQuestao = (id: number): QuestaoModel =>
  questoes.find(questao => questao.id === id)

export default async function (req: NextApiRequest, res) {
  const questao = filterQuestao(+req.query.id)

  if (questao) {
    res.status(200)
      .json(questao.randomResposta().responderCom(0).converterObject())
  } else {
    res.status(204).send()
  }
}