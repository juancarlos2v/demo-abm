package com.demo.students.controller;

import com.demo.students.dto.StudentDTO;
import com.demo.students.entity.Student;
import com.demo.students.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/create")
    public ResponseEntity<Object> createStudent(@RequestBody Student student){
        studentService.createStudent( student);
        return  new ResponseEntity<>(student, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Set<StudentDTO> getStudents(){
        return studentService.getStudents();
    }

    @GetMapping("/{id}")
    public StudentDTO getStudents(@PathVariable Long id){
        return studentService.getStudent(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateStudent(@PathVariable Long id, @RequestBody Student student){
        studentService.updateStudent(id,student);
        return new ResponseEntity<>(student,HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteStudent(@PathVariable Long id){
        studentService.deleteStudent(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @PutMapping("/inscription")
    public ResponseEntity<Object> addSubject(@RequestParam Long idStudent, @RequestParam Long idSubject){
        studentService.inscriptionSubject(idStudent,idSubject);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/subject/cancel")
    public ResponseEntity<Object> cancelSubject(@RequestParam Long idSubject, @RequestParam Long idStudent){
        studentService.cancelSubject(idSubject, idStudent);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
