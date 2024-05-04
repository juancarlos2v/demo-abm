package com.demo.students.service;

import com.demo.students.dto.SubjectDTO;

import com.demo.students.entity.Subject;
import com.demo.students.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@Service
public class ISubjectService implements SubjectService{

    @Autowired
    private SubjectRepository subjectRepository;

    @Override
    public void createSubject(Subject subject) {
        subjectRepository.save(subject);
    }

    @Override
    public Set<SubjectDTO> getSubjects() {
        return  subjectRepository.findAll().stream().map(subject -> new SubjectDTO(subject)).collect(Collectors.toSet());

    }

    @Override
    public void deleteSubject(Long id) {
        Subject subject=subjectRepository.findById(id).orElse(null);
        subjectRepository.delete(subject);
    }
}
