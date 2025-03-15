import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/Nav';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file
import Footer from './components/Footer/Footer';
import '../src/assets/cssfiles/all.min.css'

function App() {


  return (
  <>
    <Nav/>
    <Footer/>
  </>
  )
}

export default App
