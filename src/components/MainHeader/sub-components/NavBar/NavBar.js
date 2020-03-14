import React, { useContext, useState, useEffect } from 'react';
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

import './NavBar_Styles.scss';

const NavBar = (props) => {
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const { authData } = useContext(AuthContext);

    useEffect(() => {

    }, [])

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

    function CustomMenu() {
        if (!isMobile) {
            return (
                <li>MENU</li>
            )
        }
        return (
            <div>
                AVATAR SLIDe
            </div>
        )
    }
    console.log("DDDD", Responsive.onlyMobile.maxWidth)

    return (
        <>
            <Menu.Menu className={`navbar ${isOpen ? 'is-open' : ""}`}>


                {/* <div className={`navbar__mobile`}>
                    Mobile
                </div> */}

                <div className="navbar__mobile">

                </div>

                <div className="navbar__desktop">
                    <ul className="navbar__ul">
                        <li active><Link to="/">Home</Link></li>
                        <li><Link to="/tours">Tours</Link></li>
                        {authData.isAuthenticated ?
                            <Dropdown
                                trigger={dropdownTrigger}
                                options={menuOptions}
                                pointing='top left'
                                icon={null}
                            />
                            :
                            <li>
                                <Button color="red" inverted>Log in</Button>
                                <Button color="red" onClick={onOpenModal
                                } style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                            </li>
                        }
                    </ul>
                </div>

            </Menu.Menu>

            {/* <AuthModal open={openAuthModal} close={onCloseModal} /> */}
        </>
    );
}

export default NavBar;