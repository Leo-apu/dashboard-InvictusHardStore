import React, { useEffect, useState } from 'react';

const LastCreatedPanel = ({ lastUser }) => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        if (lastUser) {
            fetch(`http://localhost:3300/api/users/${lastUser.id}`)
                .then(response => response.json())
                .then(data => {
                    setUserDetails(data);
                    console.log('Ruta de la imagen:', data.img); // Agregar console.log aquí
                });
        }
    }, [lastUser]);

    if (!userDetails) {
        return (
            <div className="panel">
                <h2>Último Usuario Creado</h2>
                <p>Cargando...</p>
            </div>
        );
    }

    return (
        <div className="ultimoUsuario">
            <h3 className='ultimoUsuario-text'>ULTIMO USUARIO CREADO</h3>
            <div className='detalles-UltimoUsario'>
                <p><strong>ID :</strong> {userDetails.id}</p>
                <p><strong>Nombre:</strong> {userDetails.first_name} </p>
                <p><strong>Apellido:</strong> {userDetails.last_name}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
                <img className="ultimoUsuario-Imagen" src={`http://localhost:3300/images/users/${userDetails.img}`} alt="Imagen de perfil del último usuario" />
            </div>
        </div>
    );
};

export default LastCreatedPanel;
