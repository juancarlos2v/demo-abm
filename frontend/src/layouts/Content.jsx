'use client'

import CardCreateStudent from '@components/CreateStudent'
import ProfileCard from '@components/Profile'
import TableInscription from '@components/TableInscription'
import TableStudents from '@components/TableStudents'
import TableSubjects from '@components/TableSubjects'
import styles from "@styles/bodycurs.module.css"
import { useContentContext } from 'src/app/context/ContentContext'
import Consulta from '@components/Consulta'
import { StudentProvider } from 'src/app/context/StudentContext'

const Content = () => {
    const { content } = useContentContext();

    return (
        <>
            <StudentProvider>
                {content == "materias" && (
                    <div className={`${styles.layout} col-12 d-flex justify-content-between`}>
                        <TableSubjects className={`col-6`} />
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
                {content == "consulta" && (
                    <div>
                        <Consulta />
                    </div>
                )}
            </StudentProvider>
        </>
    )
}

export default Content
