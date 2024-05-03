package com.demo.students.service;

import com.demo.students.entity.Student;
import com.demo.students.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class IStudentService implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student createStudent(Student student) {
        studentRepository.save(student);
        return student;
    }

    @Override
    public Set<Student> getStudents() {
        return new HashSet<>(studentRepository.findAll());
    }

    @Override
    public Student getStudent(Long id) {
        Student st=studentRepository.findById(id).orElse(null);
        if(st==null) throw  new RuntimeException("Student not found");
        return st;
    }

    @Override
    public void updateStudent(Long id, Student student) {
        Student st=studentRepository.findById(id).orElse(null);

        if(st==null) throw  new RuntimeException("Student not found");

        st.setName(student.getName());
        st.setLastName(student.getLastName());
        studentRepository.save(st);

    }

    @Override
    public void deleteStudent(Long id) {
        Student student=studentRepository.findById(id).orElse(null);
        if(student==null) throw  new RuntimeException("Student not found");
        studentRepository.delete(student);
    }
}
