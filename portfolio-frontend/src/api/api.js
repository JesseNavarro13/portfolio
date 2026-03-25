import { getToken } from '../auth/auth';

const BASE_URL = 'http://localhost:8080';

export const fetchProjects = async () => {
    const response = await fetch(`${BASE_URL}/api/projects`);
    return response.json();
};

export const createProject = async (project) => {
    const token = getToken();

    const response = await fetch(`${BASE_URL}/api/projects`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(project),
    });

    if (response.status === 401) throw new Error("Unauthorized");
    
    return response.json();
};