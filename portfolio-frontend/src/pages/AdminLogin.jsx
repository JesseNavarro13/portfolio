import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Mock authentication logic
        if (username === 'admin' && password === 'adminpassword') {
            navigate('/admin');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className='loginContainer'>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit} className='loginForm'>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};