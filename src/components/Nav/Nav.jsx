import React from 'react';
import { BrowserRouter, Link, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Sendcompany from '../sendcompanyname/Sendcompany';
import Logsam from '../Login/logsam';
import Fun from '../Login/fun';
import './Nav.css';
import Logout from '../Login/Logout';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="nav__section" >
            <nav className="navbar navbar-expand-lg mx-auto">
                <div className="container-fluid">
                    <Link to={'/'} className='navbar-brand fs-2'> Grano</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to={'/'} className='nav-link'> Home </Link>
                            </li>
                            {location.pathname !== '/Login' && (
                                <li className="nav-item">
                                    <Link className='nav-link' to={'/Login'}>Login</Link>
                                </li>
                            )}
                            {location.pathname !== '/Signup' && (
                                <li className="nav-item">
                                    <Link className='nav-link' to={'/Signup'}>Register</Link>
                                </li>
                            )}
                         
                                <li className="nav-item">
                                    <Link className='nav-link' to={'/Logout'}><Logout/></Link>
                                </li>
                       

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

const Nav = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Sendcompany' element={<Sendcompany />} />
                <Route path='/logsam' element={<Logsam />} />
                <Route path='/fun' element={<Fun />} />
                <Route path='/Logout' element={<Logout/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Nav;
