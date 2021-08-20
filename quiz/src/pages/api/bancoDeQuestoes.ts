import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel((0), 'Qual bicho trasmite a Doença de Chagas?', [
    RespostaModel.errada('Barata'),
    RespostaModel.errada('Macaco'),
    RespostaModel.errada('Rato'),
    RespostaModel.certa('Barbeiro'),
  ]),
  new QuestaoModel((1), 'Qual o fruto é conhecido no Norde e Nordeste como "jerimum"?', [
    RespostaModel.errada('Caju'),
    RespostaModel.errada('Côco'),
    RespostaModel.errada('Chuchu'),
    RespostaModel.certa('Abóbora'),
  ]),
  new QuestaoModel((2), 'Qual o coletivo de cães?', [
    RespostaModel.errada('Manda'),
    RespostaModel.errada('Alcateia'),
    RespostaModel.errada('Rebanho'),
    RespostaModel.certa('Matilha'),
  ]),
  new QuestaoModel((3), 'Qual é o triangulo que tem os lados diferentes', [
    RespostaModel.errada('Equilátero'),
    RespostaModel.errada('Isóceles'),
    RespostaModel.errada('Trapézio'),
    RespostaModel.certa('Escaleno'),
  ])
]

export { questoes }