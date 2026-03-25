import { useEffect, useMemo, useState } from 'react';
import { fetchProjects } from '../api/api';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(setProjects);
    }, []);

    return (
        <div>
            <h2>Projects</h2>

            {projects.map((p) => (
                <div key={p.id}>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <p>Tech Stack: {p.techStack}</p>
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </div>
    );
}

export default Projects;