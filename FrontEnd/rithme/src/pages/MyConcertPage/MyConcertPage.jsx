import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import './MyConcertPage.scss';

export default function MyConcertPage() {
    
    const {id} = useParams();

    const [myTicket, setMyConcert] = useState([]);

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
                <HeaderAndBack back_url={'/'} name={'Mis conciertos'}/>
            </div>
            <div className='main'>
                Concierto
            </div>
        </div>
    );
}
