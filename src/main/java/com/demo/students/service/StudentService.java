package com.demo.students.service;

import com.demo.students.dto.StudentDTO;
import com.demo.students.entity.Student;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface StudentService {
    void createStudent(Student student);
    Set<StudentDTO> getStudents();
    StudentDTO getStudent(Long id);
    void updateStudent(Long id, Student student);
    void deleteStudent(Long id);
    void inscriptionSubject(Long idStudent, Long idSubject);
    void cancelSubject(Long idSubject, Long idStudent);
}
