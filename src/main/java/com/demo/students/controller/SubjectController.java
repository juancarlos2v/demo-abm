package com.demo.students.controller;

import com.demo.students.dto.SubjectDTO;
import com.demo.students.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/subjects")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    /**@GetMapping("/all")
    public List<SubjectDTO> getSubjects (){
        return subjectService.getSubjects();
    }**/
    @GetMapping("/all")
    public String hello(){
        return  "Hola";
    }
}
