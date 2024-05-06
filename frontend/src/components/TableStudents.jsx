"use client"
import { useEffect, useState } from "react"
import styles from "@styles/tableInscription.module.css";
import axios from "axios";
import { useStudentContext } from "src/app/context/StudentContext";

const TableStudents = () => {

    const { students, fetchStudents } = useStudentContext();

    const baseURL = "http://localhost:8080";



    const deleteStudent = (id) => {
        axios
            .delete(`${baseURL}/students/${id}`)
            .then(response => {
                console.log(response);
                fetchStudents();

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className={`${styles.table} col-6`}>
            <table >
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
        </div>
    )
}

export default TableStudents
