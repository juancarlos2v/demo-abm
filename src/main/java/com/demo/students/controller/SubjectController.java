package com.demo.students.controller;

import com.demo.students.dto.SubjectDTO;
import com.demo.students.entity.Subject;
import com.demo.students.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/subjects")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public Set<SubjectDTO> getSubjects (){
        return subjectService.getSubjects();
    }

    @PostMapping("/create")
    public ResponseEntity<Object> createSubject(@RequestBody Subject subject){
        subjectService.createSubject(subject);
        return new ResponseEntity<>("Materia registrada",HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteSubject(@PathVariable Long id){
        subjectService.deleteSubject(id);
        return  new ResponseEntity<>("Materia eliminada con exito",HttpStatus.OK);
    }

}
