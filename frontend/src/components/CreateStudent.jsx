"use client"

import axios from "axios"
import { useState } from "react";
import { useContentContext } from "src/app/context/ContentContext";
import { useStudentContext } from "src/app/context/StudentContext";

const CreateStudent = () => {

    const { fetchStudents } = useStudentContext();

    const [data, setData] = useState({
        name: '',
        lastName: '',
        document: '',
        mail: '',
        phone: '',
    })

    const baseURL = "http://localhost:8080";

    const createStudent = (data) => {
        axios
            .post(`${baseURL}/students/create`, data)
            .then(response => {
                console.log(response);
                fetchStudents();
            })
            .catch(error => {
                console.log(error)
            })
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const handleSubmit = () => {
        createStudent(data);

    }

    return (
        <div className="col-3">

            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" value={data.name} onChange={handleChange} />
            <label htmlFor="lastName">Apellido</label>
            <input type="text" name="lastName" value={data.lastName} onChange={handleChange} />
            <label htmlFor="document">Documento</label>
            <input type="text" name="document" value={data.document} onChange={handleChange} />
            <label htmlFor="mail">e-mail</label>
            <input type="text" name="mail" value={data.mail} onChange={handleChange} />
            <label htmlFor="phone">Telefono</label>
            <input type="text" name="phone" value={data.phone} onChange={handleChange} />
            <button onClick={handleSubmit}>Crear Estudiante</button>
        </div>
    )
}

export default CreateStudent;
