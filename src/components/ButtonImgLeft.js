// @flow
import React from 'react';
import { Link } from 'react-router-dom';

// components;
type ButtonMensajeProps = {
    mensase: string
};
const ButtonImgLeft = ({ mensaje }: ButtonMensajeProps) => {
    return (
        <React.Fragment>
            <Link to="#">
                    <div className="navbar-dark">
                        <div className="navbar-dark-slider">
                            <div className="button-left"><p className="p">{mensaje}</p></div>
                        </div>
                        
                    </div>
                </Link>
        </React.Fragment>
    );
};

export default ButtonImgLeft;
