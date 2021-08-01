import React from 'react';
import './styles/Welcome.css';
import { Link } from 'react-router-dom';
import Signupcustomer from './Signupcustomer';

function Welcome() {


    return (
        <>

            <div className="bgimage">
                <div className="container-main">
                    <h1 className="heading-home">Promotional Management System</h1>
                    <h3 className="add">We will show you the best deals in the town</h3>
                </div>
            </div>
            <div className="footer">
                <hr />
        COPYRIGHT &copy; AHSAN TARIQ
    </div>
        </>
    )
}

export default Welcome
