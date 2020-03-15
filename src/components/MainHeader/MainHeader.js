import React, { useEffect, useState, useRef } from 'react';
import NavBar from './sub-components/NavBar/NavBar';
import SearchBar from './sub-components/Search/Search';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {
    Button,
    Container,
    Image,
    List,
    Menu,
    Responsive,
    Segment
} from 'semantic-ui-react'

import './MainHeader_styles.scss';

function MainHeader() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, isSetMenuOpen] = useState(false)
    const menuRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        }
    }, []);

    const handleScroll = () => {

    };

    function toggleSidebar() {

    }

    return (
        <>

            <header className="main-header">

                <Container>
                    <div className="main-header__inner">
                        <div className="main-header__col main-header__logo">
                            <Link to="/" style={{ 'display': 'flex', 'align-items': 'center' }}>
                                <Image size='mini' src='/assets/images/logo/logo-neutral.png' style={{ marginRight: '1.5em' }} />
                                Melbourne Tours
                            </Link>
                        </div>

                        <div className="main-header__col main-header__search-bar">
                            <SearchBar />
                        </div>

                        <div className="main-header__col main-header__navbar">
                            <NavBar open={isMenuOpen} />
                        </div>

                        {/* <div onClick={toggleSidebar}> Toggle sidebar
                            </div> */}


                        {/* <div className="main-header__mobile-menu">
                        <div>Picture</div>
                        <h3>Aurelian spodarec</h3>
                    </div> */}
                    </div>
                </Container>


            </header>
        </>
    )
}

export default MainHeader;