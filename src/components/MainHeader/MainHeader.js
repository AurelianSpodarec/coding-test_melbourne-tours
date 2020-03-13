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
} from 'semantic-ui-react'

function MainHeader() {
    const [isSticky, setIsSticky] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        }
    }, []);

    const handleScroll = () => {

        // if (ref && ref.current && ref.current.getBoundingClientRect()) {
        //     setIsSticky(ref.current.getBoundingClientRect().top <= top);
        // }
    };

    // console.log("MMMMMMMMM", menuRef.getBoundingClientRect(), isSticky)

    return (
        <Menu ref={menuRef} className={` ${isSticky && 'main-header--sticky'}`}>
            <Container>
                <Link to="/">
                    <Menu.Item as='a' header>
                        <Image size='mini' src='/assets/images/logo/logo-neutral.png' style={{ marginRight: '1.5em' }} />
                        Melbourne Tours
                </Menu.Item>
                </Link>

                <SearchBar />

                <NavBar />

            </Container>
        </Menu>
    )
}

export default MainHeader;