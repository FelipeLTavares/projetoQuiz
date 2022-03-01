import QuestaoModel from "../../models/questao";
import RespostaModel from "../../models/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual animal transmite a doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Formiga'),
        RespostaModel.certa('Barbeiro')
    ]),
    new QuestaoModel(307, 'Qual fruto é conhecido no nordeste como "jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora')
    ]),
    new QuestaoModel(308, 'Quanto é 1+1?', [
        RespostaModel.errada('1'),
        RespostaModel.errada('3'),
        RespostaModel.errada('4'),
        RespostaModel.certa('2')
    ]),
    new QuestaoModel(309, 'Qual o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Cardume'),
        RespostaModel.certa('Matilha')
    ])
];

export default questoes;