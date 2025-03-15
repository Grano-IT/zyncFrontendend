import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Fun = () => {

  const location = useLocation();
   const navigate = useNavigate();
  


  
  useEffect(()=>{
if (location.state?.successMessage) {
      toast.success(location.state.successMessage, {
        position: "top-right",
        autoClose: 3000,
      });
      

      // Clear the state to prevent message repetition
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);




  return (
    <div style={{height:"100vh",display:'flex', justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
      <h1>Durai Gay</h1>
         <ToastContainer />
    </div>
  )
}

export default Fun
