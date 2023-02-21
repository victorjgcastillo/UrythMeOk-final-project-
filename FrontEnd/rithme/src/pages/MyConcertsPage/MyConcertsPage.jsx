import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArtistCard from '../../components/Cards/ArtistCard';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import Navbar from '../../components/Navbar/Navbar';
import './MyConcertsPage.scss';

export default function MyConcertsPage() {
    
    const [myConcerts, setMyConcerts] = useState([]);

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user._id;

    const getInfo = async()=>{
        const res = await axios(`http://localhost:5000/users/${userId}`);
        setMyConcerts(res.data.tickets);
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div className='myConcertsPage'>
            <div className='header'>
                <HeaderAndBack back_url={'/'} name={'Mis conciertos'}/>
            </div>
            <div className='main'>
                {myConcerts.map((ticket,index)=> (
                    <Link to={'/my-concerts-detail/'+ticket?.concertId} key={index} style={{paddingLeft: 13, textDecoration: 'none'}}>
                        <ArtistCard concertId={ticket?.concertId}/>
                    </Link>
                ))}
            </div>
            <div className='footer'>
                <Navbar/>
            </div>
        </div>
    );
}
