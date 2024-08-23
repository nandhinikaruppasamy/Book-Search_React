import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (name, password) => {
        if (name && password) {
            const userData = { name }; 
            setUser(userData);
            return userData;
        } else {
            throw new Error("Invalid name or password");
        }
    };

    const register = async (name, email, password) => {
        if (name && email && password) {
            const userData = { name }; 
            setUser(userData);
            return userData;
        } else {
            throw new Error("Registration failed");
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};