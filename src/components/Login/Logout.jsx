import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../../axios/axios-clint"; // Make sure API is correctly configured
import { toast } from "react-toastify";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await API.post("/auth/logout",  {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                withCredentials: true, // ✅ Ensure cookies are sent and received
            });

            if (response.status === 200) {
                toast.success("Logout successful!");
                navigate("/login"); // ✅ Redirect to login page
            } else {
                toast.error("Unexpected response during logout.");
            }
        } catch (error) {
            console.error("Logout failed:", error.response?.data || error.message);
            toast.error("Logout failed. Please try again.");
        }
    };

    return (
        <>
            <button onClick={handleLogout}>Log out</button>
        </>
    );
};

export default Logout;
