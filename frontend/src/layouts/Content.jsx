'use client'

import TableInscription from '@components/TableInscription'
import TableStudents from '@components/TableStudents'
import TableSubjects from '@components/TableSubjects'
import styles from "@styles/layout.module.css"
import { useContentContext } from 'src/app/context/ContentContext'
import Consulta from '@components/Consulta'
import { StudentProvider } from 'src/app/context/StudentContext'
import CreateStudent from '@components/CreateStudent'
import CreateSubject from '@components/CreateSubject'

const Content = () => {
    const { content } = useContentContext();

    return (
        <>
            <StudentProvider>
                {content == "materias" && (
                    <div className={`${styles.layout} col-12 d-flex justify-content-between mt-5`}>
                        <TableSubjects />
                        <CreateSubject />
                    </div>
                )}
                {content == "inscripcion" && (
                    <div>
                        <TableInscription />
                    </div>
                )}
                {content == "alumnos" && (
                    <div className={`${styles.layout} col-12 d-flex justify-content-between mt-5`} >
                        <TableStudents />
                        <CreateStudent />
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
