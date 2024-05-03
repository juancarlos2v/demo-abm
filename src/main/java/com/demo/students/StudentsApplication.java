package com.demo.students;

import com.demo.students.dto.SubjectDTO;
import com.demo.students.entity.Subject;
import com.demo.students.mapper.SubjectMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class StudentsApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentsApplication.class, args);
	}


}
