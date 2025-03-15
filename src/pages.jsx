import React, { useState } from "react";
import { loginSuperAdmin } from "../api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginSuperAdmin(email, password);
            console.log("Login Successful!", response);
            // Save token to local storage (if needed)
            localStorage.setItem("token", response.token);
        } catch (err) {
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div>
            <h2>Super Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Login;