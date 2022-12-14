// @flow
import React, { Suspense, useCallback, useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

// actions
import { changeSidebarType } from '../redux/actions';

import * as layoutConstants from '../constants/layout';


// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('./Topbar'));

const Footer = React.lazy(() => import('./Footer'));

const loading = () => <div className=""></div>;



const VerticalLayout = ({ children }): React$Element<any> => {
    const dispatch = useDispatch();

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    /**
     * Open the menu when having mobile screen
     */
    const openMenu = () => {
        setIsMenuOpened((prevState) => {
            setIsMenuOpened(!prevState);
        });

        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.remove('sidebar-enable');
            } else {
                document.body.classList.add('sidebar-enable');
            }
        }
    };

    const updateDimensions = useCallback(() => {
        // activate the condensed sidebar if smaller devices like ipad or tablet
        if (window.innerWidth <= 920) {
            dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
        } else if (window.innerWidth > 920) {
            dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED));
        }
    }, [dispatch]);

    useEffect(() => {
        // activate the condensed sidebar if smaller devices like ipad or tablet
        if (window.innerWidth <= 920) {
            dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
        }

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [dispatch, updateDimensions]);

    return (
        <>
            <div className="wrapper">
                <div className="content-page">
                    <div className="content">
                        <Suspense fallback={loading()}>
                            <Topbar openLeftMenuCallBack={openMenu} hideLogo={true} />
                        </Suspense>
                        <Container fluid>
                            <Suspense fallback={loading()}>{children}</Suspense>
                        </Container>
                    </div>

                    <Suspense fallback={loading()}>
                        <Footer />
                    </Suspense>
                </div>
            </div>
        </>
    );
};
export default VerticalLayout;
