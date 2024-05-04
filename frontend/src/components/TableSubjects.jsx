import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "@styles/tableInscription.module.css";

const TableSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    const baseURL = "http://localhost:8080";
    const idStudent = 4;

    useEffect(() => {
        axios
            .get(`${baseURL}/students/${idStudent}`)
            .then(response => {
                setSubjects(response.data.subjects);
            }).catch(error => {
                console.log(error);
            })
    }, [])

    const cancelSubject = (idSubject, idStudent) => {
        axios
            .put(`${baseURL}/students/subject/cancel?idSubject=${idSubject}&idStudent=${idStudent}`)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <table className={`${styles.table}`} >
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
                                <td><button onClick={() => cancelSubject(subject.id, idStudent)}>x</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableSubjects

