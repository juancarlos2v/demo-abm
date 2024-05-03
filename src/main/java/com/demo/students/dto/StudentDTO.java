package com.demo.students.dto;

import com.demo.students.entity.Student;
import com.demo.students.entity.Subject;
import jakarta.persistence.Column;
import jakarta.persistence.ManyToMany;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class StudentDTO {
    private Long id;
    private String name;
    private String lastName;
    private Set<Subject> subjects=new HashSet<>();

    public StudentDTO(Student student){
        this.id= student.getId();
        this.name=student.getName();
        this.subjects= (Set<Subject>) student.getSubjects().stream().map(subject -> new SubjectDTO(subject));
    }

}
