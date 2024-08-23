import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import './Welcome.css'; 

const Welcome = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/find-books');
    };

    return (
        <div className="welcome">
            {user ? (
                <>
                    <img src="https://api.dicebear.com/6.x/adventurer/png?seed=example" alt="Avatar" className="avatar" />
                    <h1>Welcome, {user.name}!</h1>
                    <button onClick={handleGetStarted}>Get Started</button>
                </>
            ) : (
                <h1>Loading...</h1> 
            )}
        </div>
    );
};

export default Welcome;