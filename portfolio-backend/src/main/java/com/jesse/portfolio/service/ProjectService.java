package com.jesse.portfolio.service;

import com.jesse.portfolio.model.Project;
import com.jesse.portfolio.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectById(Long id) {
        return projectRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Project not found"));
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    public Project updateProject(Long id, Project updatedProject) {
        Project existingProject = getProjectById(id);
        
        existingProject.setTitle(updatedProject.getTitle());
        existingProject.setDescription(updatedProject.getDescription());
        existingProject.setGithubUrl(updatedProject.getGithubUrl());
        existingProject.setDemoUrl(updatedProject.getDemoUrl());
        existingProject.setTechStack(updatedProject.getTechStack());
        
        return projectRepository.save(existingProject);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}
