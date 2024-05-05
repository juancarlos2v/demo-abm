import axios from "axios";
import { useState } from "react";
import Profile from "./Profile";
import { StudentProvider } from "src/app/context/StudentContext";

const Consulta = () => {
    const [student, setStudent] = useState([]);
    const [id, setId] = useState("");
    const [showStudent, setShowStudent] = useState(false);
    const baseURL = "http://localhost:8080";

    const handleChange = (event) => {
        setId(event.target.value);
    }

    const findStudent = (id) => {
        axios
            .get(`${baseURL}/students/${id}`)
            .then(response => {
                setStudent(response.data)
                setShowStudent(true)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>

            <input type="text" name="id" value={id} onChange={handleChange} placeholder="Ingresar ID de estudiante" />
            <button onClick={() => findStudent(id)}>Buscar</button>
            {showStudent &&
                <div>
                    <table className="col-12">
                        <thead className={`styles.thead`}>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Materias</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{student.name}</td>
                                <td>{student.lastName} </td>
                                <td>{student.subjects.length} </td>
                                <td><button onClick={() => deleteStudent(student.id)}>-</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <Profile
                        select={student}
                    />
                </div>
            }

        </div>
    )
}

export default Consulta
