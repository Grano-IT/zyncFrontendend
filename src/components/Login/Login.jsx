import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import API from "../../axios/axios-clint";
import qs from "qs"; // Import qs for encoding

const Login = () => {
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            // Convert data to x-www-form-urlencoded format
            const data = qs.stringify({
                username: email, // ✅ Ensure correct field name (FastAPI expects `username`)
                password: password,
            });

            const response = await API.post("/auth/super-admin/login", data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                withCredentials: true, // ✅ Ensure cookies are sent and received
            });

            console.log("Login Response:", response); // Debugging log

            if (response.status === 200) {
                toast.success("Login successful!");
                navigate("/fun"); // ✅ Redirect user after successful login
            } else {
                toast.error(`Unexpected response: ${response.status}`);
            }
        } catch (error) {
            console.error("Login Error:", error.response?.data);
            toast.error(error.response?.data?.detail?.[0]?.msg || "Login failed!");
        }
    };

    return (
        <>
            <ToastContainer />
            <section>
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
                                    value={email}
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
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
