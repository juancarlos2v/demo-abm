'use client'
import styles from "@styles/navigation.module.css"
import { useContentContext } from 'src/app/context/ContentContext'

const Navigation = () => {
    const { setContent } = useContentContext();

    const switchContent = (c) => {
        setContent(c);
    }

    return (
        <div className={`${styles.background} col-12 d-flex align-items-center`}>
            <button onClick={() => switchContent("alumnos")} >Alumnos</button>
            <button onClick={() => switchContent("consulta")} >Consultas</button>
            <button onClick={() => switchContent("inscripcion")} >Inscripciones</button>

        </div>
    )
}

export default Navigation
