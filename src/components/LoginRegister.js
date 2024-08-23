import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import './LoginRegister.css';

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const { login, register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            login(name, password) 
                .then(() => {
                    console.log("Login successful");
                    navigate('/welcome'); 
                })
                .catch((err) => {
                    console.error("Login failed", err);
                });
        } else {
            register(name, email, password) 
                .then(() => {
                    console.log("Registration successful");
                    setSuccessMessage("Registration successful! You can now log in.");
                    setTimeout(() => {
                        navigate('/'); 
                    }, 2000); 
                })
                .catch((err) => {
                    console.error("Registration failed", err);
                });
        }
    };

    return (
        <div className="auth-container">
            {successMessage ? (
                <div className="success-message">
                    <p>{successMessage}</p>
                </div>
            ) : (
                <>
                    <h2>{isLogin ? "Login" : "Register"}</h2>
                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Enter your name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </>
                        )}
                        {isLogin && (
                            <input
                                type="text"
                                placeholder="Enter your name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        )}
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">{isLogin ? "Login" : "Register"}</button>
                    </form>
                    <p onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                    </p>
                </>
            )}
        </div>
    );
};

export default LoginRegister;