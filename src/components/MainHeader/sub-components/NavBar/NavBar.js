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

    function toggleMenu() {
        setIsOpen(!isOpen)
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

    return (
        <>
            <Menu.Menu className={`navbar ${isOpen ? 'is-open' : ""}`}>

                <div onClick={toggleMenu} className="navbar__bars">
                    <Icon name="bars" />
                </div>

                <div className="navbar__desktop">
                    <ul className="navbar__ul">
                        <li className="navbar__li"><Link className="navbar__link" to="/">Home</Link></li>
                        <li className="navbar__li"><Link className="navbar__link" to="/tours">Tours</Link></li>
                        <li className="navbar__li"><Link className="navbar__link" to="/About">About</Link></li>
                        {authData.isAuthenticated ?
                            <Dropdown
                                trigger={dropdownTrigger}
                                options={menuOptions}
                                pointing='top left'
                                icon={null}
                            />
                            :
                            <li className="navbar__li">
                                <Button color="red" inverted>Log in</Button>
                                <Button color="red" onClick={onOpenModal
                                } style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                            </li>
                        }
                    </ul>
                </div>

            </Menu.Menu>

            <div className={`navbar__mobile ${isOpen ? 'is-active' : ''}`}>
                <div onClick={toggleMenu}>
                    x
                </div>
                <div>
                    <ul>
                        {authData.isAuthenticated ?

                            <>
                                authData && authData.photo ? "Avatar" : <Icon name="user circle" />
                                <span>{authData && authData.email}</span>
                            </>
                            :

                            <>

                                <li><Link to="/">Log In</Link></li>
                                <li><Link to="/">Sign Up</Link></li>

                            </>
                        }


                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tours">Tours</Link></li>
                    </ul>
                </div>
            </div>
            {/* <AuthModal open={openAuthModal} close={onCloseModal} /> */}
        </>
    );
}

export default NavBar;