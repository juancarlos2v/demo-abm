'use client'

import CardCreateStudent from '@components/CardCreateStudent'
import ProfileCard from '@components/CardProfile'
import TableInscription from '@components/TableInscription'
import TableStudents from '@components/TableStudents'
import TableSubjects from '@components/TableSubjects'
import styles from "@styles/bodycurs.module.css"
import { useContentContext } from 'src/app/context/ContentContext'

const Content = () => {
    const { content } = useContentContext();
    return (
        <>
            {content == "consulta" && (
                <div className={`${styles.layout} col-12 d-flex justify-content-between`}>
                    <TableSubjects className={`col-6`} />
                    <ProfileCard className={`col-3`} />
                </div>
            )}
            {content == "inscripcion" && (
                <div>
                    <h2>Inscripcion a materias</h2>
                    <TableInscription />
                </div>
            )}
            {content == "alumnos" && (
                <div>
                    <TableStudents />
                    <CardCreateStudent />
                </div>
            )}
        </>
    )
}

export default Content
