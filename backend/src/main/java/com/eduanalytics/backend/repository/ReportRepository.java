package com.eduanalytics.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduanalytics.backend.model.Report;

public interface ReportRepository extends JpaRepository<Report, Long> {
}