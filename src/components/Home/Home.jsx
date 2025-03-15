import React, { useEffect } from "react";
import Herosection from "../Herosection/Herosection";
import "./home.css";
import Whychooseus from "../whychooseus/Whychooseus";
import MeetourTeachers from "../MeetourTeachersPart/MeetourTeachers";
import AOS from "aos";
import "aos/dist/aos.css";

import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Whatwedo from "../Whatwedo/Whatwedo";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true,
      startEvent: "DOMContentLoaded",
    });
    AOS.refresh();

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
    <>
      <ToastContainer />
      <div className="main " id="Home">
        <div data-aos="fade-up">
          <Herosection />
        </div>
        <div data-aos="fade-up">
          <Whychooseus />
        </div>
        <div data-aos="fade-up">
          <Whatwedo/>
        </div>
        
      </div>
    </>
  );
};

export default Home;
