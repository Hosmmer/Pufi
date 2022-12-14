// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type ItemsInstragram = {
    title: string;
    titleuRL: string;
    url: string;
};

const InstagramRow = ({items }:ItemsInstragram): React$Element<React$FragmentType> => {
    return (
    <React.Fragment>
             <Link to={items.url}>
                          <div className="navbar-dark-instragram">
                            <div className="titulo">{items.title}</div>
                            <div className="titleurl">{items.titleuRL}</div>
                            </div>
                    </Link>
        </React.Fragment>
    );
};

export default InstagramRow;
