'use client'

import CardCreateStudent from '@components/CreateStudent'
import ProfileCard from '@components/Profile'
import TableInscription from '@components/TableInscription'
import TableStudents from '@components/TableStudents'
import TableSubjects from '@components/TableSubjects'
import styles from "@styles/bodycurs.module.css"
import { useContentContext } from 'src/app/context/ContentContext'
import Consulta from '@components/Consulta'
import { StudentProvider, useStudentContext } from 'src/app/context/StudentContext'
import CreateStudent from '@components/CreateStudent'
import CreateSubject from '@components/CreateSubject'

const Content = () => {
    const { content } = useContentContext();

    return (
        <>
            <StudentProvider>
                {content == "materias" && (
                    <div className={`${styles.layout} col-12 d-flex justify-content-between`}>
                        <TableSubjects />
                        <CreateSubject />
                    </div>
                )}
                {content == "inscripcion" && (
                    <div>

                        <h2>Inscripcion a materias</h2>
                        <TableInscription />

                    </div>
                )}
                {content == "alumnos" && (
                    <div className='col-12 d-flex justify-content-between'>
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
