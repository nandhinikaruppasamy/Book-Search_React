import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import LoginRegister from "./components/LoginRegister";
import FindBooks from './components/FindBooks';
import Welcome from './components/Welcome';

function App() {
    return (
        <AuthProvider>
            <Router>
                <AppRoutes />
            </Router>
        </AuthProvider>
    );
}

function AppRoutes() {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/" element={user ? <Navigate to="/welcome" /> : <LoginRegister />} />
            <Route path="/welcome" element={user ? <Welcome /> : <Navigate to="/" />} />
            <Route path="/find-books" element={user ? <FindBooks /> : <Navigate to="/" />} />
        </Routes>
    );
}

export default App;