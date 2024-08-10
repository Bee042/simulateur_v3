import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from '../components/form/Form';
import Page404 from '../components/Page404';

const RouterConfig = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Form/>} />
                <Route path='*' element={<Page404/>} status={404} />
            </Routes>
        </Router>
    );
};

export default RouterConfig;

