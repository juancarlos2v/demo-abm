"use client"
import axios from "axios";
import styles from '@styles/profilecard.module.css'
import { useEffect, useState } from 'react';

const ProfileCard = () => {
    const [student, setStudent] = useState([]);
    const [editing, setEditing] = useState(false);
    const [data, setData] = useState({
        name: student.name,
        lastName: student.lastName,
        document: student.document,
        mail: student.mail,
        phone: student.phone,

    });
    const baseURL = "http://localhost:8080";

    useEffect(() => {
        axios
            .get(`${baseURL}/students/4`)
            .then(response => {
                setStudent(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

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

    const saveChanges = (id) => {
        axios
            .put(`${baseURL}/students/${id}`, data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        setEditing(false);
    }

    return (
        <div className={`${styles.card} col-3`}>
            {!editing ?
                <h3>{student.name} </h3> :
                <input type="text" name="name" value={data.name} onChange={handleInputChange} placeholder={student.name} />}
            {!editing ?
                <h3>{student.lastName} </h3> :
                <input type="text" name="lastName" value={data.lastName} onChange={handleInputChange} placeholder={student.lastName} />}
            <h3>{`#${student.id}`} </h3>
            <button onClick={edit}>Editar</button>
            <div className='mt-4'>
                <p>Documento:</p>{
                    !editing ?
                        <p>{student.document}</p> :
                        <input type="text" name="document" value={data.document} onChange={handleInputChange} />}
                <p>Telefono:</p>{
                    !editing ?
                        <p>{student.phone}</p> :
                        <input type="text" name="phone" value={data.phone} onChange={handleInputChange} />}

                <p>Correo:</p>{
                    !editing ?
                        <p>{student.mail}</p> :
                        <input type="text" name="mail" value={data.mail} onChange={handleInputChange} />}
                {editing && <button onClick={() => saveChanges(student.id)}>Guardar</button>}

            </div>
        </div>
    )
}

export default ProfileCard
