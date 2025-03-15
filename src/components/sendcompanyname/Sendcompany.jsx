import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Sendcompany.css";

// ✅ Supabase Client with your provided credentials
const supabase = createClient(
  "https://lxqzxxohnxkrorurirlo.supabase.co", // Supabase URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cXp4eG9obnhrcm9ydXJpcmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwODc3NTYsImV4cCI6MjA1NjY2Mzc1Nn0.WWSsRzkzxQ5cE_DTn0tcuAyfqD6WiUoezYO-R2fuPtg" // Supabase Anon Key
);

const Sendcompany = () => {
  const [companyCode, setCompanyCode] = useState("");
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState("");
  const [display, setDisplay] = useState("none");

  const submit = async (e) => {
    e.preventDefault();

    if (!companyCode.trim()) {
      toast.error("Company code is required.");
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("createCompanySchema", {
        body: { company_code: companyCode },
      });

      if (error) throw error;

      setMsg("Company schema created successfully");
      setColor("green");
      setDisplay("block");

      toast.success("Company schema created successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (err) {
      console.error("Error:", err);
      setMsg(err.message || "An error occurred");
      setColor("red");
      setDisplay("block");

      toast.error("Error creating company schema.");
    }
  };

  return (
    <>
      <section>
        <ToastContainer />
        <div className="Signup__part d-flex justify-content-center align-items-center">
          <div className="form-container col-8">
            <div className="logo-container">Enter Company Code for Registration</div>
            <form className="form" onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="company">Company Code</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter company code"
                  value={companyCode}
                  onChange={(e) => setCompanyCode(e.target.value)}
                  required
                />
              </div>
              <p style={{ display, color }} className="mt-2">{msg}</p>
              <button className="form-submit-btn" type="submit">Verify</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sendcompany;
