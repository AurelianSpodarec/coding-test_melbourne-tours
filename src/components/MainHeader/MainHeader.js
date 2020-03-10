import React from 'react';
import NavBar from './sub-components/NavBar/NavBar';
import Search from './sub-components/Search/Search';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

function MainHeader() {
    return (
        <Menu>
            <Container>
                <Menu.Item as='a' header>
                    <Image size='mini' src='/assets/images/logo/logo-neutral.png' style={{ marginRight: '1.5em' }} />
                    Melbourne Tours
                </Menu.Item>

                <Search />

                <NavBar />

            </Container>
        </Menu>
    )
}

export default MainHeader;