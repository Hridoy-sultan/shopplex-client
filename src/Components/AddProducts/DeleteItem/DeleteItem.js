import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import DeleteProduct from './DeleteProduct';

const DeleteItem = () => {
    const [deleteItem, setDeleteItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/gifts')
            .then(res => res.json())
            .then(data => setDeleteItem(data)
            )
    }, [])

    return (
        <div>
            {
                deleteItem.map(item => <DeleteProduct item={item}></DeleteProduct>)
            }
        </div>
    );
};

export default DeleteItem;