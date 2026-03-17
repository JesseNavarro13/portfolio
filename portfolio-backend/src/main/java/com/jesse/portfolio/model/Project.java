package com.jesse.portfolio.model;

import jakarta.persistence.*;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long id;

    private String title;
    private String description;
    private String githubUrl;
    private String demoUrl;
    private String techStack;

    public Project() {}

    public Project(String title, String description, String githubUrl, String demoUrl, String techStack) {
        this.title = title;
        this.description = description;
        this.githubUrl = githubUrl;
        this.demoUrl = demoUrl;
        this.techStack = techStack;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public String getDemoUrl() {
        return demoUrl;
    }

    public String getTechStack() {
        return techStack;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public void setDemoUrl(String demoUrl) {
        this.demoUrl = demoUrl;
    }

    public void setTechStack(String techStack) {
        this.techStack = techStack;
    }
}
