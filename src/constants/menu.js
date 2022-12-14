import CuadroPuff from '../assets/images/puff.png';
import CuadroCart from '../assets/images/cuadro_cart.png';
//import CuadroRain from '../assets/images/cuadro_rain.png';
import colmns from '../assets/images/col.png';
import logoBtnPuff from '../assets/images/logo-puff.png';
import logoBtnRain from '../assets/images/logo-rain.png';
import logoBtnCart from '../assets/images/logo-cart.png';
import logoBtnNap from '../assets/images/logo-nap.png';
import img1 from '../assets/images/sesion1/img1.jpg';
//import img2 from '../assets/images/sesion1/img2.png';

const imgeSessionOne_1 = [
    {
        key: '1',
        mensaje: 'S H O P',
        descripcion:'',
        ver:'',
        images: img1,
        height: 370,
        width: 370,
    }
    /*
    {
        key: '2',
        mensaje: 'Pufi RAIN',
        descripcion:'22',
        ver:'> Ver más',       
        images: img2,
        height: 370,
        width: 370,
    }
    */
];
const imgeSessionOne_2 = [
    {
        key: '1',
        mensaje: 'Pufi PUFF',
        images: CuadroPuff,
        height: 400,
        width: 400,
    },
    {
        key: '2',
        mensaje: '',
        images: 'https://cdn.pixabay.com/photo/2016/10/31/02/29/woman-1784755_960_720.jpg',
        height: 400,
        width: 400,
    },
];
const imgeSessionOne_3 = [   
    {
        key: '1',
        mensaje: '',
        images: 'https://cdn.pixabay.com/photo/2014/03/12/18/45/boys-286245_960_720.jpg',
        height: 400,
        width: 400,
    },
    {
        key: '2',
        mensaje: 'Pufi Cart',
        images: CuadroCart,
        height: 400,
        width: 400,
    },
];
const itemsSlides = [
    {
        key: 1,
        mensaje: 'ESTAR COMÓDO, NUNCA FUE TAN FACÍL.1',
        image: 'https://cdn.pixabay.com/photo/2016/11/18/19/40/woman-1836601_960_720.jpg',
    },
    {
        key: 2,
        mensaje: 'ESTAR COMÓDO, NUNCA FUE TAN FACÍL.2',
        image: 'https://cdn.pixabay.com/photo/2016/11/18/19/40/woman-1836601_960_720.jpg',
    },
    {
        key: 3,
        mensaje: 'ESTAR COMÓDO, NUNCA FUE TAN FACÍL.3',
        image: 'https://cdn.pixabay.com/photo/2016/11/18/19/40/woman-1836601_960_720.jpg',
    }
];
const itemsInstagram = {
    instagram: {
        key: '1',
        title: 'INSTAGRAM',
        titleuRL: '#ESPUFI',
        url: 'https://www.instagram.com/'    
       }
}

const itemsSuscribite = {
    suscribite: {
        key: '1',
        title: 'NEWSLETTER',
        titleuRL: 'SUSCRIBITE',
        notice: 'Y enterate de todas las novedades',
        columns:colmns,
        width: '200',
        height: '300',       
       }
}

const imgSessionTwo_1 = [
    {
        key: '1',
        mensaje: '',
        images: 'https://cdn.pixabay.com/photo/2017/04/10/16/40/vacation-2218989_960_720.jpg',
        height: 200,
        width: 100,
    },
    {
        key: '2',
        mensaje: '',
        images: 'https://cdn.pixabay.com/photo/2016/11/08/05/25/steak-1807532_960_720.jpg',
        height: 200,
        width: 100,
    },
    {
        key: '3',
        mensaje: '',
        images: 'https://cdn.pixabay.com/photo/2020/05/18/08/56/in-the-golden-season-5185312_960_720.jpg',
        height: 200,
        width: 100,
    }
]
const imgSessionTwo_2 = [
    {
        key: '1',
        mensaje: '',
        images: 'https://cdn.pixabay.com/photo/2018/03/10/17/16/woman-3214594_960_720.jpg',
        height: 200,
        width: 100,
    },
    {
        key: '2',
        mensaje: '',
        images: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_960_720.jpg',
        height: 200,
        width: 100,
    },
     {
        key: '3',
        mensaje: '',
        images: 'https://cdn.pixabay.com/photo/2015/11/18/15/44/france-1049333_960_720.jpg',
        height: 200,
        width: 100,
    }
];
const menuLogos = [
    {
        key: '1',
        mensaje: 'PUFI PUFF',
        images: logoBtnPuff
    },
    {
        key: '2',
        mensaje: 'PUFI RAIN',
        images: logoBtnRain
    },
    {
        key: '3',
        mensaje: 'PUFI CART',
        images: logoBtnCart
    },
    {
        key: '4',
        mensaje: 'PUFI NAP',
        images: logoBtnNap
    }
];
export {
    itemsSlides,
    itemsInstagram, 
    itemsSuscribite,
    imgeSessionOne_1,
    imgeSessionOne_2,
    imgeSessionOne_3,
    imgSessionTwo_1,
    imgSessionTwo_2,
    menuLogos
};