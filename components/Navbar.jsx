import React from 'react';

function Navbar() {
    return (
        <nav>
        <div className="container">
            <div className="nav-caja2">
                <a href="/"><i className="fa fa-bars"></i></a>
            </div>
    
            <img className="imgLogo" src="/images/logo-InvictusHardStore-2.png" alt="Logo"/>
    
            <div className="nav-caja">
                <ul>
                    <li>
                        <a className="nav-lista" href="http://localhost:3300/">Pagina Principal</a>
                    </li>
                </ul>
            </div>
    
            <div className="nav-icono">
    

            </div>
        </div>
    </nav>
    );
}

export default Navbar;


