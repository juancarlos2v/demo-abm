package com.demo.students.service;

import com.demo.students.entity.Student;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface StudentService {
    Student createStudent(Student student);
    Set<Student> getStudents();
    Student getStudent(Long id);
    void updateStudent(Long id, Student student);
    void deleteStudent(Long id);
}
