import QuestaoModel from '../models/questao';
import style from '../styles/Questionario.module.css';
import Botao from './Botao';
import Questao from './Questao';

interface questionarioProps {
    questao: QuestaoModel;
    ultima: boolean;
    questaoRespondida: (questao: QuestaoModel) => void;
    irParaProximoPasso: () => void
}

export default function Questionario (props) {
    function respostaFornecida (indice: number) {
        if(props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={style.questionario}>
            { props.questao ? 
                <Questao
                    valor={props.questao}
                    tempoParaResposta={6}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irParaProximoPasso}/>
            :   false
            }
            <Botao
            onClick={props.irParaProximoPasso}
            texto={props.ultima ? 'Finalizar' : 'Próxima'}
            />
        </div>
    )
} 