"use client"
import { useEffect, useState } from "react"
import styles from "@styles/tableInscription.module.css";
import axios from "axios";
import CreateStudent from "./CreateStudent";
const TableStudents = () => {

    const [students, setStudents] = useState([]);
    const baseURL = "http://localhost:8080";

    useEffect(() => {
        axios
            .get(`${baseURL}/students/all`)
            .then(response => {
                setStudents(response.data);
            }).catch(error => {
                console.log(error);
            })
    }, [])

    const deleteStudent = (id) => {
        axios
            .delete(`${baseURL}/students/${id}`)
            .then(response => {
                console.log(response);
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
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Materias</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.lastName} </td>
                                <td>{student.subjects.length} </td>
                                <td><button onClick={() => deleteStudent(student.id)}>-</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <CreateStudent />

        </div>
    )
}

export default TableStudents
