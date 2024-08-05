import React from 'react';
import { FaFacebookSquare, FaGooglePlusSquare, FaWhatsappSquare } from 'react-icons/fa';
import { FaMapMarkerAlt, FaClock, FaHeadset } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className="icono" style={{ display: 'flex', justifyContent: 'flex-end' }} >
                <FaFacebookSquare size={40} />
                <FaGooglePlusSquare size={40} />
                <FaWhatsappSquare size={40} />
            </div>

            <div className="containerFooter">
                <div className="seccion">
                    <FaMapMarkerAlt size={30} />
                    <p>Direccion: Gral. Alvear N°244</p>
                    <p>San Salvador de Jujuy</p>
                </div>
                <div className="seccion">
                    <FaClock size={30} />
                    <p>Horarios de Atención</p>
                    <p>Lunes a Viernes 8 a 12:30 Hs. y 18 a 21:30 Hs.</p>
                </div>
                <div className="seccion">
                    <FaHeadset size={30} />
                    <p>Atención al Cliente: 0810-667-8392</p>
                    <p>consultas@invictusHardStore.com.ar</p>
                    <p>Lunes a viernes de 8 a 18hs.</p>
                </div>
            </div>

            <p className="copyright">Copyright © 1991-2024 Invictus Hard Store S.R.L.</p>
        </footer>
    );
}

export default Footer;
