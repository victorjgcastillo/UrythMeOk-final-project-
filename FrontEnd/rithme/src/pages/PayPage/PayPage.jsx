import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import { useNavigate, useParams } from 'react-router-dom';
import { API } from "../../shared/services/apiBackend";
import './PayPage.scss';
import axios from 'axios';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import Navbar from '../../components/Navbar/Navbar';

export default function PayPage() {
    const navigate = useNavigate();    

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user._id;

    const {concertId} = useParams();

    const [price,setPrice] = useState(0);
    const [artist,setArtist] = useState('');

    useEffect(()=>{
        const getConcertInfo = async() => {
            const concert = await axios.get('http://localhost:5000/concerts/'+concertId);
            setPrice(concert.data.price);
            setArtist(concert.data.artists[0].name)
        }
        getConcertInfo();
    },[])

    const validate = (values) => {
        const errors = {};
        
        if (!values.name) {errors.name = "Required"} 
        if (!values.email) {errors.email = "Required"} 
        if (!values.postalCode) {errors.postalCode = "Required"} 
        if (!values.creditCardNumber) {errors.creditCardNumber = "Required"} 
        if (!values.creditCardExpirationDate) {errors.creditCardExpirationDate = "Required"} 
        if (!values.creditCardCvv) {errors.creditCardCvv = "Required"} 
        if (!values.creditCardOwner) {errors.creditCardOwner = "Required"}
        
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            userId: "",
            concertId: "",
            numTickets: 1,
            name: "",
            email: "",
            postalCode: "",
            creditCardNumber: "",
            creditCardExpirationDate: "",
            creditCardCvv: "",
            creditCardOwner: ""
        },
        validate,
        onSubmit: (values) => {
            const {numTickets,name,email,postalCode,creditCardNumber,creditCardExpirationDate,creditCardCvv,creditCardOwner} = values;
            const reqBody = {userId,concertId,numTickets,name,email,postalCode,creditCardNumber,creditCardExpirationDate,creditCardCvv,creditCardOwner}

            API.post('/tickets', reqBody).then((res) => {
                const ticketId = res.data._id;
                console.log('Ticket added to tickets');

                const reqBodyUser = {userId, ticketId}
                API.put('/users/add-ticket', reqBodyUser).then((res) => {
                    console.log('Ticket added to User');
                }).catch((error)=> {
                    console.log(error.response.data.message)
                })

                const reqBodyConcert = {concertId, ticketId}
                API.put('/concerts/add-ticket', reqBodyConcert).then((res) => {
                    console.log('Ticket Added to concert');
                }).catch((error)=> {
                    console.log(error.response.data.message)
                })

                navigate("/concerts/buy2");

            }).catch((error)=> {
                console.log(error.response.data.message)
            })

              
        }
    });

    return (
        <div className="payPage"> 
            <div className='header'>
                <HeaderAndBack back_url={'/concerts/'+concertId} name={'Compras tus entradas'}/>
            </div>
            <div className='main'>
                <div className='pay-page__container'>
                    <div className='pay-page__container--title'>
                        <h3>Compra tus entradas</h3>
                    </div>
                    <form className='pay-page__container--info' onSubmit={formik.handleSubmit}>
                        <div className='label-div'>
                            <p>Entrada {artist}: {price}€</p>
                            <select  className="numEntradas" name="numTickets" value={formik.values.numTickets} onChange={formik.handleChange} onBlur={formik.handleBlur} style={{ display: 'block' }}>
                                <option value="1" label="1 Entrada" />
                                <option value="2" label="2 Entradas" />
                                <option value="3" label="3 Entradas" />
                                <option value="4" label="4 Entradas" /> 
                                <option value="5" label="5 Entradas" />
                                <option value="6" label="6 Entradas" />
                                <option value="7" label="7 Entradas" />
                                <option value="8" label="8 Entradas" />
                                <option value="9" label="9 Entradas" />
                                <option value="10" label="10 Entradas" />
                            </select>
                            <p>Gastos de gestión: 0.90€</p>
                            <div className='bar'></div>
                                <h3>{formik.values.numTickets*price+0.90}€</h3>
                            </div>
                            <h3 className='title'>Datos de Comprador</h3>
                            <div className='label-div'>
                                <input className="input" onChange={formik.handleChange} value={formik.values.name} id="name" name="name" onBlur={formik.handleBlur} placeholder="Nombre y Apellidos"/>
                                <input className="input" onChange={formik.handleChange} value={formik.values.email} id="email" name="email" onBlur={formik.handleBlur} placeholder="Email"/>
                                <input className="input" onChange={formik.handleChange} value={formik.values.postalCode} id="postalCode" name="postalCode" onBlur={formik.handleBlur} placeholder="Código Postal"/>
                            </div>
                            <h3 className='title'>Pago con tarjeta</h3>
                            <div className='label-div'>
                                <input className="input" onChange={formik.handleChange} value={formik.values.creditCardNumber} id="creditCardNumber" name="creditCardNumber" onBlur={formik.handleBlur} placeholder="Nº tarjeta"/>
                                <div className='divide'>
                                    <input  className="input-half" onChange={formik.handleChange} value={formik.values.creditCardExpirationDate} id="creditCardExpirationDate" name="creditCardExpirationDate" onBlur={formik.handleBlur} placeholder="mes / año"/>
                                    <input className="input-half" onChange={formik.handleChange} value={formik.values.creditCardCvv} id="creditCardCvv" name="creditCardCvv" onBlur={formik.handleBlur} placeholder="CVV"/>
                                </div>
                                <input className="input" onChange={formik.handleChange} value={formik.values.creditCardOwner} id="creditCardOwner" name="creditCardOwner" onBlur={formik.handleBlur} placeholder="Titular"/>
                            </div>
                            {formik.errors===undefined ? (<span className="error">All fields are required</span>) : null}
                            <div className='form-submit'>
                                <button className='submit-button' type="submit">Pagar</button>
                            </div>
                    </form>
                </div>    
            </div>
            <div className='footer'>
                <Navbar/>
            </div>
        </div>
    )
}

{/* <input onChange={formik.handleChange} value={formik.values.email} id="email" name="email" onBlur={formik.handleBlur} placeholder="email"/> */}
