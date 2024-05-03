package com.demo.students.dto;

import com.demo.students.entity.Schedule;
import com.demo.students.entity.Stage;
import com.demo.students.entity.Subject;
import jakarta.persistence.Column;

public class SubjectDTO {
    private Long id;
    private String name;
    private String teacher;
    private Stage stage;
    private Schedule schedule;

    public SubjectDTO() {
    }

    public SubjectDTO(Subject subject){
        this.id= subject.getId();
        this.name= subject.getName();
        this.teacher= subject.getTeacher();
        this.stage=subject.getStage();
        this.schedule=subject.getSchedule();
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

    public Stage getStage() {
        return stage;
    }

    public void setStage(Stage stage) {
        this.stage = stage;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }
}
