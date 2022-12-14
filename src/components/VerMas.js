// @flow
import React from 'react';
import { Link } from 'react-router-dom';

// components;
type Props = {
    titulo: string,
    descripcion: string
};
const VerMas = ({ titulo, descripcion }: Props) => {
    return (
        <React.Fragment>
                <Link to="#">
                            <div className="navbar-dark-vermas">
                            <div className="titulo">{titulo}</div>
                            <div className="base">____</div>
                            <div className="descripcion">{descripcion}</div>
                            <div className="button">Ver más</div>
                          </div>
                </Link>
        </React.Fragment>
    );
};
export default VerMas;