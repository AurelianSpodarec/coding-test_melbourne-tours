import React from 'react';
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
    return (
        <Menu>
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