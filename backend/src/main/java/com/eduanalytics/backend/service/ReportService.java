package com.eduanalytics.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.eduanalytics.backend.model.Report;
import com.eduanalytics.backend.repository.ReportRepository;

@Service
public class ReportService {

    private final ReportRepository repo;

    public ReportService(ReportRepository repo) {
        this.repo = repo;
    }

    public List<Report> getAllReports() {
        return repo.findAll();
    }

    public Report addReport(Report report) {
        return repo.save(report);
    }

    public void deleteReport(Long id) {
        repo.deleteById(id);
    }

    public Report updateReport(Long id, Report updatedReport) {
        Report existing = repo.findById(id).orElseThrow();

        existing.setTitle(updatedReport.getTitle());
        existing.setDescription(updatedReport.getDescription());

        return repo.save(existing);
    }
}