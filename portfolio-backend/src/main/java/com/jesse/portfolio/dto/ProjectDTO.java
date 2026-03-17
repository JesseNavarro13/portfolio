package com.jesse.portfolio.dto;

public class ProjectDTO {
    private Long id;
    private String title;
    private String description;
    private String githubUrl;
    private String demoUrl;
    private String techStack;

    // Constructors
    public ProjectDTO() {}

    public ProjectDTO(Long id, String title, String description, String githubUrl, String demoUrl, String techStack) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.githubUrl = githubUrl;
        this.demoUrl = demoUrl;
        this.techStack = techStack;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getDemoUrl() {
        return demoUrl;
    }

    public void setDemoUrl(String demoUrl) {
        this.demoUrl = demoUrl;
    }

    public String getTechStack() {
        return techStack;
    }

    public void setTechStack(String techStack) {
        this.techStack = techStack;
    }
}
