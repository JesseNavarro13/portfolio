export default function ProjectCard({ title, description, techStack, githubUrl }) {
    return (
        <div className="projectCard">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Tech Stack: {techStack}</p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};