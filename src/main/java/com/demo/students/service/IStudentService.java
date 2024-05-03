package com.demo.students.service;

import com.demo.students.dto.StudentDTO;
import com.demo.students.entity.Student;
import com.demo.students.entity.Subject;
import com.demo.students.repository.StudentRepository;
import com.demo.students.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class IStudentService implements StudentService{

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private SubjectRepository subjectRepository;

    @Override
    public void createStudent(Student student) {
        studentRepository.save(student);
    }

    @Override
    public Set<StudentDTO> getStudents() {
        return studentRepository.findAll().stream().map(student -> new StudentDTO(student)).collect(Collectors.toSet());
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

    @Override
    public void inscriptionSubject(Long idStudent, Long idSubject) {
        Student st=studentRepository.findById(idStudent).orElse(null);
        Subject subject=subjectRepository.findById(idSubject).orElse(null);
        if(st==null) throw  new RuntimeException("Student not found");

        subject.getStudents().add(st);
        subjectRepository.save(subject);



    }
}
