import axios from "axios";
import styles from "@styles/layout.module.css";
import table from "@styles/table.module.css"
import button from "@styles/profile.module.css"
import { useState } from "react";
import Profile from "./Profile";
import { useStudentContext } from "src/app/context/StudentContext";

const Consulta = () => {
    const { student, setStudent, subjectStudent, setsubjectStudent, fetchStudent } = useStudentContext();
    const [id, setId] = useState("");
    const baseURL = "http://localhost:8080";

    const handleChange = (event) => {
        setId(event.target.value);
    }

    const findStudent = (id) => {
        axios
            .get(`${baseURL}/students/${id}`)
            .then(response => {
                setStudent(response.data);
                setsubjectStudent(response.data.subjects);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const cancelSubject = (idSubject) => {
        axios
            .put(`${baseURL}/students/subject/cancel?idSubject=${idSubject}&idStudent=${student.id}`)
            .then(response => {
                console.log(response.data)
                fetchStudent();
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className={`${styles.layout} `}>
            <input type="text" name="id" value={id} onChange={handleChange} placeholder="Ingresar ID de estudiante" />
            <button className={`${button.button} ${button.mlb}`} onClick={() => findStudent(id)}>Buscar</button>

            <div className={`d-flex justify-content-between  mt-5`}>
                <Profile
                    select={student}
                />
                <div className="col-8">
                    <h3>Materias Inscriptas</h3>
                    <div className={`${table.table} col-12 mt-4`}>
                        <table className="col-12">
                            <thead className={`${table.thead} `} >
                                <tr>
                                    <th>Materia</th>
                                    <th>Año</th>
                                    <th>Profesor</th>
                                    <th>Horario</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjectStudent.length > 0 ?
                                    subjectStudent.map((subject, index) => (
                                        <tr key={index}>
                                            <td>{subject.name}</td>
                                            <td>{subject.stage} </td>
                                            <td>{subject.teacher} </td>
                                            <td>{subject.schedule}</td>
                                            <td><button onClick={() => cancelSubject(subject.id)}>x</button></td>
                                        </tr>
                                    ))

                                    : <tr><td>No tiene materias</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consulta
