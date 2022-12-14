// @flow
import React from 'react';
import AppMenu from '../layouts/Menu';
import classNames from 'classnames';
import { Collapse } from 'react-bootstrap';
import { getMenuItems } from '../helpers/menu';
import { Link } from 'react-router-dom';
import {  Col } from 'react-bootstrap';
import logoPuff from '../assets/images/logo.png';
import {menuLogos} from '../constants/menu';
/*
 * get options
 */

type SearchResultItem = {
    id: number,
    title: string,
    redirectTo: string,
    icon: string,
};

type TopbarSearchProps = {
    items: Array<SearchResultItem>,
};
/**
 * TopbarMenu
 */
const TopBar_styles = {
    button: {
        flex: 1,
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderLeftColor: 'white',
        paddingLeft: 20,
        paddingRight: 40,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 1,
        paddingHorizontal: 12,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
        alignSelf: 'center',
        padding: '0 20px',
    },
};
const TopBar_alignItems = {
        row: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            right: 0,
            zIndex: 10,
            flex:1,
        },
        logo:{
            position: 'relative',
            right: 0,
            flex:1,
            zIndex: 10   
        }
};
const TopbarMenu = (props: TopbarSearchProps): React$Element<any> => {
    const inputTheme = 'dark';
    return (
        <>
            <React.Fragment>
                <div className="topnav">                   
                    <Col md={3} style={TopBar_alignItems.logo}>
                                <Link to="#">
                                    <div className="navbar-dark">
                                        <span className="topnav-logo-menu-sm">
                                            <img src={logoPuff} alt="logo" height="90" width="135" />
                                        </span>
                                    </div>
                                </Link>
                            </Col>
                        <div style={TopBar_alignItems.row}>

                        {menuLogos?.map((items, index) => (
                                <Link to="#">
                                        <span className="topnav-logo-menu">
                                            <img src={items.images} alt="logo" height="40" width="40" />
                                        </span>
                                    <div style={TopBar_styles.text}>
                                        <strong>{items.mensaje}</strong>
                                    </div>
                                </Link>
                             ))
                            }

                        </div>
                        <nav
                            className={classNames('navbar', 'navbar-expand-lg', 'topnav-menu', 'navbar-' + inputTheme)}>
                            <Collapse in={props.isMenuOpened} className="navbar-collapse" id="topnav-menu-content">
                                <div>
                                    <AppMenu menuItems={getMenuItems()} />
                                </div>
                            </Collapse>
                        </nav>                      
                        </div>
            </React.Fragment>
        </>
    );
};

export default TopbarMenu;
