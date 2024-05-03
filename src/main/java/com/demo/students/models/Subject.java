package com.demo.students.models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "subjects")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "teacher")
    private String teacher;
    @Column(name = "schedule")
    private Schedule schedule;
    @JoinTable(
            name = "subject_student",
            joinColumns = @JoinColumn(name = "FK_SUBJECT", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "FK_STUDENT", nullable = false)
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Student> students;

    public Subject() {
    }

    public Subject(String name, String teacher, Schedule schedule, List<Student> students) {
        this.name = name;
        this.teacher = teacher;
        this.schedule = schedule;
        this.students = students;
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

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    @Override
    public String toString() {
        return "Subject{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", teacher='" + teacher + '\'' +
                ", schedule=" + schedule +
                ", students=" + students +
                '}';
    }
}
