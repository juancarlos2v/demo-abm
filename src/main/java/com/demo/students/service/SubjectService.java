package com.demo.students.service;

import com.demo.students.dto.SubjectDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SubjectService {
   // SubjectDTO createSubject();
    List<SubjectDTO> getSubjects();
    /**SubjectDTO getSubject();
    SubjectDTO updateSubject();
    void deleteSubject();**/
}
