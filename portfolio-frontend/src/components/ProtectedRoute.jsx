import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');

    if (!token) {
        console.log('Redirecting to login');
        return <Navigate to="/admin-login" />;
    }

    console.log('Allowing access');
    return children;
}