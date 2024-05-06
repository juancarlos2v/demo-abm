"use client"
import axios from "axios";
import styles from '@styles/profile.module.css'
import button from "@styles/profile.module.css"
import { useState } from 'react';
import { useContentContext } from "src/app/context/ContentContext";
import { useStudentContext } from "src/app/context/StudentContext";

const Profile = ({ select }) => {
    const { setContent } = useContentContext();
    const { updateStudent } = useStudentContext();
    const [editing, setEditing] = useState(false);

    const [data, setData] = useState({
        name: select.name,
        lastName: select.lastName,
        document: select.document,
        mail: select.mail,
        phone: select.phone,

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
        setData(select);
        setEditing(!editing);
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
                updateStudent(data);
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
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                />}
            {!editing ?
                <h3>{select.lastName} </h3> :
                <input type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleInputChange}
                    placeholder={select.lastName} />}
            {Object.keys(select).length > 0 &&
                <h3>#{`${select.id}`}</h3>}
            {Object.keys(select).length > 0 && !editing &&
                <button className={`${button.button}`} onClick={edit}>Editar</button>}
            <div className='mt-4'>
                <div className="d-flex">
                    <p>Documento:</p>{
                        !editing ?
                            <p>{select.document}</p> :
                            <input
                                type="text"
                                name="document"
                                value={data.document}
                                onChange={handleInputChange}
                                placeholder={select.document} />}
                </div>
                <div className="d-flex">
                    <p>Telefono:</p>{
                        !editing ?
                            <p>{select.phone}</p> :
                            <input
                                type="text"
                                name="phone"
                                value={data.phone}
                                onChange={handleInputChange}
                                placeholder={select.phone} />}
                </div>
                <div className="d-flex">
                    <p>Correo:</p>{
                        !editing ?
                            <p>{select.mail}</p> :
                            <input
                                type="text"
                                name="mail"
                                value={data.mail}
                                onChange={handleInputChange}
                                placeholder={select.mail} />}
                </div>
                {editing &&
                    <div>
                        <button className={`${button.button}`} onClick={() => saveChanges(select.id)}>Guardar</button>
                        <button onClick={edit}>Cancelar</button>
                    </div>
                }
                {Object.keys(select).length > 0 && !editing && <button className={`${button.button}`} onClick={() => switchContent("inscripcion")}>Inscripciones</button>}

            </div>
        </div>
    )
}

export default Profile
