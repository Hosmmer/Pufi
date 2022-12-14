// @flow
import React from 'react';
import { Row, Col, Card, Carousel} from 'react-bootstrap';
import ItemsSlider from '../components/ItemsSlider';
import ButtonImgLeft from '../components/ButtonImgLeft';
import InstagramRow from '../components/InstagramRow';
import SuscribeteRow from '../components/SuscribeteRow';
import VerMas from '../components/VerMas';
import img1 from '../assets/images/sesion1/img1.jpg';
import img2 from '../assets/images/sesion1/img2.png';
import img3 from '../assets/images/sesion1/img3.jpg';
import img4 from '../assets/images/sesion1/img4.jpg';
import img5 from '../assets/images/sesion1/img5.jpg';
import img2_2 from '../assets/images/sesion1/img2_2.png';
import img2_3 from '../assets/images/sesion1/img2_3.png';
import img2_4 from '../assets/images/sesion1/img2_4.png';
import s2img1 from '../assets/images/sesion2/img1.jpg';
import s2img2 from '../assets/images/sesion2/img2.jpg';
import s2img3 from '../assets/images/sesion2/img3.jpg';
import s2img4 from '../assets/images/sesion2/img4.jpg';
import s2img5 from '../assets/images/sesion2/img5.jpg';
import s2img6 from '../assets/images/sesion2/img6.jpg';

import {
    itemsSlides,
    itemsInstagram, 
    itemsSuscribite,
} from '../constants/menu';


const Slides= ({items}) => {
    return (
        <Card>
            <Card.Body>
                <Carousel indicators={true} controls={false}>
                { items?.map((p, index) => (
                    <Carousel.Item key={p.key}> 
                      <ItemsSlider items={
                        {key: p.key,mensaje: p.mensaje,image: p.image}
                        }/>
                    </Carousel.Item>
                      ))
                    }
                </Carousel>{' '}
            </Card.Body>{' '}
        </Card>
    );
};
const Pufi = (): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Slides items={itemsSlides} />
                </Col>
            </Row>
            <Row>
            <Col lg={12}>
            <div className="grid-container-pufi-level1">
                <div class="item item-1"><img
                    className="img"
                    src={img1}
                    alt="Third slide"
                /><div className="mask"></div>
                <ButtonImgLeft mensaje={'S H O P'} />
                </div>
                <div class="item item-2">
                    <img
                    className="img"
                    src={img2}
                    alt="Third slide"
                />
                <VerMas titulo={'Pufi RAIN'} descripcion={'Descripción del producto. Este es un texto descriptivo de la sección.'}/>
                </div>
                <div class="item item-img2-2"> <img
                    className="img"
                    src={img2_2}
                    alt="Third slide"
                />
                <VerMas titulo={'Pufi PUFF'} descripcion={'Descripción del producto. Este es un texto descriptivo de la sección.'}/>
                </div>
                <div class="item item-1"><img
                    className="img"
                    src={img3}
                    alt="Third slide"
                /><div className=" mask maskr"></div></div>
                <div class="item item-1"><img
                    className="img"
                    src={img4}
                    alt="Third slide"
                /><div className="mask"></div></div>
                <div class="item item-img2-2"><img
                    className="img"
                    src={img2_3}
                    alt="Third slide"
                />
                <VerMas titulo={'Pufi CART'} descripcion={'Descripción del producto. Este es un texto descriptivo de la sección.'}/>
                </div>
                <div class="item item-img2-2"><img
                    className="img"
                    src={img2_4}
                    alt="Third slide"
                />
                <VerMas titulo={'Pufi NAP'} descripcion={'Descripción del producto. Este es un texto descriptivo de la sección.'}/>
                </div>
                <div class="item item-1"><img
                    className="img"
                    src={img5}
                    alt="Third slide"
                /><div className=" mask maskr"></div></div>               
                 </div>
            </Col>
            </Row>
            <Row>
            <Col lg={12}>
            <div className="grid-container-pufi-level2">
            <div class="item item-1"></div>
            <div class="item item-2">
                <div class="item item-2-1">
                    <img
                    className="img"
                    src={s2img1}
                    alt="Third slide"
                /></div>
                <div class="item item-2-1">
                    <img
                    className="img"
                    src={s2img2}
                    alt="Third slide"
                /></div> 
                <div class="item item-2-1"><img
                    className="img"
                    src={s2img3}
                    alt="Third slide"
                /></div>
                <div class="item item-2-1"><img
                    className="img"
                    src={s2img4}
                    alt="Third slide"
                /></div> 
                  <div class="item item-2-1">
                <img
                    className="img"
                    src={s2img5}
                    alt="Third slide"
                /></div>
                <div class="item item-2-1">
                <img
                    className="img"
                    src={s2img6}
                    alt="Third slide"
                /></div> 
            </div>
            <div class="item item-3 grid-featured-top">
            <InstagramRow items={itemsInstagram.instagram} />
            </div>
            <div class="item item-4"></div>
            <div class="item item-6 grid-featured-bottom " >
                <SuscribeteRow items={itemsSuscribite.suscribite} />
            </div>
            </div>
            </Col>
            </Row>               

        </React.Fragment>
    );
};

export default Pufi;
