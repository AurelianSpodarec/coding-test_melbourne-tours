import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import { MainHeader, Footer } from './../components/index';

import { AuthProvider } from '../context/ContextAuth';
import { ToursListProvider } from '../context/ToursListContext';

import './Layout_styles.scss';
import Routes from './Routes';

function App() {
    return (
        <AuthProvider>
            <ToursListProvider>

                <Router>
                    <MainHeader />

                    <Routes />

                    <Footer />
                </Router>

            </ToursListProvider>
        </AuthProvider>
    );
}

export default App;
