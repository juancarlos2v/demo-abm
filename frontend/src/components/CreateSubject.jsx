import { useState } from "react";

const CreateSubject = () => {
    const [data, setData] = useState({
        name: '',
        stage: '',
        teacher: '',
        schedule: '',
    })

    const baseURL = "http://localhost:8080";

    const createSubject = (data) => {
        axios
            .post(`${baseURL}/subjects/create`, data)
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
        createSubject(data);
    }

    return (
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={data.name} onChange={handleChange} />
            <label htmlFor="">Año</label>
            <input type="text" name="stage" value={data.stage} onChange={handleChange} />
            <label htmlFor="">Profesor</label>
            <input type="text" name="teacher" value={data.teacher} onChange={handleChange} />
            <label htmlFor="">Horario</label>
            <input type="text" name="schedule" value={data.schedule} onChange={handleChange} />
            <button onClick={handleSubmit}>Crear Materia</button>
        </div>
    )
}

export default CreateSubject
