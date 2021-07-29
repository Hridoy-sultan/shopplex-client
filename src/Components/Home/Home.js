import React, { useEffect, useState } from 'react';
import GiftItem from '../GiftItem/GiftItem';
import Checkout from '../Checkout/Checkout';
import { Link, Route, Router, useHistory, useLocation } from 'react-router-dom';
const Home = () => {
    const history = useHistory();
    const [items, setItems] = useState([]);
    const [gifts, setGifts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/gifts')
            .then(res => res.json())
            .then(data => setItems(data)
            )
    }, [])
    const handleShopBtn = (giftInBtn) => {
        const newGifts = [...items, giftInBtn]
        setGifts(newGifts)
        history.push('/checkout')
    }

    return (
        <div className='d-flex flex-wrap bg-secondary '>

            {
                items.map(item => <div> <GiftItem handleButton={() => handleShopBtn(gifts)} gift={item}></GiftItem></div>)
            }

        </div>

    );
};

export default Home;