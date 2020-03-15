import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { MainHeader, Footer } from './../components/index';
import Routes from './Routes';
import { AuthProvider } from '../context/ContextAuth';

import './Layout_scss';

function App() {
    return (
        <AuthProvider>
            <Router>
                <MainHeader />

                <Routes />

                <Footer />
            </Router>

            {/* Modal */}

        </AuthProvider>
    );
}

export default App;
