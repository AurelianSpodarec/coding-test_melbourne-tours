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

import AuthDialog from './../../../AuthDialog/AuthDialog';

import './NavBar_Styles.scss';

const NavBar = (props) => {
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const { authData } = useContext(AuthContext);

    useEffect(() => {

    }, [])

    const dropdownTrigger = (
        <li>
            <span className="navbar__user-name">{authData.user && authData.user.email}</span>
            {authData.user && authData.user.photoURL ? <Image avatar src={authData.user.photoURL} /> :
                <Icon className="navbar__user-avatar" size="big" name="user circle" />}
        </li>
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

    console.log(authData.user.photoURL, "NAVVVVVVVVVVVVVVVV")
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
                                <Button color="red" onClick={onOpenModal} inverted>Log in</Button>
                                <Button color="red" onClick={onOpenModal} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
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
                                {authData && authData.user.photoURL ? <Image src={authData.user.photoURL} /> : <Icon name="user circle" />}
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
            <AuthDialog open={openAuthModal} close={onCloseModal} />
        </>
    );
}

export default NavBar;