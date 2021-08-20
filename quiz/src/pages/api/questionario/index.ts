import { randomArray } from "../../../functions"
import { questoes } from "../bancoDeQuestoes"

export default (req, res) => {
  res.status(200).json(randomArray(questoes.map(item => item.id)))
}