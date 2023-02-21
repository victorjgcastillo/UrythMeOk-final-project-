import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import Navbar from '../../components/Navbar/Navbar';
import './MyConcertPage.scss';

export default function MyConcertPage() {
    
    const {id} = useParams();

    const [myTicket, setMyConcert] = useState([]);

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user._id;

    const getInfo = async()=>{
        const res = await axios(`http://localhost:5000/concerts/${id}`);
        setMyConcert(res.data);
    }

    useEffect(() => {
        getInfo();
    }, [id]);

    return (
        <div className='myConcertPage'>
            <div className='header'>
                <HeaderAndBack back_url={'/my-concerts/'+userId} name={'Mis conciertos'}/>
            </div>
            <div className='main'>
                Concierto
            </div>
            <div className='footer'>
                <Navbar/>
            </div>
        </div>
    );
}
