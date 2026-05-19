import React from 'react';
import { useEffect, useState } from 'react';
import { Outlet, Link ,NavLink} from "react-router-dom";

const Navbar = () => {
    
    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top">

                <div className="container-fluid">
                    <div className="mode" id='mode-an'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-sun-fill sun" viewBox="0 0 16 16" >
                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-moon-stars-fill moon" viewBox="0 0 16 16">
                            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                        </svg>
                    </div>

                    <NavLink to='#' href="#" className="navbar-brand logo"><img src="https://www.freepngimg.com/thumb/logo/70063-logo-travel-design-free-hq-image.png" alt="Company-logo" width='35px' /></NavLink>
                    
                    <div className="search-2">
                        <input type="search" name="search" id="search-2" placeholder='Search Destination' />
                    </div>

                    <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="purple" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>

                    <div className="collapse navbar-collapse" id='collapsed'>

                        <ul className="navbar-nav">
                            <li className="nav-item" id='nav1'>
                                <Link to="/" className="nav-link">
                                    <span className='nav1'>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Destination" className="nav-link">
                                    <span className='nav1'>Destination</span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Foregin' className='nav-link'>
                                    <span className='nav1'>Packages</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link dropdown">
                                    <span className='nav1 dropdown-toggle' data-bs-toggle='dropdown'>Holiday Ideas</span>
                                    <ul className='dropdown-menu d-menu'>
                                        <li>
                                            <Link className='dropdown-item d-text' to='/Interest'>Tourism Destination by Interest</Link>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                        </ul>
                        <br />
                        <form className="d1 mx-auto">
                            
                            <div className="search-1">
                           
                            </div>

                            <div width="100%">
                                <Link to="/Form" className='btn w-100 btn-outline-primary'>
                                    <span>Log in Or Create Account</span>
                                </Link>
                            </div>
                                <br />

                            <div className="second dropdown">
                                <button type='button' className='dropdown-toggle w-100 btn btn-outline-primary' data-bs-toggle='dropdown'>
                                        Our Location
                                </button>
                                <ul className='dropdown-menu w-100 d-menu'>
                                        <li>
                                            <Link  className='dropdown-item d-text' to='https://maps.app.goo.gl/i3ky4Nmf3z8jr3wk9'>Surat</Link>
                                        </li>
                                        <li>
                                            <Link className='dropdown-item d-text' to='#'>Ahemdabad</Link>
                                        </li>
                                        <li>
                                            <Link className='dropdown-item d-text' to='#'>Vadodra</Link>
                                        </li>
                                </ul>
                            </div>

                            <div className="mode" id='mode-de'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-sun-fill sun" viewBox="0 0 16 16" >
                                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-moon-stars-fill moon" viewBox="0 0 16 16">
                                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                                </svg>
                            </div>

                            

                        </form>
                    </div>

                </div>

            </nav>

            <Outlet />
        </>
    )
}

export default Navbar