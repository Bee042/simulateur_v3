import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from '../components/Form';
import Page404 from '../components/errors/Page404';

const RouterConfig = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Form/>} />
                <Route path='*' element={<Page404/>} />
            </Routes>
        </Router>
    );
};

export default RouterConfig;

