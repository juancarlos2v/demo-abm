package com.demo.students.mapper;

import com.demo.students.dto.SubjectDTO;
import com.demo.students.entity.Subject;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface SubjectMapper {

    SubjectMapper subjectMapper = Mappers.getMapper(SubjectMapper.class);

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "teacher", target = "teacher"),
            @Mapping(source = "schedule", target = "schedule")
    })
    SubjectDTO toProductDTO(Subject subject);

    List<SubjectDTO> toSubjectList(List<Subject> subjectList);
}
