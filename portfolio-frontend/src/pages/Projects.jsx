import { useEffect, useState } from 'react';
import { fetchProjects } from '../api/api';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(setProjects);
    }, []);

    return (
        <main className="projectsPage">
            <header className="projectsHeader">
                <p className="eyebrow">Work</p>
                <h1>Projects</h1>
                <p>
                    A curated list of work that demonstrates my approach to design, development,
                    and problem solving.
                </p>
            </header>

            <section className="projectsGrid" aria-label="Project list">
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </section>
        </main>
    );
}

export default Projects;