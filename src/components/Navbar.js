import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/">
                        <a className="navbar-brand" href="#">Welcome</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/home">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                            </Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
          </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/signupcustomer">
                                        <li><a className="dropdown-item" href="#">Sign up as Customer</a></li>
                                    </Link>
                                    <Link to="/signuprestaurant">
                                        <li><a className="dropdown-item" href="#">Sign up as Restaurant</a></li>
                                    </Link>
                                    <li><hr className="dropdown-divider" /></li>
                                    <Link to="/loginadmin">
                                        <li><a className="dropdown-item" href="#">Login as admin</a></li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
