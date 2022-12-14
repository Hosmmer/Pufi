// @flow
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components;
type ButtonMensajeProps = {
    mensase: string,
    image: string,
};
const ButtonImgRight = ({ mensaje }: ButtonMensajeProps) => {
    return (
        <React.Fragment>
            <Carousel.Caption>
                
                <Link to="#">
                    <div className="navbar-dark">
                        <div className="navbar-dark-slider">
                            <div className="button">{mensaje}</div>
                        </div>
                        
                    </div>
                </Link>
            </Carousel.Caption>
        </React.Fragment>
    );
};
export default ButtonImgRight;

