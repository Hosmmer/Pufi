// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import InputEmail from '../components/InputEmail';
type ItemsSuscribite = {
    key:number;
    title: string;
    titleuRL: string;
    suscribite: string;
    url: string;
    colmns: string;
    width: number;
    height: number;
};

const SuscribiteRow = ({items }:ItemsSuscribite): React$Element<React$FragmentType> => {
    return (
    <React.Fragment>
                    <Link to="#">
                        <div className="navbar-suscribite">
 
                                    <div className="title">
                                    <p> {items.title}</p>
                                    </div>
                                    <div className="suscribite">
                                       {items.titleuRL}
                                    </div>  
                                        <div className="notice">
                                        {items.notice}
                                     </div>
                                        
                                        <InputEmail/>
                                     
                        </div>
                    </Link>
         </React.Fragment>
    );
};

export default SuscribiteRow;
