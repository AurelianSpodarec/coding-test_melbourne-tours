import React, { useContext, useState } from 'react';
import {
    Button,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Dropdown,
    Image,
    Icon,
    Modal
} from 'semantic-ui-react'
import { AuthContext } from './../../../../context/ContextAuth';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import menuOptions from './menuOptions';

import AuthModal from './../AuthModal/AuthModal';

const NavBar = (props) => {
    const [openAuthModal, setOpenAuthModal] = useState(false);

    const { authData } = useContext(AuthContext);

    const dropdownTrigger = (
        <span>
            {authData.user && authData.user.profile ?
                <Image avatar src={authData.user.profile} /> :
                <Icon name="user circle" />}
            {authData.user && authData.user.email}
        </span>
    )

    function onOpenModal() {
        setOpenAuthModal(true)
    }

    function onCloseModal() {
        setOpenAuthModal(false)
    }

    return (
        <>
            <Menu.Menu position='right'>
                <Menu.Item as='a' active><Link to="/">Home</Link></Menu.Item>
                <Menu.Item as='a'><Link to="/tours">Tours</Link></Menu.Item>

                {authData.isAuthenticated ?
                    <Dropdown
                        trigger={dropdownTrigger}
                        options={menuOptions}
                        pointing='top left'
                        icon={null}
                    />
                    :
                    <Menu.Item position='right'>
                        <Button as='a' color="red" inverted>Log in</Button>
                        <Button as='a' color="red" onClick={onOpenModal
                        } style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                    </Menu.Item>
                }

            </Menu.Menu>

            <AuthModal open={openAuthModal} close={onCloseModal} />
        </>
    );
}

export default NavBar;