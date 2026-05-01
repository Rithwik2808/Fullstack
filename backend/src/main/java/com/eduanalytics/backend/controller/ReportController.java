package com.eduanalytics.backend.controller;

import com.eduanalytics.backend.model.Report;
import com.eduanalytics.backend.service.ReportService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private final ReportService service;

    public ReportController(ReportService service) {
        this.service = service;
    }

    // GET all reports
    @GetMapping
    public List<Report> getReports() {
        return service.getAllReports();
    }

    // ADD report
    @PostMapping
    public Report addReport(@RequestBody Report report) {
        return service.addReport(report);
    }

    // DELETE report
    @DeleteMapping("/{id}")
    public void deleteReport(@PathVariable Long id) {
        service.deleteReport(id);
    }

    // UPDATE report
    @PutMapping("/{id}")
    public Report updateReport(@PathVariable Long id, @RequestBody Report report) {
        return service.updateReport(id, report);
    }
}