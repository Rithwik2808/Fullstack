package com.eduanalytics.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.eduanalytics.backend.model.Student;
import com.eduanalytics.backend.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository repo;

    public StudentService(StudentRepository repo) {
        this.repo = repo;
    }

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public Student saveStudent(Student student) {
        return repo.save(student);
    }

    public void deleteStudent(Long id) {
    repo.deleteById(id);
    }

    public Student updateStudent(Long id, Student updatedStudent) {
    Student existing = repo.findById(id).orElseThrow();

    existing.setName(updatedStudent.getName());
    existing.setStudentClass(updatedStudent.getStudentClass());
    existing.setAverage(updatedStudent.getAverage());

    return repo.save(existing);
}
}