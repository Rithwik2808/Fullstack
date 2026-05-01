package com.eduanalytics.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduanalytics.backend.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}