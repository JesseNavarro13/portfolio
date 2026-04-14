import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            const res = await fetch('http://localhost:5173/api/auth/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!res.ok) throw new Error('Invalid credentials');

            const data = await res.json();

            // Save token
            localStorage.setItem('token', data.token);

            // Redirect to admin page
            navigate('/admin');
        } catch (err) {
            setError('Login failed. Please check your credentials and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="adminLoginPage">
            <section className="loginCard">
                <p className="eyebrow">Admin Area</p>
                <h2>Welcome back</h2>
                <p className="loginDescription">Sign in to manage portfolio projects.</p>

                {error ? <p className="loginError">{error}</p> : null}

                <form onSubmit={handleSubmit} className="loginForm">
                    <label>
                        Username
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="username"
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </label>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>
            </section>
        </main>
    );
};