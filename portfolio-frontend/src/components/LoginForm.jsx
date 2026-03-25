import { setToken } from '../auth/auth';

const handleLogin = async () => {
    const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            username, 
            password 
        })
    });

    const data = await response.json();
    setToken(data.token);
};