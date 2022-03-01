import style from '../styles/Enunciado.module.css'

interface enunciadoProps {
    texto: string
}

export default function Enunciado (props: enunciadoProps) {
    return (
        <div className={style.enunciado}>
            <div className={style.texto}>{props.texto}</div>
        </div>
    )
}