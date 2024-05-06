"use client"
import axios from "axios";
import styles from '@styles/profilecard.module.css'
import { useState } from 'react';
import { useContentContext } from "src/app/context/ContentContext";
import { useStudentContext } from "src/app/context/StudentContext";

const Profile = ({ select }) => {
    const { setContent } = useContentContext();
    const { updateStudent } = useStudentContext();

    const StIncription = {
        id: select.id,
        name: select.name,
        lastName: select.lastName,
    }
    const [student, setStudent] = useState({
        id: select.id,
        name: select.name,
        lastName: select.lastName,
        document: select.document,
        mail: select.mail,
        phone: select.phone
    });
    const [editing, setEditing] = useState(false);

    const [data, setData] = useState({
        name: student.name,
        lastName: student.lastName,
        document: student.document,
        mail: student.mail,
        phone: student.phone,

    });

    const baseURL = "http://localhost:8080";

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const edit = () => {
        setEditing(true);
        console.log(editing)
    }
    const switchContent = (c) => {
        console.log(select)
        updateStudent(select)
        setContent(c);

    }
    const saveChanges = (id) => {
        axios
            .put(`${baseURL}/students/${id}`, data)
            .then(response => {
                setStudent(data);
            })
            .catch(error => {
                console.log(error)
            })
        setEditing(false);
    }

    return (
        <div className={`${styles.card} col-3`}>
            {!editing ?
                <h3>{select.name} </h3> :
                <input type="text" name="name" value={data.name} onChange={handleInputChange} placeholder={student.name} />}
            {!editing ?
                <h3>{select.lastName} </h3> :
                <input type="text" name="lastName" value={data.lastName} onChange={handleInputChange} placeholder={student.lastName} />}
            <h3>{`#${select.id}`} </h3>
            <button onClick={edit}>Editar</button>
            <div className='mt-4'>
                <p>Documento:</p>{
                    !editing ?
                        <p>{select.document}</p> :
                        <input type="text" name="document" value={data.document} onChange={handleInputChange} />}
                <p>Telefono:</p>{
                    !editing ?
                        <p>{select.phone}</p> :
                        <input type="text" name="phone" value={data.phone} onChange={handleInputChange} />}

                <p>Correo:</p>{
                    !editing ?
                        <p>{select.mail}</p> :
                        <input type="text" name="mail" value={data.mail} onChange={handleInputChange} />}
                {editing && <button onClick={() => saveChanges(select.id)}>Guardar</button>}
                <button onClick={() => switchContent("inscripcion")}>Inscripciones</button>

            </div>
        </div>
    )
}

export default Profile
