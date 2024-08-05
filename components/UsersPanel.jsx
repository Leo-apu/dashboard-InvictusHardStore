import React, { useEffect, useState } from 'react';
import { FaUserCircle} from 'react-icons/fa';

const UsersPanel = () => {
    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3300/api/users/')
            .then(response => response.json())
            .then(data => {
                setTotalUsers(data.count);
                setUsers(data.users);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                // Manejo de errores
            });
    }, []);

    return (
        <div className="usersPanel">
            <div className="usuarios">
            <h3 className='seccionUsuario'><FaUserCircle /> USUARIOS </h3>
            <h3>Total de usuarios: {totalUsers}</h3>
            </div>
            <table className="usersTable">
                <thead >
                    <tr  >
                        <th className='campos'>ID</th>
                        <th className='campos'>Nombre</th>
                        <th className='campos'>Email</th>
                        <th className='campos'>Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className='filasUser'>{user.id}</td>
                            <td className='filasUser'>{user.name}</td>
                            <td className='filasUser'>{user.email}</td>
                            <td className='filasUser'>{user.detail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersPanel;
