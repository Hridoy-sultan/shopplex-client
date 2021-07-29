import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddProduct.css';
const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState({});

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '189b9c6e4a60c576b2fb8000e89ab0cb');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.image)


            })
            .catch(function (error) {
                console.log(error);
            });

    }



    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            url: imageUrl.url
        }

        const url = `http://localhost:5001/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res =>
                console.log('send data server side'))
        alert('product Added')
        window.location.reload();
    }


    return (
        <div className='d-flex justify-content-evenly mt-5'>

            <form className='form border  text-primary ' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-primary px-5'>Add products</h3>

                <label htmlFor='Product Name'></label>
                <input name='name' placeholder='product title' {...register("name")} />
                <label htmlFor='product price'></label>
                <input name='price' placeholder='price' {...register("price")} />
                <br />
                <input type="file" onChange={handleImageUpload} />
                <br />
                <input className='bg-primary' type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;