import React, { useState } from 'react';
import './Login.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: mail, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || "Login failed");
            }

            toast.success("Login Successful!");
            localStorage.setItem("token", data.token);
           // Redirect to dashboard
            navigate("/fun", { state: { successMessage: "Login Successful!" } });

        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        }
    };

    return (
        <>
            <section>
                <ToastContainer />
                <div className="Signup__part d-flex justify-content-center align-items-center">
                    <div className="form-container col-8">
                        <div className="logo-container">Welcome Back</div>
                        <form className="form" onSubmit={submit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <div className="pass-div d-flex">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="login__pass"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="password-show-but"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "🙈" : "🙉"}
                                    </button>
                                </div>
                            </div>

                            <button className="form-submit-btn" type="submit">Login</button>
                            {error && <p className="error-text">{error}</p>}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
