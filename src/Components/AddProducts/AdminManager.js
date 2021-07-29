import React from 'react';
import { Link } from 'react-router-dom';
import AddProducts from './AddProducts';
const AdminManager = () => {
    return (
        <div>
            <Link style={{ textDecoration: 'none' }} to='/admin'><h3 style={{ width: '200px' }} className='bg-danger text-white rounded'>Add Product</h3></Link> <br />
            <Link to='/delete' style={{ textDecoration: 'none' }}><h3 style={{ width: '200px' }} className='bg-danger text-white rounded'>Delete Product</h3></Link>
            <AddProducts></AddProducts>
        </div>
    );
};

export default AdminManager;