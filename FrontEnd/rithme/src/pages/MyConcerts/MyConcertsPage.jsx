import React from 'react';
import { useParams } from 'react-router-dom';
import ArtistCard from '../../components/Cards/ArtistCard';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import './MyConcertsPage.scss';

export default function MyConcertsPage() {
    
    const {id} = useParams();

    return (
        <div className='myConcertsPage'>
            <div className='header'>
                <HeaderAndBack back_url={'/'} name={'Mis conciertos'}/>
            </div>
            <div className='main'>
                <ArtistCard concertId={id} />
            </div>
            <div className='footer'>
                Aqui estara el nav
            </div>
        </div>
    );
}
