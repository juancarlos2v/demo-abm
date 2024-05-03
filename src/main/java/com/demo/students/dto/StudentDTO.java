package com.demo.students.dto;

import com.demo.students.entity.Student;
import com.demo.students.entity.Subject;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class StudentDTO {
    private Long id;
    private String name;
    private String lastName;
    private Set<SubjectDTO> subjects=new HashSet<>();

    public StudentDTO(Student student){
        this.id= student.getId();
        this.name=student.getName();
        this.subjects= student.getSubjects().stream().map(subject -> new SubjectDTO(subject)).collect(Collectors.toSet());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Set<SubjectDTO> getSubjects() {
        return subjects;
    }

    public void setSubjects(Set<SubjectDTO> subjects) {
        this.subjects = subjects;
    }
}
