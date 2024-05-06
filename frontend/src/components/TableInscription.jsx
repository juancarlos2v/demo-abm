'use client'
import styles from "@styles/table.module.css";
import layout from "@styles/layout.module.css"
import button from "@styles/profile.module.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useContentContext } from "src/app/context/ContentContext";
import { useStudentContext } from "src/app/context/StudentContext";

const TableInscription = () => {
    const { student, fetchStudent } = useStudentContext();
    const { setContent } = useContentContext();
    const [subjects, setSubjects] = useState([]);
    const baseURL = "http://localhost:8080";


    useEffect(() => {
        axios
            .get(`${baseURL}/subjects/all`)
            .then(response => {
                setSubjects(response.data);
            }).catch(error => {
                console.log(error);
            })
    }, [])

    const inscriptionSubject = (idSubject) => {
        axios
            .put(`${baseURL}/students/inscription?idStudent=${student.id}&idSubject=${idSubject}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const switchContent = (c) => {
        fetchStudent();
        setContent(c)
    }

    return (
        <div className={`${styles.table} ${layout.layout} col-6`}>
            <h2>Inscripciones para {student.name} {student.lastName} </h2>
            <table className="col-12">
                <thead className={`${styles.thead}`}>
                    <tr>
                        <th>Materia</th>
                        <th>Año</th>
                        <th>Profesor</th>
                        <th>Horario</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subjects.map((subject, index) => (
                            <tr key={index}>
                                <td>{subject.name}</td>
                                <td>{subject.stage} </td>
                                <td>{subject.teacher} </td>
                                <td>{subject.schedule}</td>
                                <td><button onClick={() => inscriptionSubject(subject.id)}>+</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button className={`${button.button}`} onClick={() => switchContent("consulta")}>Volver</button>
        </div>
    )
}

export default TableInscription
