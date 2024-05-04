'use client'
import styles from "@styles/tableInscription.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const TableInscription = () => {

    const [subjects, setSubjects] = useState([]);
    const baseURL = "http://localhost:8080";
    const idStudent = 4;

    useEffect(() => {
        axios
            .get(`${baseURL}/subjects/all`)
            .then(response => {
                setSubjects(response.data);
            }).catch(error => {
                console.log(error);
            })
    }, [])

    const inscriptionSubject = (idStudent, idSubject) => {
        axios
            .put(`${baseURL}/students/inscription?idStudent=${idStudent}&idSubject=${idSubject}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className={`${styles.table} col-6`}>
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
                                <td><button onClick={() => inscriptionSubject(idStudent, subject.id)}>+</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TableInscription
