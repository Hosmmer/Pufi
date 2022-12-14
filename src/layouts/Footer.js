// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logoPuff from '../assets/images/logo-footer.png';
import { Link } from 'react-router-dom';
import ImgCompra from '../assets/images/compra.png';
import ImgFacebock from '../assets/images/facebock.png';
import ImgInstagram from '../assets/images/instagram.png';
import ImgTwitter from '../assets/images/twitter.png';
import logo2 from '../assets/images/logo2.png';

type ItemsTextLink = {
    key: number,
    items?: array,
    styles?: array,
};
const TextLink = ({ items }: ItemsTextLink): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <Row>
                {items?.map((items, index) => (
                    <Link to="#">
                        <div class="container-fluid-footer">
                            <span className="titulo">{items.titleuRL}</span>
                        </div>
                    </Link>
                ))}
            </Row>
        </React.Fragment>
    );
};
const Footer = (): React$Element<any> => {
    const Footer_items1 = [
        {
            titleuRL: 'PUFI RAIN',
        },
        {
            titleuRL: 'PUFI PUFF',
        },
        {
            titleuRL: 'PUFI CART',
        },
        {
            titleuRL: 'PUFI NAP',
        },
    ];
    const Footer_items2 = [
        {
            titleuRL: 'CONTACTO',
        },
        {
            titleuRL: 'AYUDA',
        },
        {
            titleuRL: 'CÓMO COMPRAR',
        },
        {
            titleuRL: 'TÉRMINOS & CONDICIONES',
        },
        {
            titleuRL: 'TÉRMINOS & CONDICIONES',
        },
    ];
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="container-grid-footer1">
                    <div class="item item-1">
                        <Link to="#">
                                <span className="logo-footer">
                                    <img src={logoPuff} alt="logo" height="40" width="80" />
                                </span>
                        </Link>
                    </div>
                    <div class="item item-2 ">
                        <TextLink items={Footer_items1} />
                    </div>
                    <div class="item item-3 ">
                        <TextLink items={Footer_items2} />
                    </div>
                    <div class="item item-4">
                        <div class="container-fluid-footer">
                            <span className="titulo">
                                <div>COMPRA 100% SEGURA</div>
                            </span>
                            <img src={ImgCompra} alt="Compra con la garantía de PUFI" />
                        </div>
                    </div>

                    <div class="item item-5 ">
                    <div class="container-social">
                    
                    <div class="list-img">
                    <span className="titulo">SIGUENOS EN</span>
                        <img src={ImgFacebock} alt="Instagram"/>
                        <img src={ImgTwitter} alt="Instagram" />
                        <img src={ImgInstagram} alt="Instagram"/>
                    </div>
                    </div>
                    </div>
                </div>
                <br/>
                <div className="container-grid-footer2">
                    <div class="item item-1">
                    <div className="copyright">
                    PUFI Corpyright 2017 - Todos los derechos reservados
                    </div>
                    </div>
                    <div class="item item-2 ">
                    <div class="brandlive"> 
                    <img src={logo2} alt="logo2"/>

                    </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
