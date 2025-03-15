const API_BASE_URL = "http://localhost:8000"; // Backend URL

export const loginSuperAdmin = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/superadmin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // ✅ Ensures cookies (JWT token) are sent with the request
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Login failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};
