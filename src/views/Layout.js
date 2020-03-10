import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { MainHeader, Footer } from './../components/index';
import Routes from './Routes';


function App() {
    return (
        <div>
            <Router>
                <MainHeader />

                <Routes />

                <Footer />
            </Router>
        </div>
    );
}

export default App;
