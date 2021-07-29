import React from 'react';

const DeleteProduct = (props) => {
    const { name, _id, price } = props.item;
    const handleDelete = (event, id) => {
        fetch('http://localhost:5001/delete/' + id, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully');
            })
        alert(' Delete this Product?');
        window.location.reload();

    }

    return (
        <div>

            <div className=' text-primary border border-primary m-3'>
                <h4> Name: {name} </h4>
                <h4>Price :{price}</h4>
                <button className='btn btn-danger' onClick={(event) => handleDelete(event, _id)}>Delete</button>
            </div>

        </div>
    );
};

export default DeleteProduct;