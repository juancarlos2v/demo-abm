import styles from "@styles/table.module.css";
import { useStudentContext } from 'src/app/context/StudentContext';

const TableSubjects = () => {
    const { subjects } = useStudentContext();

    return (
        <div className={`${styles.table}`}>
            <table >
                <thead className={`${styles.thead}`}>
                    <tr>
                        <th>Materia</th>
                        <th>Año</th>
                        <th>Profesor</th>
                        <th>Horario</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subjects.map((subject, index) => (
                            <tr key={index}>
                                <td>{subject.name}</td>
                                <td>{subject.stage} </td>
                                <td>{subject.teacher} </td>
                                <td>{subject.schedule}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TableSubjects

