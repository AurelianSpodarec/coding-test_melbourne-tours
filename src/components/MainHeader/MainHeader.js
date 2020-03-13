import React from 'react';
import NavBar from './sub-components/NavBar/NavBar';
import SearchBar from './sub-components/Search/Search';

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
                <Menu.Item as='a' header>
                    <Image size='mini' src='/assets/images/logo/logo-neutral.png' style={{ marginRight: '1.5em' }} />
                    Melbourne Tours
                </Menu.Item>

                <SearchBar />

                <NavBar />

            </Container>
        </Menu>
    )
}

export default MainHeader;