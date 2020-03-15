import React, { useEffect, useState, useRef } from 'react';
import NavBar from './sub-components/NavBar/NavBar';
import SearchBar from './sub-components/Search/Search';

import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';

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
    let location = useLocation();

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

            {/* <header className={`main-header ${location.pathname == '/' ? "naked" : ""}`}> */}
            <header className={`main-header naked`}>
                <Container>
                    <div className="main-header__inner">
                        <div className="main-header__col main-header__logo">
                            <Link to="/" style={{ 'display': 'flex', 'align-items': 'center', 'font-size': '1.5em', 'font-weight': 'bold', 'color': 'white' }}>
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

                    </div>
                </Container>


            </header>
        </>
    )
}

export default MainHeader;