import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';

<div>

    <div className="container">
        <div className="config">
            <h4>Fan Club</h4>
        </div>

        <div>
            <h1 className="whitetext">Pago con tarjeta</h1>
        </div>

        <section className="ui">
            <div className="container-left">
                <form id="credit-card">
                    <div className="number-container">
                        <label>Número Tarjeta</label>
                        <input type="text" name="card-number" id="card-number" maxlength="19"
                            placeholder="xxxx - xxxx - xxxx - xxxx" required
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"/>
                    </div>
                    <div className="name-container">
                        <label>Propietario</label>
                        <input type="text" name="name-text" id="name-text" maxlength="30" placeholder="Nombre"
                            required
                            onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || event.key == ' '"/>
                    </div>
                    <div className="infos-container">
                        <div className="expiration-container">
                            <label>Validez</label>
                            <input type="text" name="valid-thru-text" id="valid-thru-text" maxlength="5"
                                placeholder="02/40" required
                                onkeypress="return event.charCode >=48 && event.charCode <= 57"/>
                        </div>
                        <div className="cvv-container">
                            <label>CVV</label>
                            <input type="text" name="cvv-text" id="cvv-text" maxlength="4" placeholder="1234" required
                                onkeypress="return event.charCode >=48 && event.charCode <= 57"/>
                        </div>
                    </div>
                    <input type="submit" value="Agregar" id="add"/>
                </form>
            </div>

        </section>

        <div className="greenButton">

            <input type="submit" value="Continuar" id="add"/>

        </div>



    </div>

</div>

