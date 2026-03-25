import { useEffect, useMemo, useState } from 'react';
import { fetchProjects } from '../api/api';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(setProjects);
    }, []);

    return (
        <div>
            <h1>Projects</h1>

            <div className="projectsGrid">
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </div>
    );
}

export default Projects;