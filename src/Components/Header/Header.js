import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../../App';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import logo from '../../logo/logo.png';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(Context);



    return (
        <div className='header-continar'>
            <img src={logo} alt="" />
            <ul className='d-flex justify-content-center menu '>
                <h3 className='text-primary pt-4 pe-3'>{loggedInUser.displayName}</h3>

                <Link to='/home' style={{ textDecoration: 'none' }}> <li >Home</li></Link>
                <Link to='/admin' style={{ textDecoration: 'none' }}> <li>Admin</li></Link>
                <Link to='/orders' style={{ textDecoration: 'none' }}><li>Orders</li></Link>
                <Link to='/login' style={{ textDecoration: 'none' }}> <li >
                    {
                        loggedInUser.emailVerified ? < button className='btn btn-primary' onClick={() => setLoggedInUser({})}>logout</button> :
                            < button className='btn btn-primary'>login</button>
                    }
                </li> </Link>


            </ul>
        </div>
    );
};

export default Header;