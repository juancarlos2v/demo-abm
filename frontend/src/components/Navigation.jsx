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
            <button className="col-2" onClick={() => switchContent("alumnos")} >Alumnos</button>
            <button className="col-2" onClick={() => switchContent("materias")} >Materias</button>
            <button className="col-2" onClick={() => switchContent("consulta")} >Consultas</button>
        </div>
    )
}

export default Navigation
