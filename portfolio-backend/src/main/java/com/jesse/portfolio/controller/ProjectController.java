package com.jesse.portfolio.controller;

import com.jesse.portfolio.dto.ProjectDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final AtomicLong idGenerator = new AtomicLong();
    private final List<ProjectDTO> projects = new ArrayList<>();

    @GetMapping
    public List<ProjectDTO> getProjects() {
        return projects;
    }

    @PostMapping
    public ProjectDTO addProject(@RequestBody ProjectDTO project) {
        project.setId(idGenerator.incrementAndGet());
        projects.add(project);
        return project;
    }

    @PutMapping("/{id}")
    public ProjectDTO updateProject(@PathVariable Long id, @RequestBody ProjectDTO updatedProject) {
        
        for (ProjectDTO project : projects) {
            if (project.getId().equals(id)) {
                project.setTitle(updatedProject.getTitle());
                project.setDescription(updatedProject.getDescription());
                project.setGithubUrl(updatedProject.getGithubUrl());
                project.setDemoUrl(updatedProject.getDemoUrl());
                project.setTechStack(updatedProject.getTechStack());
                return project;
            }
        }

        throw new RuntimeException("Project not found");
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projects.removeIf(project -> project.getId().equals(id));
    }

}
