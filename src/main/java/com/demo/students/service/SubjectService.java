package com.demo.students.service;

import com.demo.students.dto.SubjectDTO;
import com.demo.students.entity.Subject;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface SubjectService {
   void createSubject(Subject subject);
    Set<SubjectDTO> getSubjects();
    void deleteSubject(Long id);
}
