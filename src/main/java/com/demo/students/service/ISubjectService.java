package com.demo.students.service;

import com.demo.students.dto.SubjectDTO;
import com.demo.students.entity.Subject;
import com.demo.students.mapper.SubjectMapper;
import com.demo.students.repository.SubjectRepository;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
    public List<SubjectDTO> getSubjects() {


        return  subjectRepository.findAll().stream().map(
                SubjectMapper.subjectMapper::toProductDTO).collect(Collectors.toList());

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
