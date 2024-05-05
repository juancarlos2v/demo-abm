"use client"

import axios from "axios"
import { useState } from "react";

const CreateStudent = () => {

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
                console.log(response)
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
        <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" value={data.name} onChange={handleChange} />
            <label htmlFor="lastName">Apellido</label>
            <input type="text" name="lastName" value={data.lastName} onChange={handleChange} />
            <button onClick={handleSubmit}>Crear Estudiante</button>
        </div>
    )
}

export default CreateStudent;
