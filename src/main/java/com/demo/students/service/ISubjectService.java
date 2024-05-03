package com.demo.students.service;

import com.demo.students.dto.SubjectDTO;

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

    /**@Override
    public SubjectDTO createSubject() {
        return null;
    }**/

    @Override
    public Set<SubjectDTO> getSubjects() {
        return  subjectRepository.findAll().stream().map(subject -> new SubjectDTO(subject)).collect(Collectors.toSet());

    }

   /** @Override
    public SubjectDTO getSubject() {
        return null;
    }

    @Override
    public SubjectDTO updateSubject() {
        return null;
    }

    @Override
    public void deleteSubject() {

    }**/
}
