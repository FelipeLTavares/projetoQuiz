import style from '../styles/Estatistica.module.css';

interface EstatisticaProps {
    valor: any;
    texto: string;
    corFundo?: string;
    corFonte?: string;
}

export default function Estatistica (props: EstatisticaProps) {
    return (<div className={style.estatistica}>
        <div className={style.valor} 
        style={{backgroundColor: props.corFundo ?? '#FDD60F',
            color: props.corFonte ?? '#333'
        }}>
            {props.valor}
        </div>

        <div className={style.texto}>
            {props.texto}
        </div>
    </div>)
}