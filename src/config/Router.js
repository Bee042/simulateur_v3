import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from '../components/Form';
import Error404 from '../components/errors/Error404';

const RouterConfig = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Form/>} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </Router>
    );
};

export default RouterConfig;

