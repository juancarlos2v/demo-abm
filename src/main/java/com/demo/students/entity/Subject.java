package com.demo.students.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "subjects")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name="native")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "teacher")
    private String teacher;
    @Column(name = "stage")
    @Enumerated(EnumType.STRING)
    private Stage stage;
    @Column(name = "schedule")
    @Enumerated(EnumType.STRING)
    private Schedule schedule;
    @JoinTable(
            name = "subject_student",
            joinColumns = @JoinColumn(name = "FK_SUBJECT", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "FK_STUDENT", nullable = false)
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Student> students =new HashSet<>();

    public Subject() {
    }

    public Subject(String name, String teacher, Stage stage, Schedule schedule, Set<Student> students) {
        this.name = name;
        this.teacher = teacher;
        this.stage = stage;
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

    public Stage getStage() {
        return stage;
    }

    public void setStage(Stage stage) {
        this.stage = stage;
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

    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
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
