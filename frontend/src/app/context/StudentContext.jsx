"use client";
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const baseURL = "http://localhost:8080";
    const [student, setStudent] = useState({});
    const [students, setStudents] = useState([]);
    const [subjectStudent, setsubjectStudent] = useState([]);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseURL}/students/all`)
            .then(response => {
                setStudents(response.data);
                return axios.get(`${baseURL}/subjects/all`);

            })
            .then(response => {
                setSubjects(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const fetchStudent = () => {
        axios
            .get(`${baseURL}/students/${student.id}`)
            .then(response => {
                setStudent(response.data);
                setsubjectStudent(response.data.subjects);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const fetchStudents = () => {
        axios.get(`${baseURL}/students/all`)
            .then(response => {
                setStudents(response.data);
            }).catch(error => {
                console.log(error);
            });
    };
    const fetchSubjects = () => {
        axios.get(`${baseURL}/subjects/all`)
            .then(response => {
                setSubjects(response.data);
            }).catch(error => {
                console.log(error);
            });
    };

    const updateStudent = (newInfo) => {
        setStudent({ ...student, ...newInfo });
        setsubjectStudent(student.subjects)
    };



    return (
        <StudentContext.Provider value={{ student, updateStudent, setStudent, students, fetchStudents, fetchStudent, subjects, fetchSubjects, subjectStudent, setsubjectStudent }}>
            {children}
        </StudentContext.Provider>
    );
};

StudentProvider.propTypes = {
    children: PropTypes.node.isRequired, // Asegúrate de incluir esta validación para 'children'
};


export const useStudentContext = () => useContext(StudentContext);